<script lang="ts">
	import { onMount } from 'svelte';
	import Link from '$lib/Link.svelte';
	import NhitsArch from '$lib/NhitsArch.svelte';
	import { refIndices } from '$lib/refs.svelte';
	import References from '$lib/refs.svelte';
	import P from '$lib/P.svelte';

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

	onMount(() => {
		let script = document.createElement('script');
		script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js';
		document.head.append(script);

		script.onload = () => {
			MathJax = {
				tex: {
					inlineMath: [
						['$', '$'],
						['\\(', '\\)']
					]
				},
				svg: { fontCache: 'global' }
			};
		};
	});
</script>

<div class="mx-auto flex flex-col items-center justify-center mx-4 w-[98%] lg:w-[75%] xl:w-[50%]">
	<div class="text-2xl">Training a Neural Network to Predict the Lorenz Attractor</div>
	<br />
	<P>
		This project is inspired by a recent publication by William Gilpin, Model scale versus
		domain knowledge in statistical forecasting of chaotic systems [{refIndices['gilpin']}].
		Gilpin found that, given enough training data, generic neural architectures can match or
		exceed the performance of state-of-the-art domain-specific choatic forecasting models such
		as reservoir computers and neural ODEs.
	</P>
	<P>
		My goal is to probe deeper into Gilpin's findings and test the limits of a neural network to
		model a chaotic system, subject to the computational constraints imposed by my limited
		budget*. I started by focusing on what is probably the most well known chaotic system, the
		<Link href="https://en.wikipedia.org/wiki/Lorenz_system">Lorenz Attractor</Link>, developed
		by Edward Lorenz et. al. in 1963 as a simplified model of atmospheric convection.
	</P>
	<div class="my-2 flex justify-center">
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
	<div class="flex justify-center"><p>{equLorenz}</p></div>
	<P
		>The Lorenz <i>Attractor</i> refers to a set of chaotic solutions to the system, most commonly:</P
	>
	<div class="flex justify-center"><p>{equParams}</p></div>
	<P>
		I used Gilpin's <Link href={'https://github.com/williamgilpin/dysts'}>dysts</Link> python module
		for generating the training data for this solution.
	</P>
	<div class="text-xl text-center mt-4 mb-2">Neural Architecture: N-HiTS</div>
	<P>
		The N-HiTS [{refIndices['challu']}] forecasting network is known to produce state-of-the-art
		results (at the time of writing) for univariate time series prediction, wth up to an order
		of magnitude lower computational requirement than its competitors. Given my limited budget
		and its strong performance reported in [{refIndices['gilpin']}], it seemed like the natural
		starting point for a network architecture.
	</P>
	<figure class="my-2">
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
		that downsample the inputs to each block and upsampling layers that project a compressed
		representation of the forecast to the output sample rate. These additions allow N-HiTS to
		exceed the performance of competing long-horizon forecasting models with an order of
		magnitude lower computational complexity [{refIndices['challu']}].
	</P>
</div>
<p class="text-sm mt-4 pl-2">
	* all of my experiments are run on a Paperspace VM using a single RTX 4000 with 8 GB of RAM for
	training
</p>
<References />
<div
	class="fixed z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50 text-[20rem] text-red-600 font-mono"
>
	WIP
</div>
