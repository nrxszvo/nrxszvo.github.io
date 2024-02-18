<script>
	export let href;
	export let styling = '';
	export let target = '_blank';
</script>

<a
	{href}
	class="font-medium text-blue-600 dark:text-blue-500 hover:underline {styling}"
	{target}
	rel="noopener noreferrer"><slot /></a
>
