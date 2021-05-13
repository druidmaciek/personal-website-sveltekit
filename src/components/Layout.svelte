<script>
	export let width = 'max-w-7xl';
	export let bg = 'bg-gray-50';
</script>

<div class="{bg}">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="{width} mx-auto">
			<slot />
		</div>
	</div>
</div>
