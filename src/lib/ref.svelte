<script lang="ts">
	import { getRef } from './refs.svelte';
	import Link from './link.svelte';
	let { id } = $props();
</script>

[<Link href={getRef(id).link}>{getRef(id).index}</Link>]
