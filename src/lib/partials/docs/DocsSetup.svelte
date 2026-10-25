<script lang="ts">
    import {Accordion, AccordionItem, Alert} from "flowbite-svelte";

    let {id = 'setup'} = $props<{id: string}>()
</script>

<article id={id} class="format lg:format-lg dark:format-invert mt-5 mb-3">
    <h2>Setup</h2>
    <p>Locally, this package runs out of the box, but you might want to go through the following checklist:</p>

</article>
<Accordion>
    <AccordionItem>
        {#snippet header()}1. Create .env{/snippet}
        <p>
            In order to set up the REST-API, copy example.env into .env <br>
            .env.production and .env.development can be used for different environments
        </p>
    </AccordionItem>
    <AccordionItem>
        {#snippet header()}2. Setup <code>src/lib/_setup/colors.js</code>{/snippet}
        <p>
            The values of the color generator can be found in src/lib/_setup/colors.js. <br>
            Change, create, overwrite any hex-values you need. Run <code>yarn setup</code> or <code>npm run setup</code> to generate palettes.
        </p>
    </AccordionItem>
    <AccordionItem>
        {#snippet header()}3. Change base in <code>vite.config.ts</code>{/snippet}
        <p>
            Running on github pages or another subdirectory of a TLD? <br>
            Make sure to set your base accordingly.
        </p>
    </AccordionItem>
    <AccordionItem>
        {#snippet header()}4. Make changes to <code>static/manifest.json</code>{/snippet}
        <p>
            In order for your PWA to work, make sure the start_url and scope is set correctly. As an example: If deploying to Github pages,
            the start_url should be <code>https://[your-username-or-org].github.io/[your-repo-name]</code>
            and the scope should be <code>/[your-repo-name]/</code>.
        </p>
    </AccordionItem>
    <AccordionItem>
        {#snippet header()}5. Install{/snippet}
        <p>
            run <code>yarn</code> <br>
            run <code>yarn dev</code>
        </p>
    </AccordionItem>
</Accordion>
<div class="my-5">
    <Alert>If you install via npx, some of these steps have already been automatically done. However, in order to adapt to your needs, use this checklist to verify things are set up for you.</Alert>
</div>