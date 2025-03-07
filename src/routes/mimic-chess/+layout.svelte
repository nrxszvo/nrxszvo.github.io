<script lang="ts">
	let { children } = $props();
	import { goto } from '$app/navigation';
	import OngoingGames from '$lib/ongoingGames.svelte';
	import NavButton from '$lib/NavButton.svelte';
	import { ongoing } from '$lib/stores';

	if (!$ongoing) {
		$ongoing = new OngoingGames();
	}
</script>

<div class="h-screen bg-stone-800 text-gray-200">
	<div class="flex flex-row items-center justify-around pt-4 pb-2">
		<NavButton onclick={() => goto('/mimic-chess')}>dashboard</NavButton>
		<NavButton onclick={() => goto('/mimic-chess/about')}>about</NavButton>
	</div>
	<hr class="h-px border-0 bg-gray-200" />
	{@render children()}
</div>
