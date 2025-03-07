<script lang="ts">
	interface Props {
		indent?: string;
		style?: string;
		children?: import('svelte').Snippet;
	}

	let { indent = 'indent-8', style = '', children }: Props = $props();
</script>

<p class="my-2 {indent} {style}">{@render children?.()}</p>
