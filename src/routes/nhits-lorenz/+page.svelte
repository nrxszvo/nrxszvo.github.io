<script lang="ts">
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import Link from '$lib/Link.svelte';
	import NhitsArch from '$lib/NhitsArch.svelte';
	import InitialConditions from '$lib/initialConditions.svelte';
	import { refIndices } from '$lib/refs.svelte';
	import References from '$lib/refs.svelte';
	import P from '$lib/P.svelte';
	import HP from '$lib/hp.svelte';
	import Model1ErrDist from '$lib/model_1_err_dist.svelte';
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
\\rho & = \\frac{8}{3} \\\\
\\beta & = 28 \\\\
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

	const Model1POD = '/model-1-pod.gif';

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

<div class="mx-auto flex flex-col mx-4 w-[98%] lg:w-[75%] xl:w-[50%]">
	<div class="text-2xl text-center">
		Training a Neural Network to Predict the Lorenz Attractor
	</div>
	<br />
	<P>
		This project is inspired by a recent publication by William Gilpin, Model scale versus
		domain knowledge in statistical forecasting of chaotic systems [{refIndices['gilpin']}].
		Gilpin found that, given enough training data, generic neural architectures can match or
		exceed the performance of state-of-the-art domain-specific choatic forecasting models such
		as reservoir computers and neural ODEs.
	</P>
	<P>
		My goal is to probe deeper into Gilpin's findings and test the limits of a neural network's
		ability to model a chaotic system (within the computational constraints imposed by my
		limited budget*). I'll start by focusing on what is probably the most well known chaotic
		system, the
		<Link href="https://en.wikipedia.org/wiki/Lorenz_system">Lorenz Attractor</Link>, developed
		by Edward Lorenz et. al. in 1963 as a simplified model of atmospheric convection.
	</P>
	<div class="my-2 self-center">
		<a
			title="Dan Quinn, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
			href="https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"
			><figure>
				<img
					width="128"
					alt="A Trajectory Through Phase Space in a Lorenz Attractor"
					src="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"
				/>
				<figcaption class="text-center text-xs mt-2">The Lorenz Attractor</figcaption>
			</figure>
		</a>
	</div>
	<P>
		The Lorenz system is comprised of three ordinary differential equations representing the
		properties of convection, horizontal temperature, and vertical temperature in a
		two-dimensional fluid layer:
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
	<div class="text-xl text-center mt-4 mb-2">Neural Architecture: N-HiTS</div>
	<P>
		The N-HiTS [{refIndices['challu']}] forecasting network is known to produce state-of-the-art
		results (at the time of writing) for univariate time series prediction, wth up to an order
		of magnitude lower computational requirement than its competitors. Given my limited budget
		and its strong performance reported in [{refIndices['gilpin']}], it seemed like the natural
		starting point for a network architecture.
	</P>
	<figure class="my-2 self-center">
		<NhitsArch />
		<figcaption class="text-center text-xs mt-2">
			The N-HiTS architecture. Image taken from [{refIndices['challu']}].
		</figcaption>
	</figure>
	<P>
		The architectural ideas in N-HiTS build on those of its predecessor, N-BEATS [{refIndices[
			'oreshkin'
		]}], a neural basis expansion network for time series prediction. The key ideas inherited
		from N-BEATS include the organzation of fully connected layers into blocks that output basis
		expansions, i.e. linear projections of the preceding fully connected layer's output, and the
		use of both forecast and backcast predictions from each block. The forecast predictions from
		all blocks are summed together to produce the final output of the network, while the
		backcasts are subtracted from the input of the corresponding block to produce a residual
		connection as the input to the next block. The goal of the backcasts is to help the
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
	<div class="text-xl text-center mt-4 mb-2">Experiments</div>
	<P>
		While Gilpin's experiments focus on testing 24 different time-series prediction models on
		over 130 different chaotic systems using a relatively narrow range of hyper parameters for
		tuning [{refIndices['gilpin']}], my experiments aim to tune a single model, N-HiTS, on a
		single system, the Lorenz Attractor, to maximize its accuracy for a given, relatively long,
		fixed horizon (aka prediction window length). And more specifically, I aim not only to
		achieve a low average error on the test set, but also to limit the worst-case error such
		that the model may be said to avoid "catastrophic failure" almost everywhere.
	</P><P
		>I begin with a horizon of 100 points, using a {`$dt$`} of approximately {`$0.015$`} seconds
		per point. The maximum <Link href="https://en.wikipedia.org/wiki/Lyapunov_exponent"
			>Lyapunov exponent</Link
		>, as reported in Gilpin's
		<Link href="https://github.com/williamgilpin/dysts">dysts</Link> repo, is approx. {`$0.8917$`},
		and so the <Link href="https://en.wikipedia.org/wiki/Lyapunov_time">Lyapunov time</Link> is approx.
		{`$1.121$`}. Therefore, a horizon of 100 points covers a time period of about {`$\\frac{4}{3}$`}
		of the Lyapunov time.
	</P>
	<div class="self-center"><p>{lyapunovExp}</p></div>
	<P indent="indent-0"
		>From this, I conclude that if the neural model's predictions have, on average, a
		mean-squared error much less than a factor of {`$\e$`} times the difference in initial conditions
		between the train set and test set, then this indicates with high confidence that the model is
		accurately predicting the chaotic region of the Lorenz system.
	</P><P
		>In reality, the train and test sets are comprised of many series with uniformly randomized
		initial conditions, with a multiplicative perturbation for each initial condition being
		sampled from the interval {`$[0.99-1.01]$`}.</P
	>
	<figure class="-mt-8 mb-2 self-center">
		<InitialConditions />
		<figcaption class="text-center text-xs mt-2">
			10 different 100-point series from the dataset with initial conditions randomly
			perturbed by {`$\\le 1\\%$`}
		</figcaption>
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
		1 = 8401$`} training samples. For the initial experiment, I train on 19 series with unique initial conditions,
		and hold out 3 series for validation and 3 series for testing.</P
	>
	<p class="mt-2">
		The full set of N-HiTS hyperparameters for what I will call <b>Model 1</b> are as follows:
	</p>
	<ul class="text-left ms-16 list-disc">
		<HP text="number of stacks" val="3" />
		<HP text="blocks per stack" val="1" />
		<HP text="mlp layer size" val="1024" />
		<HP text="activation function" val="ReLU" />
		<HP text="max pooling factors" val="2, 2, 2" />
		<HP text="frequency downsampling factors" val="24, 12, 1" />
		<HP text="batch size" val="512" />
		<HP text="# training steps" val="10,000" />
		<HP text="learning rate" val={`$1\\mathrm{e}{-3}$`} />
	</ul>
	<P indent="indent-0"
		>The model is optimized with MAE loss, consistent with the default loss from [{refIndices[
			'challu'
		]}]. For evaluation, I use the symmetric mean absolute percentage error (sMAPE) as defined
		in [{refIndices['gilpin']}]:</P
	>
	<div>{sMAPE}</div>
	<P
		>In this formulation, sMAPE is bound to the interval [0, 200]. The distribution of average
		window errors on the test set is shown below. Note that the y axis is log-scaled.</P
	>
	<div class="self-center"><Model1ErrDist /></div>
	<P
		>To gain a more intuitive understanding of the magnitude of these errors, we can plot
		individual window predictions against the references:</P
	>
	<figure>
		<div class="flex self-center">
			<Model1SmallError />
			<Model1MedError />
			<Model1LargeError />
		</div>
		<figcaption class="text-center text-xs mt-2">
			Samples of three different 100-point predictions from Model 1 with small, medium, and
			large sMAPE errors
		</figcaption>
	</figure>
	<P
		>It seems fair to say that the first graph with a sMAPE of 13 is a "pretty good" prediction
		in that the model clearly matches the general contour of the reference, with marginal noise
		that slowly increases in the latter half of the prediction window. From the error
		distribution, we see that there is about a 90% chance that the sMAPE error will be less than
		10. And we might also say that the middle graph with a sMAPE of ~36 is "poor but not
		terrible", while the last graph with a sMAPE of ~135 is what I would consider a
		"catastrophic failure" in which the prediction has virtually no resemblence to the
		reference.</P
	><P
		>One interesting observation in all three graphs is that there tends to be a "point of
		departure" on the prediction before which the average error is very low and after which the
		error grows quickly. In the first graph, this point is about in the middle of the
		prediction, in the second it is maybe one third of the way into the prediction, and in the
		third it is near the beginning. If we look at the predictions of adjacent windows, we see
		that this behavior at this point is consisent across the windows, indicating that there is
		something about the system's distribution in this region that is difficult for our model to
		fit</P
	>

	<figure>
		<img
			class="m-auto"
			src={Model1POD}
			alt="prediction point of departure"
			width="450"
			height="350"
		/>
		<figcaption class="text-center text-xs mt-2">
			Animation highlighting the 'point of departure' for a catastrophic failure case. The
			point seems to act as a kind of 'wall' beyond which the model is unable to see, and its
			distribution abruptly shifts towards maximum uncertainty.
		</figcaption>
	</figure>
</div>
<p class="text-sm mt-4 pl-2">
	* all of my experiments are run on a Paperspace VM using a single RTX 4000 with 8 GB of RAM for
	training
</p>
<References />
<div
	class="fixed pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-25 text-[20rem] text-red-600 font-mono"
>
	WIP
</div>
