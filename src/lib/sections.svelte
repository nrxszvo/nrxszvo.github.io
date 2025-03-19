<script lang="ts">
	import { onMount } from 'svelte';

	const sections = [
		'intro',
		'lorenz',
		'nhits',
		'experiments',
		'datagen',
		'model-1',
		'model-2',
		'model-3',
		'arpred',
		'discussion',
		'references'
	];

	const highlightStyle = ['bg-rose-100', 'rounded-sm'];
	let active = sections[0];

	const getHref = (href) => {
		const q = "a[href='#" + href + "']";
		return document.querySelector(q);
	};
	const addActive = (id) => {
		const el = getHref(id).parentElement;
		highlightStyle.forEach((styl) => el.classList.add(styl));
	};
	const removeActive = (id) => {
		const el = getHref(id).parentElement;
		highlightStyle.forEach((styl) => el.classList.remove(styl));
	};

	const handleScroll = () => {
		let newActive;
		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (window.scrollY >= el.offsetTop - 1) {
				newActive = id;
			}
		});
		if (newActive && newActive != active) {
			removeActive(active);
			active = newActive;
			addActive(active);
		}
	};

	onMount(() => {
		addActive(active);
		handleScroll();
	});
</script>

<svelte:window on:scroll={handleScroll} />

<aside class="max-sm:hidden">
	<nav class="border-r-2 sticky top-12">
		<div>
			<section>
				<ul class="menu">
					<li><a href="#intro">Intro</a></li>
					<li><a href="#lorenz">Lorenz Attractor</a></li>
					<li><a href="#nhits">Neural Architecture</a></li>
					<li><a href="#experiments">Experiments</a></li>
					<ul class="text-sm submenu">
						<li><a href="#datagen">Data Generation</a></li>
						<li><a href="#model-1">Model 1</a></li>
						<li><a href="#model-2">Model 2</a></li>
						<li><a href="#model-3">Model 3</a></li>
						<li><a href="#arpred">Autoregressive Prediction</a></li>
					</ul>
					<li><a href="#discussion">Discussion</a></li>
					<li><a href="#references">References</a></li>
				</ul>
			</section>
		</div>
	</nav>
</aside>
