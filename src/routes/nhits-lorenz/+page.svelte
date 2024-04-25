<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Link from '$lib/Link.svelte';
	import NhitsArch from '$lib/NhitsArch.svelte';
	import InitialConditions from '$lib/initialConditions.svelte';
	import Ref from '$lib/ref.svelte';
	import References from '$lib/refs.svelte';
	import H1 from '$lib/H1.svelte';
	import H2 from '$lib/H2.svelte';
	import P from '$lib/P.svelte';
	import HP from '$lib/hp.svelte';
	import FigCap from '$lib/figcap.svelte';
	import Model1LargeError from '$lib/model_1_large_error.svelte';
	import Model1MedError from '$lib/model_1_med_error.svelte';
	import Model1SmallError from '$lib/model_1_small_error.svelte';

	const equLorenz = `
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`;
	const equParams = `
\\begin{align}
\\sigma & = 10 \\\\
\\beta & = \\frac{8}{3} \\\\
\\rho & = 28 \\\\
\\end{align}`;

	const lyapunovExp = `
\\begin{align}
\dt & \\approx 0.015 \\mathrm{s} \\\\
\\lambda_{max}^{-1} & \\approx 1.121 \\mathrm{s} \\\\
\H = 100 \\text{ points} & \\approx 1.34\\lambda_{max}^{-1} \\\\
\\end{align}`;

	const sMAPE = `
\\begin{align} 
\\operatorname{\\epsilon}(t) := \\frac{200}{t} \\sum_{t'=1}^t \\frac{|\\operatorname{\\boldsymbol{y}}(t')-\\operatorname{\\boldsymbol{\\hat{y}}}(t')|}{|\\operatorname{\\boldsymbol{y}}(t')| + |\\operatorname{\\boldsymbol{\\hat{y}}}(t')|} \\\\
\\end{align}`;

	const modelOneHPs = [
		{ desc: 'horizon length', val: 100 },
		{ desc: 'lookback window length', val: 500 },
		{ desc: 'dt', val: 0.015008 },
		{ desc: 'number of stacks', val: 3 },
		{ desc: 'blocks per stack', val: 1 },
		{ desc: 'mlp layers per block', val: 4 },
		{ desc: 'mlp layer size', val: 1024 },
		{ desc: 'activation function', val: 'ReLU' },
		{ desc: 'max pooling factors', val: '2, 2, 2' },
		{ desc: 'frequency downsampling factors', val: '24, 12, 1' },
		{ desc: 'batch size', val: 512 },
		{ desc: '# training steps', val: 10000 },
		{ desc: 'learning rate', val: '1e-3' },
		{ desc: 'learning rate schedule', val: 'halve every 3,333 steps' },
		{ desc: 'total trainable parameters', val: '~20 million' }
	];
	const modelTwoHPs = [
		{ desc: 'number of stacks', val: 4 },
		{ desc: 'blocks per stack', val: 8 },
		{ desc: 'mlp layer size', val: 2048 },
		{ desc: 'max pooling factors', val: '10, 4, 2, 1' },
		{ desc: 'frequency downsampling factors', val: '25, 12, 6, 1' },
		{ desc: 'batch size', val: 512 },
		{ desc: '# training steps', val: 150000 },
		{ desc: 'run validation every', val: '5000 steps' },
		{ desc: 'learning rate', val: '1e-4' },
		{ desc: 'learning rate schedule', val: 'halve whenever validation loss does not decrease' },
		{ desc: 'all other hyperparameters', val: 'same as Model 1' },
		{ desc: 'total trainable parameters', val: '~645 million' }
	];
	const modelThreeHPs = [
		{ desc: 'horizon', val: 500 },
		{ desc: 'lookback', val: 2500 },
		{ desc: 'dt', val: 0.0030016 },
		{ desc: 'all other hyperparameters', val: 'same as Model 2' }
	];

	onMount(() => {
		let script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
		script.async = true;
		document.head.append(script);

		window.MathJax = {
			tex: {
				inlineMath: [
					['$', '$'],
					['\\(', '\\)']
				]
			},
			processEscapes: true
		};
	});
