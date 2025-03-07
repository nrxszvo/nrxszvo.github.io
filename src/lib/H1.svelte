<script lang="ts">
	let { id, children } = $props();
</script>

<div {id} class="text-2xl font-bold text-center my-8">{@render children?.()}</div>
