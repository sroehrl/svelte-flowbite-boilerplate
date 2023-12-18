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
    import {ExclamationCircleSolid} from "flowbite-svelte-icons";

    let component= DocsStructure;
    let functionalInView = false;
    const isVisible = (val:boolean) => {
        functionalInView = val
    }

    const hookComponent = async (name:string) => {

        component =  (await functional.load(name)).default
        await Sleep(100)
        if(!functionalInView){
            document.getElementById('functional')?.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }


</script>
<div class="block">
    <div class="flex flex-row gap-5">
        <div class="!w-64 flex-shrink-0 relative bg-gray-50 dark:bg-gray-800">
            <Sidebar divClass="w-64 h-full " class="fixed bottom-[72px] top-[72px] bg-transparent dark:bg-transparent">
                <SidebarWrapper>
                    <SidebarGroup>
                        <SidebarItem label="Setup" href="#setup"/>
                        <SidebarItem label="Resources" href="#resources"/>
                        <SidebarItem label="Colors" href="#colors"/>
                        <SidebarItem label="Icons" href="#icons"/>
                        <SidebarDropdownWrapper label="Functional">
                            <SidebarDropdownItem href="#functional" on:click={(ev) => hookComponent('Structure')} label="Structure"/>
                            <SidebarDropdownItem href="#functional" on:click={(ev) => hookComponent('Internationalization')} label="i18n / Internationalization"/>
                            <SidebarDropdownItem href="#functional" on:click={(ev) => hookComponent('Components')} label="Components"/>
                            <SidebarDropdownItem href="#functional" on:click={(ev) => hookComponent('Api')} label="API"/>
                            <SidebarDropdownItem href="#functional" on:click={(ev) => hookComponent('Stores')} label="Stores"/>
                            <SidebarDropdownItem href="#functional" on:click={(ev) => hookComponent('Utils')} label="Utils"/>
                        </SidebarDropdownWrapper>
                    </SidebarGroup>
                </SidebarWrapper>
            </Sidebar>
        </div>

        <section class="flex-1 xl:max-w-screen-lg mr-5 3xl:mr-12">
            <Card class="min-w-full">

                <article class="format lg:format-lg dark:format-invert ">
                    <h1>REtech starter kit</h1>
                    <Alert color="green" class="flex gap-3">
                        <ExclamationCircleSolid/>
                        Now for svelte kit 2!
                    </Alert>
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
                <Heading tag="h1" class="mt-5">Functionality</Heading>
                <svelte:component this={component}/>
                <div class="h-36"></div>
            </div>
        </section>
    </div>
</div>











