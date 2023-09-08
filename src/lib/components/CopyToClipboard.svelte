<script>
    import {Icon} from "flowbite-svelte-icons";
    import {Toast} from "flowbite-svelte";

    export let textToCopy;

    export let size = "md";

    let open = false;
    function copy(key) {

        open = true;
        navigator.clipboard.writeText(textToCopy);
        setTimeout(() => {
            open = false;
        }, 2000)
    }
</script>

<div class="cursor-pointer" on:click={copy} on:keydown={e => e.key === "Enter" && copy}>
    <slot>
        <Icon size={size} name="clipboard-outline" class="text-primary-400 text-inherit"/>
    </slot>
</div>
<div class="absolute">
    <Toast bind:open>
        <span class="font-semibold">{textToCopy}</span> has been copied to your clipboard
    </Toast>
</div>

