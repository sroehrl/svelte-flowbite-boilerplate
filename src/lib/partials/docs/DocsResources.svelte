<script lang="ts">
    import {Button, ButtonGroup} from "flowbite-svelte";

    export let id = "resources";
</script>

<article id={id} class="format lg:format-lg dark:format-invert w-full mt-5 mb-2">
    <h2>Resources</h2>
    <p>
        Part of the appeal of this starter package is that it isn't a UI-kit in itself.
        Development can focus on structural & functional methodologies while entrusting the great team
        at flowbite and others with design and UI. <br>
        As such, please refer to the corresponding documentation for more information.
    </p>
    <p class="lead">The following links might come in handy</p>
</article>
<ButtonGroup>
    <Button href="https://flowbite.com/docs" target="_blank">Flowbite</Button>
    <Button href="https://flowbite-svelte.com/docs/pages/introduction" target="_blank">Flowbite svelte</Button>
    <Button href="https://flowbite.com/icons/" target="_blank">Flowbite icons</Button>
    <Button href="https://kit.svelte.dev/docs" target="_blank">Svelte Kit</Button>
</ButtonGroup>