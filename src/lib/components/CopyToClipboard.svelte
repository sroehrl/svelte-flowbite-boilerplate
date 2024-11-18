<script lang="ts">
    import {ClipboardOutline} from "flowbite-svelte-icons";
    import {Toast} from "flowbite-svelte";



    let {size, textToCopy} = $props();

    let open = $state(false);
    function copy() {
        open = true;
        navigator.clipboard.writeText(textToCopy);
        setTimeout(() => {
            open = false;
        }, 2000)
    }
</script>

<div class="cursor-pointer" role="button" tabindex="0" on:click={copy} on:keydown={e => e.key === "Enter" && copy}>
    <slot>
        <ClipboardOutline size={size} class="text-primary-400 text-inherit"/>
    </slot>
</div>
<div class="absolute">
    {#if open}
    <Toast>
        <span class="font-semibold">{textToCopy}</span> has been copied to your clipboard
    </Toast>
    {/if}
</div>

