<script>
	import { onMount } from 'svelte';
	import Link from '$lib/Link.svelte';
	import NhitsArch from '$lib/NhitsArch.svelte';

	const equLorenz = `
\\begin{align}
\\dot{x} & = \\sigma(y-x) \\\\
\\dot{y} & = \\rho x - y - xz \\\\
\\dot{z} & = -\\beta z + xy
\\end{align}`;
	const equParams = `
\\begin{align}
\\sigma & = 10 \\\\
\\rho & = 8/3 \\\\
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
	<p>
		This project is inspired by a recent publication by William Gilpin,
		<Link href="https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.5.043252"
			>Model scale versus domain knowledge in statistical forecasting of chaotic systems</Link
		>. Expanding on his finding that generic neural architectures can produce competitive
		results with state-of-the-art domain-specific, hand-crafted models, my goal was to test the
		limits of a neural network to model a chaotic system, given the resources available to me. I
		started by focusing on what seems to be the most well known chaotic system, the
		<Link href="https://en.wikipedia.org/wiki/Lorenz_system">Lorenz Attractor</Link>, developed
		by Edward Lorenz et. al. in 1963 as a simplified model of atmospheric convection.
	</p>
	<div class="flex justify-center">
		<a
			title="Dan Quinn, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons"
			href="https://commons.wikimedia.org/wiki/File:A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"
			><img
				width="128"
				alt="A Trajectory Through Phase Space in a Lorenz Attractor"
				src="https://upload.wikimedia.org/wikipedia/commons/1/13/A_Trajectory_Through_Phase_Space_in_a_Lorenz_Attractor.gif"
			/>
			<figcaption class="text-center text-xs mt-2">The Lorenz Attractor</figcaption></a
		>
	</div>
	<p>
		The Lorenz system is comprised of three ordinary differential equations representing the
		properties of convection, horizontal temperature, and vertical temperature in a
		two-dimensional fluid layer:
	</p>
	<div class="flex justify-center"><p>{equLorenz}</p></div>
	<p>The Lorenz Attractor refers to a set of chaotic solutions to the system, most commonly:</p>
	<div class="flex justify-center"><p>{equParams}</p></div>
	<p>
		I used Gilpin's <Link href={'https://github.com/williamgilpin/dysts'}>dysts</Link> python module
		for generating the training data for this solution.
	</p>
	<div class="text-xl text-center mt-4 mb-2">Neural Architecture: N-HiTS</div>
	<p>
		The
		<Link href="https://arxiv.org/abs/2201.12886">N-HiTS</Link> neural forecasting network developed
		by Challu et. al. is known to produce state-of-the-art results (at the time of writing) for univariate
		time series prediction, typically with at least an order of magnitude lower computational requirement
		than its closest competitors. Given my limited budget, it also seemed like the natural starting
		point for a network architecture.
	</p>
	<NhitsArch />
	<figcaption class="text-center text-xs mt-2">The N-HiTS architecture</figcaption>
</div>
