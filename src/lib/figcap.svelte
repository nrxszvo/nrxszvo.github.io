<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<figcaption class="text-center text-xs mt-2">
	{@render children?.()}
</figcaption>
