<script lang="ts">
	let { id, children } = $props();
</script>

<div {id} class="text-xl font-medium text-left mt-8 mb-4">{@render children?.()}</div>
