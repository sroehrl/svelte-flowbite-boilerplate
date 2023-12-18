<script lang="ts">
    import {Alert, Button, Listgroup, ListgroupItem} from "flowbite-svelte";
    import {modalStore} from "$lib/stores/modal";


    const folderModalContent:any = {
        _setup:'Folder for Branding & project setup (f.e. Custom icon settings, colors, ...)',
        _types:'Folder containing custom TS types & interfaces',
        components:'Folder for reusable components (f.e. UI components)',
        i18n:'Folder for language JSONs',
        partials:'Folder for partial views related to routes',
        stores:'Folder for your svelte stores',
        utils:'Folder for miscellaneous functions, helpers, ...',
    }

    const modal = (which:string) => {
        $modalStore.registerConfig({
            content: folderModalContent[which],
            autoclose: true,
            title: "$lib/" + which

        })
        $modalStore.toggle()
    }

</script>

<article class="format lg:format-lg dark:format-invert w-full mt-5 mb-3">
    <h2>Structure</h2>
    <p class="lead">There's no need to use the recommended structure, but this is how we do it:</p>
    <Listgroup active >
        <ListgroupItem on:click={() => modal('_setup')}>$lib/_setup</ListgroupItem>
        <ListgroupItem on:click={() => modal('_types')}>$lib/_types</ListgroupItem>
        <ListgroupItem on:click={() => modal('components')}>$lib/components</ListgroupItem>
        <ListgroupItem on:click={() => modal('i18n')}>$lib/i18n</ListgroupItem>
        <ListgroupItem on:click={() => modal('partials')}>$lib/partials</ListgroupItem>
        <ListgroupItem on:click={() => modal('stores')}>$lib/stores</ListgroupItem>
        <ListgroupItem on:click={() => modal('utils')}>$lib/utils</ListgroupItem>
    </Listgroup>

    <p class="mt-5">
        In general, we recommend using as little functional code within routes as possible.
        We designed our folder structure for application development;
        keeping what files you will have open and accessible in mind. Ideally, you will spend your days
        mainly in the $lib-folders "components" and "partials".
    </p>
</article>