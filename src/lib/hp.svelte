<script lang="ts">
	export let hps = [];
</script>

<section class="relative block my-4">
	<ul class="flex flex-col ms-16 ps-2 rounded gap-0.5 bg-gray-100 divide-y divide-gray-200">
		{#each hps as hp}
			<li class="flex items-center justify-left">
				<div class="flex-none w-64 min-w-64">{hp.desc}</div>
				<div class="flex-none w-auto relative">
					<span class="rounded-0.5 p-1 font-mono">{hp.val}</span>
				</div>
			</li>{/each}
	</ul>
</section>
