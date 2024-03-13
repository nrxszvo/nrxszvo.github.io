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
	import Model2ErrVSpeed from '$lib/model_2_err_vs_speed.svelte';
	import Model2Top10K from '$lib/model_2_top_10k.svelte';

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

	const ModelOnePoD = `${base}/model-1-pod.gif`;
	const ModelTwoPoD = `${base}/model-2-pod.gif`;

	const modelOneHPs = [
		{ desc: 'number of stacks', val: 3 },
		{ desc: 'blocks per stack', val: 1 },
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
		Training a Neural Network to Predict the Lorenz Attractor
	</div>
	<br />
	<P>
		This project is inspired by a recent publication by William Gilpin, Model scale versus
		domain knowledge in statistical forecasting of chaotic systems [{refIndices['gilpin']}].
		Gilpin found that, given enough training data, generic neural architectures can match or
		exceed the performance of state-of-the-art domain-specific choatic forecasting models such
		as reservoir computers and neural ODEs. My goal is to probe deeper into Gilpin's findings
		and test the limits of a neural network's ability to model a chaotic system (within the
		computational constraints imposed by my limited budget*).
	</P>
	<H1>The Lorenz Attractor</H1>
	<P>
		I'll start by focusing on what is probably the most well known chaotic system, the
		<Link href="https://en.wikipedia.org/wiki/Lorenz_system">Lorenz Attractor</Link>, developed
		by Edward Lorenz et. al. in 1963 as a simplified model of atmospheric convection.
	</P>
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
	<H1>Neural Architecture: N-HiTS</H1>
	<P>
		The N-HiTS [{refIndices['challu']}] forecasting network is known to produce state-of-the-art
		results (at the time of writing) for univariate time series prediction, wth up to an order
		of magnitude lower computational requirement than its competitors. Given my limited budget
		and its strong performance reported in [{refIndices['gilpin']}], it seemed like the natural
		starting point for a network architecture.
	</P>
	<figure class="my-2 self-center">
		<NhitsArch />
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
	<figure class="-mt-2 mb-2 self-center">
		<InitialConditions />
		<FigCap>
			10 different 100-point series from the dataset with initial conditions randomly
			perturbed by {`$\\le 1\\%$`}
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
		1 = 8401$`} training samples. For the initial experiment, I generate 25 series with unique initial conditions,
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
		>For the purposes of this project, I'll qualify the first graph with a sMAPE of 13 as a
		"pretty good" prediction in that the model clearly matches the general contour of the
		reference, with marginal noise that slowly increases in the latter half of the prediction
		window. From the error distribution, we see that there is about a 90% chance that the sMAPE
		error will be less than 10. And I'll also qualify the middle graph with a sMAPE of ~36 as
		"poor but not terrible", while the last graph with a sMAPE of ~135 is what I would consider
		a "catastrophic failure" because the prediction has virtually no resemblence to the
		reference.</P
	><P
		>One interesting observation in all three graphs is that there appears to be what I will
		call a "point of departure" on the prediction before which the average error is very low and
		after which the error grows quickly. In the first graph, this point is about in the middle
		of the prediction, in the second it is maybe one third of the way into the prediction, and
		in the third it is near the beginning. If we look at the predictions of adjacent windows, we
		see that the behavior at this point is consisent across the windows, indicating that there
		is something about the system's distribution in this region that is very difficult for this
		model to fit, regardless of its alignment within the prediction window.</P
	>

	<figure>
		<img
			class="m-auto"
			src={ModelOnePoD}
			alt="prediction point of departure"
			width="450"
			height="350"
		/>
		<FigCap>
			Animation highlighting the 'point of departure' for a catastrophic failure case. The
			point seems to act as a kind of 'wall' beyond which the model is unable to see, and
			where its distribution abruptly shifts towards maximum uncertainty.
		</FigCap>
	</figure>
	<P
		>Possibly, the model simply didn't get enough examples of these conditions in its training
		set, so the obvious and easiest next step is to try increasing the size of the training set,
		and more specifically, increasing the number of series with unique initial conditions.</P
	>
	<H2>Model 2</H2>
	<P
		>For the next model, I increase the number of unique initial conditions from 25 to 1000, and
		hold out 25 for validation and 25 for testing, leaving 950 unique initial conditions, each
		of length 10,000, in the training set. I also expand the range of hyperparameters for tuning
		to include significantly larger models that may also aid in capturing the challenging
		regions of the distribution. After tuning, I arrive at the following settings:</P
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
		>There are, however, still a handful of windows in the 'catastrophic failure' region of the
		error distribution. If we visualize the errors differently, we can see clearly that all of
		the windows with a sMAPE greater than 100 are due to a single 'point of departure' from the
		test set:</P
	>
	<div class="self-center"><Model2Err3d /></div>
	<P
		>The brown spike in series 15 accounts for all of the sMAPE errors greater than 100. Let's
		check the animation for this region:</P
	>
	<figure>
		<img
			class="m-auto"
			src={ModelTwoPoD}
			alt="model 2 point of departure"
			width="450"
			height="350"
		/>
		<FigCap>
			The 'point of departure' responsible for the only sMAPE errors greater than 100 from the
			test set for Model 2. The dynamics in this region almost exactly match those from the
			'point of departure' animation for Model 1.
		</FigCap>
	</figure>
	<P
		>We immediately see how similar this failure case is to the one from Model 1. Despite the
		average improvement across all error magnitudes, the worst-case error hasn't really improved
		at all between Model 1 and Model 2.</P
	>
	<P
		>Another similarity between these two animations is that the "point of departure" (red dot)
		seems to coincide with a reduction in the speed at which the system evolves. If we plot the
		average window errors against the average speed for each window, we see a negative
		correlation between the magnitude of the sMAPE error and the magnitude of the system's
		velocity. (Note that the right axis is the <i>inverse normalized speed</i>, so a value of 1
		indicates the minimum speed observed in the test set.) Not surprisingly, the Spearman
		correlation coefficient between the sMAPE error and the <i>inverse</i> speed of the test set
		is 0.61.</P
	>
	<figure>
		<Model2ErrVSpeed />
		<FigCap
			>Comparing average window error to the minimum speed within each window for one series
			from the test set. The right axis (red dots) are the <i>inverse normalized speed</i> of the
			window. Each dot represents the lowest average speed of 10 consective points within each
			window. The large spike around window #300 corresponds with the above animation. In this
			test set, low speeds are a necessary condition for the model to exhibit large errors.</FigCap
		>
	</figure>
	<figure>
		<Model2Top10K /><FigCap
			>The windows with the top 10,000 largest sMAPE errors from the test set plotted with
			their inverse normalized speeds.</FigCap
		>
	</figure>
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
