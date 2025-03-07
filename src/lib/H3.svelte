<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="text-lg font-medium text-left ms-4 mt-4 mb-4">{@render children?.()}</div>
