<script>
	import Layout from '../components/Layout.svelte';
</script>

<Layout bg={'bg-primary-700'} width={'max-w-3xl'}>
    <div class="pb-24">
	<div class="py-12 text-gray-100 prose lg:prose-xl prose-primary">
		<h2 class="!text-gray-50">Join My Mailing List</h2>
		<p>
			The people on my mailing list are the first to hear about my new content. Join them by signing
			up now!
		</p>
	</div>
	<div class="bg-gray-200 border-gray-300 p-4 border-[6px]">
		<form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
			<div class="sm:col-span-2">
				<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
				<div class="mt-1">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						placeholder="email@example.com"
						class="py-3 px-4 block w-full shadow-sm focus:ring-primary-500 focus:border-primary-500 border-gray-300 rounded-md"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<button
					type="submit"
					class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
				>
					Sign up now
				</button>
			</div>
		</form>
	</div>
</div>
</Layout>
