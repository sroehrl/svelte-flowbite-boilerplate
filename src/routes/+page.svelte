<script>
    import {Alert, Listgroup, Button, ButtonGroup, Tooltip } from 'flowbite-svelte'
    import * as icons from 'flowbite-svelte-icons'
    import colors from '$lib/colors.js'
    import dayjs from "dayjs";
    import {i18nDateFormat, Language} from "$lib/utils/i18nDate";

    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

    let links = [
        {name: "Resources", href: "#resources"},
        {name: "Colors", href: "#colors"},
        {name: "Icons", href: "#icons"},
        {name: "API", href: "#api"},
    ];

    let dateFormat = i18nDateFormat(Language[navigator.language.substring(0,2)])
</script>
<div class="border shadow shadow-gray-500/50 rounded p-5">

    <div class="flex gap-3">
        <div>
            <Listgroup active items={links} let:item class="w-28 md:w-44">
                {item.name}
            </Listgroup>
        </div>

        <article class="format lg:format-lg dark:format-invert ">
            <h1>REtech starter kit</h1>
            <p class="lead">This template is meant to jump start svelte kit app development with customization in mind</p>
            <p>The package includes a complete setup of svelte-flowbite, flowbite-icons, functional utilities, and customization functionality.</p>
            <p>System time: {dayjs().format(dateFormat)}</p>
        </article>
    </div>

</div>

<article id="resources" class="format lg:format-lg dark:format-invert w-full mt-5 mb-2">
    <h2>Resources</h2>
    <p class="lead">The following links might come in handy</p>
</article>
<ButtonGroup>
    <Button href="https://flowbite.com/docs" target="_blank">Flowbite</Button>
    <Button href="https://flowbite-svelte.com/docs" target="_blank">Flowbite svelte</Button>
    <Button href="https://flowbite.com/icons/" target="_blank">Flowbite icons</Button>
    <Button href="https://kit.svelte.dev/docs" target="_blank">Svelte Kit</Button>
</ButtonGroup>

<article id="colors" class="format lg:format-lg dark:format-invert w-full mt-5 mb-3">
    <h2>Colors</h2>
    <p class="lead">Next to the tailwind color palette and the flowbite colors, you may add or overwrite values.</p>
    <code>src/lib/colors.js</code>
    <p>
        Below is the calculated result of the base values. You can define colors as hex, hsl, or rgb.
        Make sure to familiarize yourself with flowbite-svelte to understand how to influence prop-colors by setting them.
        The primary name, for example, is used in many components.
    </p>


    <Alert color="yellow">The value you specify is used for the shade "500"</Alert>
</article>
{#each Object.entries(colors) as [name, color]}
    <h2 class="capitalize text-lg my-1 dark:text-white">{name}</h2>
    <div class="w-full overflow-x-auto">
        <div class="flex gap-3">
            {#each shades as shade}
                <div class="w-32 h-32 p-3 bg-{name}-{shade}">
                    {shade} <br>
                    <p class="text-xs text-gray-500 bg-gray-200/50 rounded px-1">.bg-{name}-{shade}</p>
                </div>
            {/each}
        </div>
    </div>

{/each}
<article id="icons" class="format lg:format-lg dark:format-invert w-full mt-5 mb-5">
    <h2>Icons</h2>
    <p class="lead">This package uses Flowbite Icon modules.</p>
    <p>
        The namiing convention of the Modules follow the <a href="https://flowbite.com/icons/">Flowbite Icons'</a> names pascal-cased and with the attribute "solid" or "outline".
        <br>Example:

    </p>
    <code>
        import &#123;AtomSolid&#125; from 'flowbite-svelte-icons'
    </code>


</article>
<div class="grid grid-cols-10 gap-x-3 gap-y-5 text-neutral-400 dark:text-white">
    {#each Object.keys(icons) as key}
        <div class="hover:text-primary-400">
            <svelte:component this={icons[key]} size="lg" ></svelte:component>
            <Tooltip>&lt;{key}/&gt;</Tooltip>
        </div>

    {/each}
</div>
<article id="api" class="format lg:format-lg dark:format-invert w-full mt-5 mb-5">
    <h2>API</h2>
    <p class="lead">Using the celest-API or similar?</p>
    <p>
        Configuring the <code>.env</code>-file (delivery as example.env) allows the following CRUD methods
    </p>
    <code>
        import &#123;get, put, post, retire&#125; from '$lib/api'
    </code>
    <p>The API uses the store "auth" to retrieve an active token, if present</p>
    <code class="block">
        let existingEntries = []; <br>
        let newEntry; <br>
        onMount(async()=> &#123; <br>
        &nbsp;existingEntries = await get('/blog') <br>
        &nbsp;newEntry = await post('/blog', &#123;title: "new post"&#125;) <br>
        )
    </code>
</article>

