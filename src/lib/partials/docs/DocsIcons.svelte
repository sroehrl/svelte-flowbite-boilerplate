<script lang="ts">
import * as Icons from "flowbite-svelte-icons";
import {Button, ButtonGroup, Dropdown, DropdownItem, Input, Search, Tooltip} from "flowbite-svelte";
import CopyToClipboard from "$lib/components/CopyToClipboard.svelte";
import {ChevronDownSolid} from "flowbite-svelte-icons";

export let id = "icons";

let iconSearch = '';
let iconClasses = 'w-6 h-6';
let iconType = 'All'

</script>

<article id={id} class="format lg:format-lg dark:format-invert w-full mt-5 mb-5">
    <h2>Icons</h2>
    <p class="lead">This package uses Flowbite Icon modules.</p>
    https://flowbite-svelte-icons.vercel.app/
    <p>
        The naming convention of the Modules follow the <a href="https://flowbite.com/icons/">Flowbite Icons'</a> names pascal-cased and with the attribute "solid" or "outline".
        <br>Example:

    </p>
    <code>
        import &#123;AppleSolid&#125; from 'flowbite-svelte-icons'
    </code>

</article>
<div class="mb-5">
    <ButtonGroup class="w-full">
        <Button color="none" class="flex-shrink-0 text-gray-900 bg-gray-100 border border-gray-300 dark:border-gray-700 dark:text-white hover:bg-gray-200 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            {iconType}<ChevronDownSolid class="w-3 h-3 ms-2 text-white dark:text-white" />
        </Button>
        <Dropdown>
            <DropdownItem on:click={() => iconType = 'All'}>All</DropdownItem>
            <DropdownItem on:click={() => iconType = 'Solid'}>Solid</DropdownItem>
            <DropdownItem on:click={() => iconType = 'Outline'}>Outline</DropdownItem>
        </Dropdown>
        <Input class="w-1/4" bind:value={iconClasses}/>
        <Search bind:value={iconSearch} />
    </ButtonGroup>
</div>
<div class="grid grid-cols-6 gap-x-3 gap-y-5 text-neutral-400 dark:text-white relative max-h-[600px] overflow-y-auto">

    {#each Object.keys(Icons).filter(icon => iconType === 'All' || iconType === 'Solid' && icon.endsWith(iconType)).filter(icon => iconSearch === "" || icon.toLowerCase().includes(iconSearch.toLowerCase())) as key}
        {#if !key.startsWith('Icon')}
        <CopyToClipboard textToCopy="&lt;{key} class=&quot;{iconClasses}&quot;/&gt;">
            <div class="hover:text-primary-400 grid gap-2 place-items-center" >
                <svelte:component this={Icons[key]} class="{iconClasses}" />
                <span class="text-xs">{key}</span>
                <Tooltip placement="bottom">&lt;{key} class=&quot;{iconClasses}&quot;/&gt;</Tooltip>
            </div>
        </CopyToClipboard>
        {/if}
    {/each}
</div>