</script>

<div class="mx-auto flex flex-col mx-4 w-[98%] lg:w-[75%] xl:w-[60%]">
	<div class="mt-8 text-2xl text-center">
		Modeling Chaotic Dynamics with Deep Learning: A Case Study on the Lorenz Attractor
	</div>
	<div class="mt-2 text-sm text-center">Michael Horgan</div>
	<br />
	<P>
		This project is inspired by several recent publications involving the use of deep learning
		to predict or control chaotic dynamical systems, in particular William Gilpin's paper, <i
			>Model scale versus domain knowledge in statistical forecasting of chaotic systems</i
		>
		<Ref id="gilpin" />. Gilpin found that, given enough training data, generic neural
		architectures can match or exceed the performance of state-of-the-art domain-specific
		choatic forecasting models such as reservoir computers and neural ODEs. Although I have
		never studied dynamical systems in depth, I have recently become highly intrigued by the
		prospect of applying deep learning to prediction tasks involving chaotic systems, as I
		explore ways to contribute to the efforts to find technical solutions to climate change.
		Along with Gilpin's paper, there have been several recent publications on the subject that
		were especially exciting to me, particularly the ones applying deep learning to tokamak
		control in nuclear fusion reactors (see e.g. <Ref id="seo" />, <Ref id="degrave" />).
	</P><P
		>My goal with this project is to get some hands-on experience with a chaotic system and
		probe deeper into Gilpin's findings by testing the limits of a neural network's ability to
		model a single chaotic system (within the computational constraints imposed by my limited
		budget*). I'll start with what is probably the most well known chaotic system, the Lorenz
		Attractor. As my dynamical systems background is a bit rusty, I will be (re)discovering many
		of the properties of the Lorenz System, and dynamical systems in general, as I go, often
		using the results of my experiments to guide my investigation. What exactly makes the Lorenz
		Attractor chaotic? And what constraints will that impose on the ability of a deep neural
		network to model it? Let's find out!
	</P>
	<div class="my-4 mx-16 text-sm font-serif -indent-16">
		<p>
			* All of my experiments were run on a Paperspace VM using two RTX 5000s, each with 16 GB
			of RAM.
		</p>

		<p>
			note: All code used in this project is available in my github repo: <Link
				href="https://github.com/nrxszvo/mochaNN">mochaNN</Link
			>
		</p>
		<p>
			note: For a quick and entertaining way to stay informed of new developments in the world
			of DL for dynamical systems modeling, I highly recommend Sabine Hossenfelder's <Link
				href="https://www.youtube.com/@SabineHossenfelder">Youtube channel</Link
			>
		</p>
		<p>
			note: If you would like to refresh your background on dynamical systems theory, I highly
			recommend Steve Brunton's free <Link
				href="https://www.youtube.com/playlist?list=PLMrJAkhIeNNTYaOnVI3QpH7jgULnAmvPA"
				>lecture series</Link
			> on the subject
		</p>
	</div>
	<H1>The Lorenz Attractor</H1>
	<P>
		The
		<Link href="https://en.wikipedia.org/wiki/Lorenz_system">Lorenz Attractor</Link> was developed
		by Edward Lorenz et. al. in 1963 as a simplified model of atmospheric convection.</P
	>
	<div class="my-2 self-center">
		<a
			title="Dan Quinn, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
			href="https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"
			><figure>
				<img
					class="m-auto"
					width="128"
					alt="A Trajectory Through Phase Space in a Lorenz Attractor"
					src="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"
				/>
				<FigCap>The Lorenz Attractor</FigCap>
			</figure>
		</a>
	</div>
	<P>
		The Lorenz system is comprised of three ordinary differential equations representing the
		properties of convection and horizontal and vertical temperature in a two-dimensional fluid
		layer:
	</P>
	<div class="self-center"><p>{equLorenz}</p></div>
	<P
		>The Lorenz <i>Attractor</i> refers to a set of chaotic solutions to the system, most commonly:</P
	>
	<div class="self-center"><p>{equParams}</p></div>
	<P>
		I used Gilpin's <Link href={'https://github.com/williamgilpin/dysts'}>dysts</Link> python module
		to generate the training data for this solution.
	</P>
	<H1>Neural Architecture: N-HiTS</H1>
	<P>
		The N-HiTS <Ref id="challu" /> forecasting network is known to produce state-of-the-art results,
		at the time of writing, for univariate time series prediction, with up to an order of magnitude
		lower computational requirement than some competitors. Given my limited budget and its strong
		performance reported in <Ref id="gilpin" />, it seemed like the natural starting point for a
		network architecture.
	</P>
	<P>
		The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS <Ref
			id="oreshkin"
		/>, a neural basis expansion network for time series prediction. The key ideas inherited
		from N-BEATS include the organization of fully connected layers into blocks that output
		basis expansions (linear projections of the preceding fully connected layer's output) and
		the use of both forecast and backcast predictions from each block. The forecast predictions
		from all blocks are summed together to produce the final output of the network, while the
		backcasts are subtracted from the input of the corresponding block to produce a residual
		connection as the input to the next block. The goal of the backcasts is to help the
		downstream blocks by "removing components of their input that are not helpful for
		forecasting" <Ref id="oreshkin" />.
	</P>
	<P
		>The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
		horizons while keeping computational complexity low. They include the use of pooling layers
		that downsample the inputs to each block and upsampling layers that map a compressed
		representation of the forecast to the output sample rate. In addition to the complexity
		savings, the compressed representations may induce a bias towards a temporal hierarchical
		modeling of the time series across the blocks that allows N-HiTS to exceed the performance
		of competing long-horizon forecasting models while requiring an order of magnitude lower
		computational complexity <Ref id="challu" />.
	</P>
	<H1>Experiments</H1>
	<P>
		While Gilpin's experiments focus on testing 24 different time-series prediction models on
		over 130 different chaotic systems using a relatively narrow range of hyper parameters for
		tuning <Ref id="gilpin" />, my experiments aim to tune a single model, N-HiTS, on a single
		system, the Lorenz Attractor, to maximize its accuracy for a given, relatively long, fixed
		horizon (aka prediction window length). And more specifically, I aim not only to achieve a
		low average error on the test set but also to limit the worst-case error as much as
		possible, which will likely mean achieving a degree of predictive power over the most
		chaotic regions of the system. Is this a completely naive aspiration given what is known
		about chaotic systems? Maybe, but I'm not really sure yet, and either way this should be a
		fun learning experience...
	</P><H2>Data Generation</H2><P
		>I begin with a horizon (prediction window) of 100 points, using a {`$dt$`} of approximately
		{`$0.015$`} seconds per point (the default from <Link
			href="https://github.com/williamgilpin/dysts">dysts</Link
		>) to sample the solution produced by the <Link
			href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html"
			>IVP solver</Link
		>. Importantly, note that this {`$dt$`} is only the one used for sampling the solution
		<i>after</i>
		it is generated by the IVP solver. The actual {`$dt$`} used internally by the IVP solver can
		vary dynamically, but the initial target value used by <Link
			href="https://github.com/williamgilpin/dysts">dysts</Link
		> is {`$\\text{first_step} = 0.0001801$`}.
	</P><P
		>At this stage, it may also be worth mentioning one of the common metrics for measuring the
		average chaoticity of a system, the maximum
		<Link href="https://en.wikipedia.org/wiki/Lyapunov_exponent">Lyapunov exponent</Link>. As
		reported in
		<Link href="https://github.com/williamgilpin/dysts">dysts</Link>, the Lyapunov exponent for
		the Lorenz Attractor is approx. {`$0.8917$`}, and so the <Link
			href="https://en.wikipedia.org/wiki/Lyapunov_time">Lyapunov time</Link
		> is approx.
		{`$1.121s$`}.
	</P>
	<div class="self-center"><p>{lyapunovExp}</p></div>

	<P indent="indent-0"
		>This tells us that, <i>on average</i>, the distance between any two trajectories from the
		Lorenz Attractor are expected to diverge by a factor of {`$e$`} after
		{`$1.121$`} seconds. Note that with these parameters, the horizon covers a time period of about
		{`$\\frac{4}{3}$`}
		of the Lyapunov time.
	</P><P
		>The train and test sets are comprised of many trajectories with initial conditions all
		centered at approx. {`$[-9.79, -15.04, 20.53]$`} and multiplied by a random perturbation uniformly
		sampled from the interval {`$[0.99,1.01]$`}.</P
	>
	<P indent="indent-0"
		>The input to the N-HiTs model is a lookback window of the previous series values whose
		length is typically some multiple of the horizon window. I went with the default value from
		the N-HiTS paper of 5 times the horizon window length, or 500 points, making each training
		sample a total of 600 points. (Note that because N-HiTs is a univariate model, while the
		Lorenz System is three-dimensional, the data points must be flattened into one dimension.
		Therefore, the horizon window length is actually {`$3*100 = 300$`}, and each training
		sample's length is {`$3 * (500 + 100) = 1800$`}).
	</P>
	<P
		>I choose, somewhat arbitrarily, to generate 10,000 points per series, and in order to
		increase data efficiency, I select each training sample by sliding the 600-point window
		along the series with a one-point stride. Each series, therefore, contributes {`$10,000 - 600 +
		1 = 9401$`} training samples. For the initial experiment, I generate 25 series with unique initial conditions,
		and train on 19 of them, and hold out 3 series for validation and 3 series for testing.</P
	>
	<H2>Model 1</H2>
	<p class="mt-2">The full set of N-HiTS hyperparameters for the first model configuration is:</p>
	<HP hps={modelOneHPs} />
	<P indent="indent-0"
		>The model is optimized with MAE loss, consistent with the default loss from <Ref
			id="challu"
		/>. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as defined in
		<Ref id="gilpin" />:</P
	>
	<div>{sMAPE}</div>
	<P
		>In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of average
		window errors and its CDF on the test set are shown below. Note that the left y axis is
		log-scaled.</P
	>
	<figure class="mb-6 self-center">
		<img class="m-auto" src={`${base}/Model1ErrDist.png`} alt="" width="600" height="600" />
		<FigCap>Model 1 - sMAPE error distribution on the test set</FigCap>
	</figure>

	<P
		>To gain a more intuitive understanding of the magnitude of these errors, we can plot
		individual window predictions against the references:</P
	>
	<figure class="mt-6 mb-6 self-center">
		<div class="flex justify-between">
			<Model1SmallError />
			<Model1MedError />
			<Model1LargeError />
		</div>
		<FigCap>
			Samples of three different 100-point predictions from Model 1 with small, medium, and
			large sMAPE errors
		</FigCap>
	</figure>
	<P
		>One interesting observation in all three graphs is that there appears to be a kind of
		"point of divergence" on the prediction before which the average error is very low and after
		which the error grows quickly. In the first graph, this point is about in the middle of the
		prediction, in the second it is maybe one third of the way into the prediction, and in the
		third it is near the beginning. If we look at the predictions of adjacent windows, we see
		that the behavior at this point is consisent across the windows, indicating that there is
		something about the system's behavior in this region that is very difficult for this model
		to fit, regardless of its alignment within the prediction window.</P
	>
	<figure class="mt-6 mb-6 self-center">
		<img
			class="m-auto"
			src={`${base}/model-1-pod.gif`}
			alt="prediction point of divergence"
			width="450"
			height="350"
		/>
		<FigCap>
			The behavior of the model near the origin, which is a critical point of the system, for
			an especially challenging case. In contrast to all other regions of this trajectory, the
			model seems highly uncertain of how the trajectory will evolve shortly after passing
			near the origin.
		</FigCap>
	</figure>
	<P
		>For anyone familiar with dynamical systems theory, it won't be a surprise that this point
		coincides with one of the three <Link
			href="https://en.wikipedia.org/wiki/Critical_point_(mathematics)">critical points</Link
		> of the Lorenz system--in this case, the origin. And in this parameterization, the origin is
		known to be a saddle point comprised of the intersection of a stable 2D manifold and an unstable
		1D manifold. "Stable" means that trajectories near the manifold tend to move towards it even
		when they are perturbed slightly away from it by other forces, while "unstable" implies the opposite.
		(See <Ref id="osinga" /> for some excellent visualizations of these manifolds.) Near the origin,
		the unstable manifold is a line that is approximately perpendicular to the Z axis and parallel
		to the lengthwise orientation of the Attractor, which is why the trajectories always diverge
		at the near 90-degree angles that we see in the animations as they approach the origin. And the
		(incredibly complex) topography of the stable 2D manifold determines towards which of the other
		two critical points a trajectory will be deflected <Ref id="osinga" />. From this I conclude
		that, technically, we can say that the primary goal of our neural network is to learn the
		topography of the origin's stable 2D manifold. As the manifold defines a boundary across
		which trajectories can never pass, we can confine the past and future trajectory of any
		point to be within the boundary.
	</P><P
		>We can estimate how unstable the 1D manifold is by calculating the eigenvalues of the
		Jacobian matrix of the system at the origin and assuming the dynamics are approximately
		linear in this region. The eigenvalue with the largest real component dominates the
		dynamics, and by definition, the real part of this eigenvalue for an unstable mainfold will
		be positive, with the dynamics along the manifold being approximated by the expression {`$f(t) = \\exp(\\lambda t)$`},
		where {`$\\lambda$`} equals the real part of the largest eigenvalue. For the Lorenz Attractor,
		this value is {`$11.8$`}, so trajectories will be rapidly deflected away from the origin, as
		we see in the below animation:</P
	>
	<!--P
		>We can calculate the <i>local</i> Lyapunov exponent at this saddle point to get an estimate
		of just how chaotic the behavior of the system is in the neighborhood of the origin. The
		local Lyapunov exponent is the largest eigenvalue of the Jacobian of the system at the
		origin, which for the Lorenz Attractor is approximately {`$11.8$`}. Compare this with the
		estimate of the global Lyapunov exponent of {`$\\approx 0.89$`}, and it is clear that the
		origin is highly unstable relative to the average conditions on the Lorenz Attractor. In
		fact, when we inspect the ground-truth trajectories from the dataset, we see that they all
		remain very close to each other until they approach the origin, at which point they rapidly
		diverge.
	</P-->
	<figure class="mt-6 mb-6 self-center">
		<img
			class="m-auto"
			src={`${base}/trajectories.gif`}
			alt="trajectories approaching origin"
			width="350"
			height="300"
		/>
		<FigCap>
			The trajectories from the training set all begin at nearly the same point but quickly
			diverge as they approach the critical point at the origin.
		</FigCap>
	</figure>
	<P
		>Given all of this background, it is now unsurprising that the model is struggling to
		predict the behavior of the system near the origin. But we should also note that the model
		does quite well at predicting basically every other region of the system. We just have to
		figure out a way to improve the predictions near the origin, and then we should have a model
		with an overall very robust representation of the Lorenz Attractor. As this model and its
		training set are relatively modest in size, the next most obvious step to try is to
		signifcantly increase both the amount of training data and the model's capacity, and see if
		those changes alone are enough to resolve the weaknesses of Model 1.</P
	>
	<H2>Model 2</H2>
	<P
		>For the next model, I increased the number of unique initial conditions from 25 to 10000,
		and held out 100 for validation and 200 for testing, leaving 9700 unique initial conditions,
		each of length 10,000 points, or about 150 seconds, in the training set. I also expanded the
		range of hyperparameters for tuning to include significantly larger models, both in depth
		and width. After tuning, I arrived at the following settings:</P
	>
	<HP hps={modelTwoHPs} />
	<p class="mt-2">
		Note that Model 2 has roughly 32x the number of trainable parameters as Model 1. I've
		increased the depth (number of stacks, blocks per stack) and width (mlp layer size) of the
		network, and I've also significantly increased the amount of compression in the initial
		stacks. Because the network is much deeper, I also added layer normalization after each
		block to try to help reduce convergence time. Lastly, I increased the number of training
		steps and reduced the initial learning rate by an order of magnitude, and I modified the
		learning rate schedule to reduce by half whenever the validation loss does not decrease from
		the previous validation step.
	</p>
	<figure class="mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/Model2ErrDist.png`}
			alt=""
			width="600"
			height="600"
		/><FigCap>Model 2 vs Model 1 - sMAPE error distribution.</FigCap>
	</figure>
	<P
		>From the plot, we see a significant increase in the first bin and a reduction in every
		subsequent bin of the per-window error histogram relative to Model 1, so the larger dataset
		and new hyperparameter tunings have a definite and significant positive impact. 99% of
		windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1, and 99.9%
		have a sMAPE less than 40, compared to 98% for Model 1.</P
	><P
		>There are, however, still a handful of windows with very large sMAPE errors. We can
		visualize these errors slightly differently to get a better sense of how they are
		distributed within and across the test series:</P
	>
	<figure class="-mt-2 mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/Model2Err3d.png`}
			alt=""
			width="600"
			height="600"
		/><FigCap>Model 2 - sMAPE errors per series per window in the test set.</FigCap>
	</figure>
	<P
		>We see that very large errors occur quite rarely and briefly, with the predictions spending
		most of the time near the ground truth. Let's check the animation for one of the large
		spikes with a sMAPE greater than 100:</P
	>
	<figure>
		<img
			class="m-auto"
			src={`${base}/model-2-pod.gif`}
			alt="model 2 point of divergence"
			width="400"
			height="340"
		/>
		<FigCap>
			Model 2 - a trajectory with one of the largest sMAPE errors from the test set. DFO =
			'distance from origin'
		</FigCap>
	</figure>
	<P
		>Not surprisingly, this trajectory passes very close to the origin, and we immediately see
		how similar this failure case is to the one from Model 1. Despite the average improvement
		across all error magnitudes, has the model's ability to predict the behavior near the
		unstable origin actually improved significantly relative to Model 1? Let's check:</P
	>
	<figure class="-mt-2 mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/Model2DFO.png`}
			alt="distance from origin vs. sMAPE"
			width="800"
			height="600"
		/><FigCap>
			Each local minimum distance from the origin on the ground truth trajectories is
			calculated, and the corresponding maximum sMAPE error among the windows that included
			the minimum in its target is shown. A local minimum is defined as a point at time {`$n$`}
			that is closer to the origin than the points at {`$n-1$`} and {`$n+1$`}.
		</FigCap>
	</figure>
	<P
		>As we can clearly see from the plot, Model 2 is able to predict points that are closer to
		the origin significantly more accurately than Model 1. So although Model 2 is not able to
		avoid catastraphic failure for all points, it has indeed reduced the number of points for
		which these failures occur.
	</P>
	<P
		>So we've drastically increased both model capacity and dataset size, and we have only
		achieved marginal improvement on the most chaotic trajectories. To continue to make
		progress, we probably need to try a different approach. One idea is to increase the temporal
		resolution of the model by using a smaller {`$dt$`} to generate our data points. So far we've
		used a {`$dt$`} of {`$\\approx0.015$`}. Let's try reducing that by a factor of 5 to {`$\\approx0.003$`},
		and in order to keep the prediction task equally difficult, we'll also increase the horizon
		window, and lookback window, by a factor of 5 to 500 and 2500 respectively, so that the
		total amount of time being predicted is still {`$\\approx1.5$`} seconds. We'll call this Model
		3.</P
	>
	<H2>Model 3</H2>
	<HP hps={modelThreeHPs} />
	<P style="my-4 text-sm font-serif" indent="indent-0"
		>A sidenote on the practicality of training this model: <p class="ms-8">
			Although we have not increased the number of parameters relative to Model 2, by
			increasing the input size and horizon length by a factor of 5, we have significantly
			increased the memory requirement for training this model. Now in order to fit the model
			on two GPUs with 16 GB of RAM each, I have to use Lightning's <Link
				href="https://lightning.ai/docs/pytorch/stable/advanced/model_parallel/fsdp.html"
				>FSDP Strategy</Link
			> to distribute the model across both GPUs and get the per-GPU memory requirement to be just
			a hair under 16 GB. This also means that the model trains significantly more slowly, taking
			about 40 hours to converge, compared to about 16 hours for Model 2.
		</p></P
	>
	<P
		>After retraining Model 2 with a new dataset that samples the Lorenz Attractor trajectories
		with {`$dt \\approx 0.003$`}, we see that we are now able to predict all regions of the test
		set with sMAPE error {`$\\lt80$`}:
	</P>
	<figure class="mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/Model2vModel3.png`}
			alt=""
			width="600"
			height="600"
		/><FigCap>Model 3 vs. Model 2 - sMAPE error distribution.</FigCap>
	</figure>
	<P
		>The most challenging trajectories from the test set are significantly improved, although
		still far from perfect:</P
	>
	<figure>
		<img
			class="m-auto"
			src={`${base}/model-3-low-dfo.gif`}
			alt="Model 3 trajectory example"
			width="800"
			height="800"
		/>
		<FigCap>
			The maximum-error trajectory from the test set for Model 3. Although there is still lots
			of room for improvement, the predictions now at least roughly track the general contour
			of the ground truth.
		</FigCap>
	</figure>
	<P
		>Based on the results of Model 3, we can conclude that a primary limiting factor with
		previous models was the temporal resolution of the trajectory's history; the information
		required to make an accurate prediction for the most challenging trajectories is apparently
		not contained in trajectories with a sample period of {`$dt \\approx 0.015$`}, but much more
		of it is contained in trajectories with a sample period of {`$dt \\approx 0.003$`}.</P
	>
	<H2>Autoregressive Generation</H2>
	<P>
		Now that we have a model that adequately approximates the ODE given the last {`$\\approx 7.5$`}
		seconds of the IVP solver's output, the next test is to measure how well the model continues
		to predict the trajectory given its own past predictions. To do this, for each trajectory in
		the test set, we will begin by using the first 2500 points to produce the model's prediction
		for points 2501-3000. Then we'll feed those 500 points back into the input to predict points
		3001-3500, and continue in this way for all 10,000 points in each trajectory. Then we can compare
		how closely the predicted trajectories match the ones produced by the IVP solver.
	</P><P
		>When we do this, we find that Model 3 is, on average, able to predict the first {`$\\approx7.2$`}
		seconds of the trajectory before it begins to diverge significantly from the reference (I arrived
		at this by calculating the mean time at which the L2 distance between the trajectories exceeds
		3). But we also note that, although there are clearly visible differences between the reference
		and the prediction, the full 10,000-point trajectories that Model 3 predicts are, to the naked
		eye at least, more or less indistinguishable from the typical trajectories of the Lorenz Attractor.
		In other words, they look like entirely plausible trajectories even if they eventually diverge
		significantly from the ones produced by the IVP solver for the same initial conditions.</P
	>
	<figure class="mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/ref_v_ar.png`}
			alt="Reference vs. Autoregressive Trajectories"
			width="450"
			height="500"
		/><FigCap>
			Comparison of trajectories generated by the IVP solver (left) and auto-regressively
			generated by Model 3 (right). Each row uses the same initial conditions.
		</FigCap>
	</figure>
	<P
		>Is there a way to confirm this observation more rigorously than with the eye test alone?
		I'm not sure, and I'll have to leave that question for future work. But it's also crucial to
		note that different IVP solvers also produce diverging trajectories in much the same manner
		as this. In fact, all numerical solutions to chaotic equations are known to diverge from the
		true solution due to the rounding error introduced by finite precision. The <Link
			href="https://en.wikipedia.org/wiki/Shadowing_lemma">shadowing lemma</Link
		> tells us that, in spite of this, the trajectories produced by IVP solvers still remain arbitrarily
		close to real trajectories from the ODE even if they do not exactly represent the ones that would
		be produced by the given initial conditions.
	</P><P
		>In light of this, another way to evaluate the autoregressive output of our model is to
		compare it with the output from a different IVP solver with similar error constraints. <Link
			href={'https://github.com/williamgilpin/dysts'}>dysts</Link
		> uses the <Link
			href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.Radau.html"
			>Radau</Link
		> solver by default, and this is what I used to generate the dataset. <Link
			href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.RK45.html#scipy.integrate.RK45"
			>RK45</Link
		> has similar error constraints to Radau, so let's compare our autoregressive output against
		Radau relative to RK45's output against Radau:</P
	>
	<figure class="mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/rk45_vs_nhits.png`}
			alt="Comparison of RK45 and predictions to Radua's solutions"
			width="600"
			height="600"
		/>
		<FigCap>
			Comparing the mean absolute error per timestep between Radau and Model 3 (blue) and
			Radua and RK45 (orange). The error is averaged across 200 different trajectories.
			Scipy's <Link
				href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html"
				>solve_ivp</Link
			> is used to produce the IVP solver outputs.
		</FigCap>
	</figure>
	<P
		>So we can say that our model is approximating the output of Radau more closely than another
		high-quality IVP solver. Ultimately, all three solvers diverge chaotically from each other,
		but in the short term, Model 3 remains closer to Radau than RK45. From this I tenatively
		conclude that our model is an effective IVP solver of the Lorenz Attractor.</P
	>
	<H2>Conclusion</H2>
	<P
		>Inspired by recent research (<Ref id="gilpin" />) that supports the potential for generic
		neural architectures to match or exceed the performance of domain-specific models at the
		task of predicting chaotic systems, this project demonstrated the strong potential of at
		least one generic neural architecture (<Ref id="challu" />) to qualitatively match the
		performance of state-of-the-art IVP solvers, such as Radau, at integrating the ODE for at
		least one specific system--Lorenz--using only examples of solutions, with no explicit
		representation of the underlying ODE, to build up a model of the entire dynamics of the
		system. Given {`$5H$`} points of an initial trajectory and at a high enough temporal resolution,
		the neural model demonstrated the ability to predict the subsequent {`$H$`} outputs of the Radau
		solver with, in most cases, high accuracy, and in the worst case, marginal accuracy, for all
		trajectories in a test set that uniformly sampled the phase space of the system. When used autoregressively,
		the model demonstrated the potential to generate arbitrarily long trajectories that are visually
		indistinguishable from typical trajectories of the system and that match the output of the Radau
		solver at least as well as other state-of-the-art IVP solvers such as RK45.
	</P>
	<P
		>It must be noted, however, that the amount of data and model capacity used to achieve these
		results was substantial. Roughly 100 million data points from the Lorenz Attractor were used
		to train a model with over half a billion parameters for 40 hours using two GPUs. Although
		these numbers are modest compared to many of the most successful deep learning applications
		today, they are likely still far from trivial, in my opinion. For how many real-world
		chaotic systems with no known ODE representation is it feasible to gather 100 million data
		points? And could such a large model be optimized to run predictions in real-time for
		systems that require it to? I certainly do not know, but it seems plausible that such
		requirements could pose a significant barrier in many real-world cases. Having said all of
		that, it must also be noted that maximizing data and model efficiency was not a focus of
		this project, and so the potential for optimization is an open question.</P
	><P
		>My other, and possibly more critical, open question is, given that this model (and all IVP
		solvers) cannot actually predict the true solution but instead can only predict 'shadows' of
		true solutions (see <Link href="https://en.wikipedia.org/wiki/Shadowing_lemma"
			>shadowing lemma</Link
		>), how useful can these predictions actually be in real-world applications? Is there any
		practical use for such a system, or are projects like this merely academic exercises? Is the
		true potential of deep neural networks as applied to chaotic systems more in their ability
		to prevent systems from entering chaotic regimes, as is explored in <Ref id="seo" />
		and <Ref id="degrave" />, rather than to actually predict how chaotic dynamics will unfold?
		I suspect the answer is 'yes', although again I am far from certain. In either case, these
		results show a definite ability of generic deep neural networks to mimic the dynamics of a
		chaotic system, which may not amount to predicting future states but may still be enough to
		enable control systems to effectively manage those future states.</P
	>
	<H2>References</H2>
	<References />
</div>
