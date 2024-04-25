<script lang="ts" context="module">
	export const getRef = (id) => {
		for (let i = 0; i < refs.length; i++) {
			if (refs[i].id == id) {
				return { index: i + 1, link: refs[i].link };
			}
		}
		throw new Error();
	};
	const refs = [
		{
			id: 'gilpin',
			author: 'William Gilpin',
			title: 'Model scale versus domain knoweldge in statistical forecasting of chaotic systems',
			publisher: 'Phys. Rev. Res., vol. 5, pp. 043252, Dec',
			year: 2023,
			link: 'https://link.aps.org/doi/10.1103/PhysRevResearch.5.043252'
		},
		{
			id: 'seo',
			author: 'Seo, J., Kim, S., Jalalvand, A. et al.',
			title: 'Avoiding fusion plasma tearing instability with deep reinforcement learning',
			publisher: 'Nature',
			year: '2024',
			link: 'https://doi.org/10.1038/s41586-024-07024-9'
		},
		{
			id: 'degrave',
			author: 'Jonas Degrave, Federico Felici, Jonas Buchli, Michael Neunert, Brendan Tracey, Francesco Carpanese, Timo Ewalds, Roland Hafner, et. al.',
			title: 'Magnetic control of tokamak plasmas through deep reinforcement learning',
			publisher: 'Nature',
			year: '2021',
			link: 'https://doi.org/10.1038/s41586-021-04301-9'
		},
		{
			id: 'challu',
			author: 'Cristian Challu, Kin G. Olivares, Boris N. Oreshkin, Federico Garza, Max Mergenthaler-Canseco, Artur Dubrawski',
			title: 'N-HiTS: Neural Hierarchical Interpolation for Time Series Forecasting',
			publisher: 'arXiv:2201.12886',
			year: '2022',
			link: 'https://arxiv.org/abs/2201.12886'
		},
		{
			id: 'oreshkin',
			author: 'Boris N. Oreshkin, Dmitri Carpov, Nicolas Chapados, Yoshua Bengio',
			title: 'N-BEATS: Neural Basis Expansion Analaysis for Interpretable Time Series Forecasting',
			publisher: 'arXiv:1905.10437',
			year: '2019',
			link: 'https://arxiv.org/abs/1905.10437'
		},
		{
			id: 'osinga',
			author: 'Hinke M. Osinga',
			title: 'Understanding the geometry of dynamics: the stable manifold of the Lorenz system',
			publisher: 'Journal of the Royal Society of New Zealand',
			year: '2018',
			link: 'https://doi.org/10.1080/03036758.2018.1434802'
		}
	];
</script>

<script lang="ts">
	import Link from './link.svelte';
</script>

<ol class="pl-5 my-2 text-xs list-decimal">
	{#each refs as ref}
		<li>
			<span class="ms-4">{ref.author}</span>, <span>{ref.title}</span>,
			<span>{ref.publisher}</span>,
			<span>{ref.year}</span>, <span>[<Link href={ref.link}>link</Link>]</span>.
		</li>
	{/each}
</ol>
