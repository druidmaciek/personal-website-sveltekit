<script>
	let testimonials = [
		{
			text:
				'It’s a pleasure to work with Maciej. He’s very responsive and <mark>knows both Django and Tailwind inside out.</mark> He always makes sure that the work is exactly what is required and <mark>comes up with good product suggestions</mark> along the way. Highly recommended!',
			name: 'Hugh Topping',
			image: 'testimonials/ht.webp'
		},
		{
			text:
				'Maciej has provided us with custom software development in support of our business. He was <mark>quick, diligent and very professional.</mark> I will definitely utilize his services in future endeavors. He is an <mark>expert Python developer</mark> who is a pleasure to work with.',
			name: 'Doron Grinstein',
			image: 'testimonials/testimonial2.webp'
		},
		{
			text:
				'Maciej developed custom web application for us that allowed us to streamline a cumbersome processes and <mark>save hundreds of hours of our employees.</mark> He designed and developed the application based on our specifications and <mark>quickly adapted to any changes</mark> in requirements. I highly recommend him for your next project.',
			name: 'Karol Zakrzewski',
			image: 'testimonials/kz.webp'
		}
	];
</script>

<div class="my-12">
	<div class="my-12 prose lg:prose-xl prose-primary">
		<h2>Kind Words From People Who Have Hired Me</h2>
	</div>

	<ul class="space-y-3 divide-y-2">
		{#each testimonials as testimonial, i}
			<li class="overflow-hidden px-6 py-4">
				<div class="">
					<div class="block sm:hidden">
						<div class="">
							<div class="flex justify-center">
								<img class="testimonial-image" src={testimonial.image} alt="" />
							</div>

							<div class="mt-4 text-center ml-4">
								<p>
									“{@html testimonial.text}”
								</p>
								<h4 class="mt-1 text-lg font-bold">{testimonial.name}</h4>
							</div>
						</div>
					</div>
					<div class="hidden sm:block">
						{#if i % 2 == 0}
							<div class="sm:flex sm:items-center">
								<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
									<img class="testimonial-image" src={testimonial.image} alt="" />
								</div>
								<div>
									<p>
										“{@html testimonial.text}”
									</p>
									<h4 class="mt-1 text-lg font-bold">{testimonial.name}</h4>
								</div>
							</div>
						{:else}
							<div class="sm:flex sm:items-center">
								<div class="text-right">
									<p>
										“{@html testimonial.text}”
									</p>
									<h4 class="mt-1 text-lg font-bold">{testimonial.name}</h4>
								</div>
								<div class="mb-4 flex-shrink-0 sm:mb-0 sm:ml-4">
									<img class="testimonial-image" src={testimonial.image} alt="" />
								</div>
							</div>
						{/if}
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.testimonial-image {
		@apply h-32 w-32 rounded-full shadow border border-gray-400;
	}

	mark {
		margin: 0 -0.4em !important;
		padding: 0.1em 0.4em !important;
		border-radius: 0.8em 0.3em !important;
		background: transparent !important;
		background-image: linear-gradient(
			to right,
			rgba(255, 225, 0, 0.1),
			rgba(255, 225, 0, 0.7) 4%,
			rgba(255, 225, 0, 0.3)
		) !important;
		-webkit-box-decoration-break: clone !important;
		box-decoration-break: clone !important;
	}
	
</style>
