<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Link from '$lib/Link.svelte';
	import NhitsArch from '$lib/NhitsArch.svelte';
	import InitialConditions from '$lib/initialConditions.svelte';
	import { refIndices } from '$lib/refs.svelte';
	import References from '$lib/refs.svelte';
	import H1 from '$lib/H1.svelte';
	import H2 from '$lib/H2.svelte';
	import P from '$lib/P.svelte';
	import HP from '$lib/hp.svelte';
	import FigCap from '$lib/figcap.svelte';
	import Model1ErrDist from '$lib/model_1_err_dist.svelte';
	import Model1LargeError from '$lib/model_1_large_error.svelte';
	import Model1MedError from '$lib/model_1_med_error.svelte';
	import Model1SmallError from '$lib/model_1_small_error.svelte';
	import Model2ErrDist from '$lib/model_2_err_dist.svelte';
	import Model2Err3d from '$lib/model_2_err_3d.svelte';

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
		{ desc: 'learning rate schedule', val: 'halve every 3,333 steps' }
	];
	const modelTwoHPs = [
		{ desc: 'number of stacks', val: 4 },
		{ desc: 'mlp layer size', val: 4096 },
		{ desc: 'max pooling factors', val: '10, 4, 2, 1' },
		{ desc: 'frequency downsampling factors', val: '60, 25, 6, 1' },
		{ desc: 'batch size', val: 256 },
		{ desc: '# training steps', val: 200000 },
		{ desc: 'learning rate', val: '1e-4' },
		{ desc: 'learning rate schedule', val: 'halve every 16667 steps' }
	];
	const modelThreeHPs = [
		{ desc: 'number of stacks', val: 4 },
		{ desc: 'blocks per stack', val: 8 },
		{ desc: 'mlp layer size', val: 2048 },
		{ desc: 'max pooling factors', val: '10, 4, 2, 1' },
		{ desc: 'frequency downsampling factors', val: '25, 12, 6, 1' },
		{ desc: 'batch size', val: 512 },
		{ desc: '# training steps', val: 150000 },
		{ desc: 'run validation every', val: '5000 steps' },
		{ desc: 'learning rate', val: '1e-4' },
		{ desc: 'learning rate schedule', val: 'halve whenever validation loss does not decrease' }
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
	<div class="text-2xl text-center">
		Exploring the Chaotic Properties of the Lorenz Attractor using Deep Learning
	</div>
	<br />
	<P>
		This project is inspired by a recent publication by William Gilpin, Model scale versus
		domain knowledge in statistical forecasting of chaotic systems [{refIndices['gilpin']}].
		Gilpin found that, given enough training data, generic neural architectures can match or
		exceed the performance of state-of-the-art domain-specific choatic forecasting models such
		as reservoir computers and neural ODEs. Although I have very little background in dynamic
		systems and chaos theory, I find the prospect of applying deep learning to prediction tasks
		involving chaotic systems very exciting. Along with Gilpin's paper, there have been several
		recent publications on the subject that were especially interesting to me, namely the ones
		applying deep learning to tokamak control in nuclear fusion reactors (see _).</P
	><P
		>My goal with this project is to get some hands-on experience with a chaotic system and
		probe deeper into Gilpin's findings by testing the limits of a neural network's ability to
		model a single chaotic system (within the computational constraints imposed by my limited
		budget*). I'll start with what is probably the most well known chaotic system, the Lorenz
		Attractor. As I do not have a background in dynamical systems, I will be discovering many of
		the properties of the Lorenz System as I go, often using the results of my experiments to
		guide my investigation. What exactly makes the Lorenz Attractor chaotic? And what
		constraints will that impose on the ability of a deep neural network to model it? Let's find
		out!
	</P>
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
		The N-HiTS [{refIndices['challu']}] forecasting network is known to produce state-of-the-art
		results (at the time of writing) for univariate time series prediction, wth up to an order
		of magnitude lower computational requirement than its competitors. Given my limited budget
		and its strong performance reported in [{refIndices['gilpin']}], it seemed like the natural
		starting point for a network architecture.
	</P>
	<figure class="my-2 self-center">
		<FigCap>
			The N-HiTS architecture. Image taken from [{refIndices['challu']}].
		</FigCap>
	</figure>
	<P>
		The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS [{refIndices[
			'oreshkin'
		]}], a neural basis expansion network for time series prediction. The key ideas inherited
		from N-BEATS include the organization of fully connected layers into blocks that output
		basis expansions, i.e. linear projections of the preceding fully connected layer's output,
		and the use of both forecast and backcast predictions from each block. The forecast
		predictions from all blocks are summed together to produce the final output of the network,
		while the backcasts are subtracted from the input of the corresponding block to produce a
		residual connection as the input to the next block. The goal of the backcasts is to help the
		downstream blocks by "removing components of their input that are not helpful for
		forecasting".
	</P>
	<P
		>The novel ideas from N-HiTS enable the possiblity of modeling increasingly long time
		horizons while keeping computational complexity low. They include the use of pooling layers
		that downsample the inputs to each block and upsampling layers that map a compressed
		representation of the forecast to the output sample rate. In addition to the complexity
		savings, the compressed representations may induce a bias towards a temporal hierarchical
		modeling of the time series across the blocks that allows N-HiTS to exceed the performance
		of competing long-horizon forecasting models while requiring an order of magnitude lower
		computational complexity [{refIndices['challu']}].
	</P>
	<H1>Experiments</H1>
	<P>
		While Gilpin's experiments focus on testing 24 different time-series prediction models on
		over 130 different chaotic systems using a relatively narrow range of hyper parameters for
		tuning [{refIndices['gilpin']}], my experiments aim to tune a single model, N-HiTS, on a
		single system, the Lorenz Attractor, to maximize its accuracy for a given, relatively long,
		fixed horizon (aka prediction window length). And more specifically, I aim not only to
		achieve a low average error on the test set but also to limit the worst-case error as much
		as possible, which will likely mean achieving a degree of predictive power over the most
		chaotic regions of the system. Is this a completely naive aspiration given what is known
		about chaotic systems? Maybe, but I'm not really sure yet, and either way this should be a
		fun learning experience, so let's find out...
	</P><P
		>I begin with a horizon (prediction window) of 100 points, using a {`$dt$`} of approximately
		{`$0.015$`} seconds per point. At this stage, it may be worth mentioning one of the common metrics
		for measuring the average chaoticity of a system, the maximum <Link
			href="https://en.wikipedia.org/wiki/Lyapunov_exponent">Lyapunov exponent</Link
		>. As reported in Gilpin's
		<Link href="https://github.com/williamgilpin/dysts">dysts</Link> repo, the Lyapunov exponent
		for the Lorenz Attractor is approx. {`$0.8917$`}, and so the <Link
			href="https://en.wikipedia.org/wiki/Lyapunov_time">Lyapunov time</Link
		> is approx.
		{`$1.121s$`}. Therefore, a horizon of 100 points covers a time period of about {`$\\frac{4}{3}$`}
		of the Lyapunov time.
	</P>
	<div class="self-center"><p>{lyapunovExp}</p></div>

	<P indent="indent-0"
		>This tells us that, <i>on average</i>, the distance between any two trajectories from the
		Lorenz Attractor are expected to diverge by a factor of {`$e$`} after
		{`$1.121$`} seconds.
	</P><P
		>The train and test sets are comprised of many trajectories with initial conditions all
		centered at approx. {`$[-9.79, -15.04, 20.53]$`} and multiplied by a random perturbation uniformly
		sampled from the interval {`$[0.99,1.01]$`}.</P
	>
	<figure class="-mt-2 mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/trajectories-minimal.png`}
			alt="Training set trajectories"
			width="450"
			height="500"
		/><FigCap>
			The first 100 points from 10 different trajectories (series) from the dataset. The
			initial conditions of each series are randomly perturbed by {`$\\le 1\\%$`}
		</FigCap>
	</figure>
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
		>The model is optimized with MAE loss, consistent with the default loss from [{refIndices[
			'challu'
		]}]. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as defined
		in [{refIndices['gilpin']}]:</P
	>
	<div>{sMAPE}</div>
	<P
		>In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of average
		window errors and its CDF on the test set are shown below. Note that the left y axis is
		log-scaled.</P
	>
	<div class="self-center"><Model1ErrDist /></div>
	<P
		>To gain a more intuitive understanding of the magnitude of these errors, we can plot
		individual window predictions against the references:</P
	>
	<figure>
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
		"point of departure" on the prediction before which the average error is very low and after
		which the error grows quickly. In the first graph, this point is about in the middle of the
		prediction, in the second it is maybe one third of the way into the prediction, and in the
		third it is near the beginning. If we look at the predictions of adjacent windows, we see
		that the behavior at this point is consisent across the windows, indicating that there is
		something about the system's behavior in this region that is very difficult for this model
		to fit, regardless of its alignment within the prediction window.</P
	>
	<figure>
		<img
			class="m-auto"
			src={`${base}/model-1-pod.gif`}
			alt="prediction point of departure"
			width="450"
			height="350"
		/>
		<FigCap>
			Animation highlighting the behavior of the model near the origin, which is a fixed point
			of the system. In contrast to all other regions of the trajectory, the model seems
			highly uncertain of how the trajectory will evolve shortly after passing near the
			origin.
		</FigCap>
	</figure>
	<P
		>For anyone familiar with dynamical systems theory, it won't be a surprise that this point
		coincides with one of the three <Link
			href="https://en.wikipedia.org/wiki/Critical_point_(mathematics)">critical</Link
		> points of the Lorenz system--in this case, the origin. And in this parameterization, the origin
		is known to be a saddle point, the intersection of a stable 2D manifold and an unstable 1D manifold.
	</P><P
		>We can calculate the <i>local</i> Lyapunov exponent at this saddle point to get an estimate
		of just how chaotic the behavior of the system is in the neighborhood of the origin. The
		local Lyapunov exponent is the largest eigenvalue of the Jacobian of the system at the
		origin, which in this case is approximately {`$11.8$`}. Compare this with the estimate of
		the global Lyapunov exponent of {`$\\sim 0.89$`}, and it is obvious that the origin is
		highly chaotic relative to the average conditions on the Lorenz Attractor. In fact, when we
		inspect the ground-truth trajectories from the dataset, we see that they all remain
		relatively close to each until they get close to the origin, at which point they rapidly
		diverge.
	</P>
	<figure>
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
		>So, as you could have probably guessed, the model is struggling to predict the behavior of
		the system near its most chaotic region. But also note that the model does quite well at
		predicting basically every other region of the system. So if we can just figure out a way to
		improve the predictions near the origin, we might really be getting somewhere. Is it
		possible that the model simply didn't get enough examples of trajectories passing close to
		the origin in its training set? Or is the chaotic behavior of the system actually
		intractable for this and any model of similar capacity? I'm not sure yet, so for the next
		step let's try increasing the size of the training set and increasing the model capacity to
		see if the results improve.</P
	>
	<H2>Model 2</H2>
	<P
		>For the next model, I increased the number of unique initial conditions from 25 to 1000,
		and held out 25 for validation and 25 for testing, leaving 950 unique initial conditions,
		each of length 10,000, in the training set. I also expanded the range of hyperparameters for
		tuning to include significantly larger models that may also aid in capturing the challenging
		regions of the distribution. After tuning, I arrived at the following settings:</P
	>
	<HP hps={modelTwoHPs} />
	<p class="mt-2">
		I've increased the depth (number of stacks) and width (mlp layer size) of the network, and
		I've also significantly increased the amount of compression in the initial stacks. Halving
		the batch size also turns out to reduce validation error, as well as training for many more
		steps and at a lower learning rate.
	</p>
	<div class="self-center"><Model2ErrDist /></div>
	<P
		>From the plot, we see a reduction in almost every bin of the per-window error histogram
		relative to Model 1, so the larger dataset and new hyperparameter tunings have a definite
		positive impact. Recall that this new test set has 25 series, while the previous test set
		had only 3, so the absolute reductions across the bins is especially significant. 98% of
		windows from Model 2 have a sMAPE less than 6, compared to only 74% for Model 1, and 99.9%
		have a sMAPE less than 40, compared to 98% for Model 1.</P
	><P
		>There are, however, still a handful of windows with very large sMAPE errors. If we
		visualize the errors differently, we can see clearly that all of the windows with a sMAPE
		greater than 100 are due to a single region on a single trajectory from the test set:</P
	>
	<div class="self-center"><Model2Err3d /></div>
	<P
		>The brown spike in series 15 accounts for all of the sMAPE errors greater than 100. Let's
		check the animation for this region:</P
	>
	<figure>
		<img
			class="m-auto"
			src={`${base}/model-2-pod.gif`}
			alt="model 2 point of departure"
			width="350"
			height="300"
		/>
		<FigCap>
			The trajectory responsible for the only sMAPE errors greater than 100 from the test set
			for Model 2. The behavior near the origin closely mirrors that of Model 1, suggesting
			that although the accuracy of Model 2 is on average much higher than that of Model 1, it
			has not yet managed to reduce the magnitude of the worst failures.
		</FigCap>
	</figure>
	<P
		>Not surprisingly, this trajectory passes very close to the origin, and we immediately see
		how similar this failure case is to the one from Model 1. Despite the average improvement
		across all error magnitudes, has the model's ability to predict the behavior near the
		unstable origin actually improved signifcantly between Model 1 and Model 2? Let's check.</P
	>
	<figure class="-mt-2 mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/model-2-dfo_vs_smape.png`}
			alt="distance from origin vs. sMAPE"
			width="600"
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
		which these failures occur. We also notice that the test set for Model 1 lacks points closer
		to the origin than a Euclidean distance of about 4.75, whereas Model 2's test set contains
		points as close as 2.7. Still, though, the density of points much closer than 5 is quite
		low, so we should probably increase our dataset size again for the next round of training.</P
	>
	<P
		>Turning back to the animation of the catastrophic failure case, also notice how the
		predicted trajectories tend to "split the difference" between the two general path
		directions, toward one of the other two critical points, by remaining about equidistant
		between each. This behavior is likely a consequence of optimizing the model by regressing
		the mean absolute error, which means the model is trying to predict the median of the
		training set distribution (contrast this with a generative model that might prefer a more
		plausible looking trajectory with a higher error). The model is showing us that, given the
		past 500 points of this trajectory, it is unable to determine whether one of the two general
		path directions is more probable than the other. The model has the discovered the meaning of
		chaos.</P
	><P
		>This suggests to me a couple of straightforward ideas that could improve performance. 1)
		Increasing the lookback window size would give the model more information about the history
		of the trajectory and might provide more clues about which direction the trajectory will
		take after approaching the origin. And 2) increasing the floating point precision of the
		inputs and the model weights from 32-bit to 64-bit might reveal exceptionally subtle details
		in the trajectory that correlate with its future direction. For the next round of
		experiments, let's explore each of these ideas. But before we begin, let's check the
		composition of our dataset to see how much time the ground truth trajectories spend near the
		origin:
	</P>
	<figure class="-mt-2 mb-2 self-center">
		<img
			class="m-auto"
			src={`${base}/Lorenz_10Kx10K_points.png`}
			alt="Training set distance from origin points distribution"
			width="600"
			height="300"
		/><FigCap>
			The distribution of points in the dataset with respect to their distance from the
			origin.
		</FigCap>
	</figure>
	<P indent={'indent-0'}
		>The number of points that pass within a distance of {`$\\leq 5$`} from the origin make up about
		0.1% of the total points in the dataset. As a third idea for improvement, we can also try increasing
		the likelihood that windows that contain points very close to the origin will be sampled from
		our dataset during training. That way, our model will get more expsure to the most challenging
		prediction tasks during training, which may reduce error on these cases at the expense of increasing
		the error on the other cases. Given how low the error is on the easier cases, this could likely
		be a very desirable tradeoff.</P
	>
</div>
<p class="text-sm mt-4 pl-2">
	* My initial experiments were run on a Paperspace VM using a single RTX 4000 with 8 GB of RAM
	for training. Model 3 required additional GPU memory, so I splurged on a VM with two RTX 5000s,
	each with 16 GB of RAM.
</p>
<References />
<!--div
	class="fixed pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 text-[20rem] text-red-600 font-mono"
>
	WIP
</div-->
