<script>
    import Button from "../components/Button.svelte";
</script>
<div class="py-12 flex items-start">
    
    <div class="w-2/3 pr-24">
        <h1 class="text-4xl tracking-tight font-extrabold text-gray-50 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6x">Are You Looking For A Freelance WordPress Developer?</h1>
        <div class="mt-12 text-gray-50 prose lg:prose-xl">
            <p><b>Do you need:</b></p>
            <ul>
                <li>A senior WordPress expert with over 10 years experience?</li>
                <li>A reliable, full stack freelance WordPress developer comfortable with custom, advanced and enterprise scale work?</li>
                <li>A freelance WordPress developer who can help with Gutenberg, the REST API and using WordPress as a headless CMS?</li>
                <li>Guaranteed, professional development from someone delivering successful projects for start ups, medium, large and global businesses, big brands and WordPress VIP agencies?
                </li>
            </ul>
            <p><b>You're in the right place.</b> Here's what you can do next:</p>
        </div>
        <div class="mt-12 sm:flex sm:justify-center lg:justify-start">
            <Button target={"#contact"}>Hire Me Today
                <svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5  ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
            </Button>
            <div class="mt-3 sm:mt-0 sm:ml-3">
                <Button target={"#offer"} primary={false} >Read More
                    <svg xmlns="http://www.w3.org/2000/svg" class="mt-0.5 ml-1 items-centerh-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </Button>
            </div>
            
        </div>
    </div>
    <div class="w-1/3">
        <img class="rounded-xl shadow-sm" src="images/headshot.jpg" alt="">
    </div>

</div>