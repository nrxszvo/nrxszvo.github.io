<script lang="ts">
	interface Props {
		href: any;
		styling?: string;
		target?: string;
		children?: import('svelte').Snippet;
	}

	let {
		href,
		styling = '',
		target = '_blank',
		children
	}: Props = $props();
</script>

<a
	{href}
	class="font-medium text-blue-600 dark:text-blue-500 hover:underline {styling}"
	{target}
	rel="noopener noreferrer">{@render children?.()}</a
>
