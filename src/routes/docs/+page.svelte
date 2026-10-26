<script lang="ts">
    import {
        Alert,
        Card, Heading,
        Sidebar,
        SidebarDropdownItem,
        SidebarDropdownWrapper,
        SidebarGroup,
        SidebarItem,
        SidebarWrapper
    } from 'flowbite-svelte'
    import {fade} from "svelte/transition";
    import DocsColors from "$lib/partials/docs/DocsColors.svelte";
    import DocsIcons from "$lib/partials/docs/DocsIcons.svelte";
    import DocsSetup from "$lib/partials/docs/DocsSetup.svelte";
    import DocsResources from "$lib/partials/docs/DocsResources.svelte";
    import DocsStructure from "$lib/partials/docs/functional/DocsStructure.svelte";
    import functional from "$lib/partials/docs/functional";
    import viewportObserver from "$lib/utils/viewportObserver";
    import Sleep from "$lib/utils/sleep";

    let FunctionComponent = $state(DocsStructure);
    let functionalInView = $state(false);
    const isVisible = (val:boolean) => {
        functionalInView = val
    }

    const hookComponent = async (name:string) => {
        FunctionComponent = null;
        FunctionComponent =  (await functional.load(name)).default;
        await Sleep(100)
        if(!functionalInView){
            document.getElementById('functional')?.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }


</script>
<div class="block">

</div>
<div class="contain-content">
    <Sidebar class="w-64 h-full dark:bg-primary-900" classes={{ div: "dark:bg-primary-900" }}>
        <SidebarWrapper >
            <SidebarGroup>
                <SidebarItem label="Setup" href="#setup"/>
                <SidebarItem label="Resources" href="#resources"/>
                <SidebarItem label="Colors" href="#colors"/>
                <SidebarItem label="Icons" href="#icons"/>
                <SidebarDropdownWrapper label="Functional">
                    <SidebarDropdownItem href="#functional" onclick={(ev) => hookComponent('Structure')} label="Structure"/>
                    <SidebarDropdownItem href="#functional" onclick={(ev) => hookComponent('Internationalization')} label="i18n / Internationalization"/>
                    <SidebarDropdownItem href="#functional" onclick={(ev) => hookComponent('Components')} label="Components"/>
                    <SidebarDropdownItem href="#functional" onclick={(ev) => hookComponent('Api')} label="API"/>
                    <SidebarDropdownItem href="#functional" onclick={(ev) => hookComponent('Stores')} label="Stores"/>
                    <SidebarDropdownItem href="#functional" onclick={(ev) => hookComponent('Utils')} label="Utils"/>
                </SidebarDropdownWrapper>
            </SidebarGroup>
        </SidebarWrapper>
    </Sidebar>
    <section class="overflow-auto px-4 md:ml-64 dark:text-white">
        <Card class="min-w-full format">

            <article >
                <h1>Starter kit</h1>
                <p class="lead">This template is meant to jump start svelte kit app development with customization
                    in mind</p>
                <p>The package includes a complete setup of svelte-flowbite, flowbite-icons, functional utilities,
                    and customization functionality.</p>
            </article>

        </Card>
        <DocsSetup id="setup"/>
        <DocsResources id="resources"/>
        <DocsColors id="colors"/>
        <DocsIcons id="icons"/>
        <div use:viewportObserver={{isVisible}} id="functional" >
            {#if FunctionComponent}
                <Heading tag="h1" class="mt-5">Functionality</Heading>
                <svelte:component this={FunctionComponent}/>
                <div class="h-36"></div>
            {/if}
        </div>
    </section>

</div>











