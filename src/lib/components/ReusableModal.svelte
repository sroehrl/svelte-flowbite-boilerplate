<script lang="ts">
import {Modal} from "flowbite-svelte";
import {modalStore} from "$lib/stores/modal";
</script>

<Modal  bind:open={$modalStore.open} size="{$modalStore.size}" outsideclose="{$modalStore.outsideclose}" title="{$modalStore.title}" autoclose="{$modalStore.autoclose}">
    {#if $modalStore.component}
        <svelte:component this={$modalStore.component} />
    {:else}
        {$modalStore.content}
    {/if}
</Modal>
