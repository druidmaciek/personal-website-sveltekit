<script>
	import Hero from '../components/Hero.svelte';
	import Layout from '../components/Layout.svelte';
	import Offer from '../components/Offer.svelte';
	import Contact from '../components/Contact.svelte';
	import Logo from '../components/Logos.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import CTA from '../components/CTA.svelte';
	import Button from '../components/Button.svelte';
</script>

<Layout bg={'bg-gray-800'}>
	<Hero><p><b>Do you need:</b></p>
		<ul>
			<li>A senior WordPress expert with over 10 years experience?</li>
			<li>A reliable, full stack freelance WordPress developer comfortable with custom, advanced and enterprise scale work?</li>
			<li>A freelance WordPress developer who can help with Gutenberg, the REST API and using WordPress as a headless CMS?</li>
			<li>Guaranteed, professional development from someone delivering successful projects for start ups, medium, large and global businesses, big brands and WordPress VIP agencies?
			</li>
		</ul>
		<p><b>You're in the right place.</b> Here's what you can do next:</p></Hero>
</Layout>

<Layout width={'max-w-3xl'}>
	<Offer />
	<Contact />
	<Logo />
	<Testimonials />
	<div class="my-12">
		<div class="prose lg:prose-xl prose-primary">
			<h2>Ready To Start A Project Together?</h2>
			<p>I'd love to work with you. Fill out the form below to tell me more:</p>
		</div>
        <div class="mt-12 ">
            <Button target={"#contact"}>Take me back to the form
                <svg xmlns="http://www.w3.org/2000/svg" class=" ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
            </Button>
        </div>
		
	</div>
</Layout>
<CTA />
