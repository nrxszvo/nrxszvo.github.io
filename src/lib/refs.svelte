<script context="module">
	export const refIndices = {
		gilpin: 1,
		challu: 2,
		oreshkin: 3
	};
</script>

<script lang="ts">
	import Link from '$lib/link.svelte';
</script>

<ol class="pl-5 my-6 text-xs list-decimal">
	<li index={refIndices['gilpin']}>
		<span class="author">William Gilpin</span>,
		<span class="title"
			>"Model scale versus domain knowledge in statistical forecasting of chaotic systems"</span
		>,
		<span class="publisher">Phys. Rev. Res.</span>, vol. 5, pp. 043252, Dec,
		<span class="year">2023</span>. [<Link
			href="https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252">link</Link
		>]
	</li>
	<li index={refIndices['challu']}>
		<span class="author"
			>Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max
			Mergenthaler-Canseco, Artur Dubrawski</span
		>,
		<span class="title"
			>"N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting"</span
		>,
		<span class="publisher">arXiv:2201.12886</span>, <span class="year">2022</span>. [<Link
			href="https://arxiv.org/abs/2201.12886">link</Link
		>]
	</li>
	<li index={refIndices['oreshkin']}>
		<span class="author">Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio</span
		>,
		<span class="title"
			>"N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting"</span
		>,
		<span class="publisher">arXiv:1905.10437</span>, <span class="year">2019</span>. [<Link
			href="http://arxiv.org/abs/1905.10437">link</Link
		>]
	</li>
</ol>
