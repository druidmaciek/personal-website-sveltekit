<script>
	export let primary = true;
    export let target;
</script>

{#if primary}
	<a
		href="{target}"
		class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
	>
		<slot />
	</a>
{:else}
	<a
		href="{target}"
		class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
	>
		<slot />
	</a>
{/if}
