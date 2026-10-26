<script>
    import {Banner, Blockquote, Tooltip} from "flowbite-svelte";
    import {resolve} from "$app/paths";
    import CopyToClipboard from "$lib/components/CopyToClipboard.svelte";
    import {FileCopySolid, FlowbiteSolid, WindowRestoreSolid, CaretSortSolid, PaletteOutline, WandMagicSparklesOutline, TerminalSolid} from "flowbite-svelte-icons"

</script>

<div class="w-4/5 lg:max-w-5xl mx-auto mb-24">
    <section >
        <div class="py-8 px-4 mx-auto max-w-7xl text-center lg:py-16 lg:px-12">
            <div class="relative">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your ultimate svelte starter app</h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Flowbite SvelteKit PWA boilerplate that let's you skip the setup.</p>
                <div class="absolute -top-2 -right-7 rotate-[18deg] text-primary-700 dark:text-primary-300 text-4xl font-bold text-shadow" >Svelte 5</div>
            </div>


            <div class="grid place-items-center mb-5 ">
                <Blockquote border  class="mb-3 px-3">
                    <div class="flex gap-4">
                        <code>npx svelte-flowbite-boilerplate@latest [your-project-name] &lt;static|node&gt; </code>
                        <CopyToClipboard textToCopy="npx svelte-flowbite-boilerplate@latest my-app static">
                            <FileCopySolid class="dark:text-white"/>
                            <Tooltip>Copy to clipboard</Tooltip>
                        </CopyToClipboard>
                    </div>
                    <div class="text-sm">Static-example (CSR/GH-pages): npx svelte-flowbite-boilerplate@latest my-app static</div>
                    <div class="text-sm">Node-example: npx svelte-flowbite-boilerplate@latest my-app node</div>
                </Blockquote>

            </div>

            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                <a href="{resolve('/docs')}" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Learn more
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>

            </div>

        </div>
        <div class="mx-auto mb-12 grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-secondary-900 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
            <div class="lg:col-span-5 lg:mt-0">
                <a href="#">
                    <img class="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full" src={resolve('/undraw_mobile-ux_5h2w.svg')} alt="peripherals" />
                    <img class="mb-4 hidden dark:block md:h-full" src={resolve('/undraw_mobile-ux_5h2w.svg')} alt="peripherals" />
                </a>
            </div>
            <div class="me-auto place-self-center lg:col-span-7">
                <h1 class="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
                    A clean, minimal starter for you sveltekit needs.
                </h1>
                <p class="mb-6 text-gray-500 dark:text-gray-200">
                    Whether you are building a personal website, a blog, or a complex web application, this starter is a great place to start.
                    Create your own Progressive Web App. Directly deploy to GitHub Pages. Build a full-stack application with a node backend.
                    Craft your art in an easy structure or force your agent not to produce spaghetti code.
                    <strong class="text-bold italic">Whatever it is, this makes live easier.</strong>
                </p>
            </div>
        </div>
        <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <FlowbiteSolid class="text-white"/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Flowbite Svelte</h3>
                <p class="text-gray-500 dark:text-gray-400">Svelte-components made by the tailwind huggers @ flowbite.com</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <WindowRestoreSolid class="text-white"/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">PWA</h3>
                <p class="text-gray-500 dark:text-gray-400">Ready to be a progressive web app. Install your app on supported devices.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <CaretSortSolid class="text-white"/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">REST-ready</h3>
                <p class="text-gray-500 dark:text-gray-400">Equipped with wrappers for runtime & server-side fetch-calls handling your requests when using external backends.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <PaletteOutline class="text-white"/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Theme generator</h3>
                <p class="text-gray-500 dark:text-gray-400">Create, extend, or override your color palettes easier than ever before.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <WandMagicSparklesOutline class="text-white"/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Icons, baby!</h3>
                <p class="text-gray-500 dark:text-gray-400">Flowbite's icon-library is already on board for you.</p>
            </div>
            <div>
                <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                    <TerminalSolid class="text-white"/>
                </div>
                <h3 class="mb-2 text-xl font-bold dark:text-white">Utilities</h3>
                <p class="text-gray-500 dark:text-gray-400">No bloat, but a few essentials to get you started.</p>
            </div>
        </div>
    </section>
</div>

<Banner position="fixed" type="bottom">
    <div class="dark:text-white">
        <a href="https://github.com/sroehrl/svelte-flowbite-boilerplate/blob/main/LICENSE">Open Source (MIT)</a>
    </div>
</Banner>
