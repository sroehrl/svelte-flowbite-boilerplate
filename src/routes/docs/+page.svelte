<script>
    import {
        Alert,
        Listgroup,
        Button,
        ButtonGroup,
        Tooltip,
        Modal,
        Input,
        Search,
        Accordion,
        AccordionItem, Card
    } from 'flowbite-svelte'
    import {Icon, icons} from 'flowbite-svelte-icons'
    import colors from '$lib/colors.js'
    import dayjs from "dayjs";
    import {i18nDateFormat, Language} from "$lib/utils/i18nDate";

    const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

    let links = [
        {name: "Setup", href: "#setup"},
        {name: "Resources", href: "#resources"},
        {name: "Colors", href: "#colors"},
        {name: "Icons", href: "#icons"},
        {name: "API", href: "#api"},
    ];

    let dateFormat = i18nDateFormat(Language[navigator.language.substring(0,2)])

    let showCopied = false;
    let iconSearch = "";
    function copy(key) {
        showCopied = true;
        navigator.clipboard.writeText('<Icon name="' + key + '"/>');
        setTimeout(() => {
            showCopied = false;
        }, 2000)
    }
</script>

<Card class="min-w-full">

    <article class="format lg:format-lg dark:format-invert ">
        <h1>REtech starter kit</h1>
        <p class="lead">This template is meant to jump start svelte kit app development with customization in mind</p>
        <p>The package includes a complete setup of svelte-flowbite, flowbite-icons, functional utilities, and customization functionality.</p>
        <p>System time: {dayjs().format(dateFormat)}</p>
    </article>
    <div class="text-center">
        <ButtonGroup>
            {#each links as link}
                <Button href={link.href}>{link.name}</Button>
            {/each}
        </ButtonGroup>
    </div>


</Card>

<article id="setup" class="format lg:format-lg dark:format-invert mt-5 mb-3">
    <h2>Setup</h2>
    <p>Locally, this package runs out of the box, but you might want to go through the following checklist:</p>

</article>
<Accordion>
    <AccordionItem>
        <span slot="header">1. Create .env</span>
        <p>
            In order to set up the REST-API, copy example.env into .env <br>
            .env.production and .env.development can be used for different environments
        </p>
    </AccordionItem>
    <AccordionItem>
        <span slot="header">2. Setup <code>src/lib/colors.js</code></span>
        <p>
            The values of the color generator can be found in src/lib/colors.js. <br>
            Change, create, overwrite any hex-values you need
        </p>
    </AccordionItem>
    <AccordionItem>
        <span slot="header">3. Change base in <code>svelte.config.js</code></span>
        <p>
            Running on github pages or another subdirectory of a TLD? <br>
            Make sure to set your base accordingly.
        </p>
    </AccordionItem>
    <AccordionItem>
        <span slot="header">4. Make changes to <code>static/manifest.json</code></span>
        <p>
            In order for your PWA to work, make sure the start_url and scope is set correctly. As an example: If deploying to Github pages,
            the start_url should be <code>https://[your-username-or-org].github.io/[your-repo-name]</code>
            and the scope should be <code>/[your-repo-name]/</code>.
        </p>
    </AccordionItem>
    <AccordionItem>
        <span slot="header">5. Install</span>
        <p>
            run <code>yarn</code> <br>
            run <code>yarn dev</code>
        </p>
    </AccordionItem>
</Accordion>
<div class="my-5">
    <Alert>If you install via npx, some of these steps have already been automatically done. However, in order to adapt to your needs, use this checklist to verify things are set up for you.</Alert>
</div>

<article id="resources" class="format lg:format-lg dark:format-invert w-full mt-5 mb-2">
    <h2>Resources</h2>
    <p class="lead">The following links might come in handy</p>
</article>
<ButtonGroup>
    <Button href="https://flowbite.com/docs" target="_blank">Flowbite</Button>
    <Button href="https://flowbite-svelte.com/docs/pages/introduction" target="_blank">Flowbite svelte</Button>
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
        import &#123;Icon&#125; from 'flowbite-svelte-icons'
    </code>


</article>
<div class="mb-3">
    <Search bind:value={iconSearch} />
</div>
<div class="grid grid-cols-6 gap-x-3 gap-y-5 text-neutral-400 dark:text-white relative max-h-[600px] overflow-y-auto">
    {#each Object.keys(icons).filter(icon => iconSearch === "" || icon.toLowerCase().includes(iconSearch.toLowerCase())) as key}
        <div class="hover:text-primary-400" on:click={() => copy(key)}>
            <Icon name={key} size="lg" />
            <div class="text-xs">{key}</div>
            <Tooltip placement="bottom">&lt;Icon name="{key}"/&gt;</Tooltip>
        </div>

    {/each}
    <Modal title="Copied!" bind:open={showCopied}>Copied to clipboard</Modal>
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

