<script>
	import Button from '../components/Button.svelte';
</script>

<nav class="px-6 py-6 text-gray-50 bg-gray-800">
	<div class="flex justify-between items-center">
		<p
			class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl lg:text-5xl xl:text-6x"
		>
			MJ
		</p>
		<div class="flex items-center space-x-8">
			<a href="/" class="nav-link">Home</a>
			<a href="/about" class="nav-link">About</a>
			<a href="/articles" class="nav-link">Articles</a>
			<a href="/projects" class="nav-link">Projects</a>
			<Button target={"/#contact"}>Hire Me</Button>
		</div>
	</div>
</nav>

<style>
	.nav-link {
		@apply hover:underline text-gray-50;
	}
</style>
