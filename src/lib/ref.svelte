<script>
	export let id;
	import { getRef } from './refs.svelte';
	import Link from './link.svelte';
</script>

[<Link href={getRef(id).link}>{getRef(id).index}</Link>]
