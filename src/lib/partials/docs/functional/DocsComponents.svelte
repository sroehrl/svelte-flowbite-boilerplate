<script>
    import {Alert, Button} from "flowbite-svelte";
import {modalStore} from "$lib/stores/modal";
import DocsIcons from "$lib/partials/docs/DocsIcons.svelte";
    import {ExclamationCircleSolid} from "flowbite-svelte-icons";

$modalStore.registerConfig({
    component: DocsIcons,
    title: "Icons",
    size: "xl"
})
</script>
<style>
    table td{
        padding: 0.5rem;
        border-bottom: 1px solid #e2e8f0;
    }
</style>

<article class="format lg:format-lg dark:format-invert w-full mt-5 mb-3">
    <h2>Components</h2>
    <p class="lead">
        For the purposes of this package, only functional components are shipped. In this version there are only two:
        <code>CopyToClipboard.svelte</code> and <code>ReusableModal.svelte</code>
    </p>
    <h3>CopyToClipboard</h3>
    <table>
        <tr>
            <th>Prop</th>
            <th>Type</th>
        </tr>
        <tr>
            <td>textToCopy</td>
            <td>string</td>
        </tr>
        <tr>
            <td>size</td>
            <td>string ("xs", "sm", "md", "lg")</td>
        </tr>
    </table>
    <p>If you don't want the default Icon to display, filling the slot is required.</p>

</article>
<code class="format lg:format-lg dark:format-invert">
<pre>
    &lt;CopyToClipboard textToCopy="some text" /&gt;
    &lt;CopyToClipboard textToCopy="some text"&gt; Click to copy &lt;/CopyToClipboard&gt;
</pre>
</code>
<article class="format lg:format-lg dark:format-invert w-full mt-10 mb-3">
    <h3>ReusableModal</h3>
    <p>
        Most projects require one specific look & feel for certain components. In order to spare yourself redundancies and
        to reduce the load & memory consumption, the ReusableModal serves as a nice example of how to implement such principles.
        <br>The modal is controlled by its own store instead of props.
    </p>

</article>
<code class="format lg:format-lg dark:format-invert">
<pre>
    &lt;script&gt;
        import {'{ DocsIcons }'}  from '$lib/partials/docs/DocsIcons.svelte'
        import {'{ modalStore }'}  from '$lib/stores/modal'
        import {'{ Button }'}  from 'flowbite-svelte'

        $modalStore.registerConfig({'{'}
            component: DocsIcons,
            title: "Icon Modal",
            size: "xl"
        {'}'})
    &lt;/script&gt;
    &lt;Button on:click={'{$modalStore.toggle}'}&gt;show icons{'</Button>'}
</pre>
</code>
<Button class="mt-5" on:click={$modalStore.toggle}>show icons</Button>
<article class="format lg:format-lg dark:format-invert w-full mt-5 mb-3">
    <h4>Configuration</h4>
    <table class="w-full">
        <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>title</td>
            <td>string</td>
            <td>REQUIRED. The title of the modal.</td>
        </tr>
        <tr>
            <td>content</td>
            <td>string</td>
            <td>Simple text content. (this OR the property "component" needs to be used)</td>
        </tr>
        <tr>
            <td>component</td>
            <td>SvelteComponent</td>
            <td>Renders a svelte component as modal content. (this OR the property "content" needs to be used)</td>
        </tr>
        <tr>
            <td>autoclose</td>
            <td>boolean</td>
            <td>Sets the auto-closing behavior</td>
        </tr>
        <tr>
            <td>outsideclose</td>
            <td>boolean</td>
            <td>Sets whether the modal closes when clicking outside</td>
        </tr>
        <tr>
            <td>size</td>
            <td>string</td>
            <td>'xs' | 'sm' | 'md' | 'lg' | 'xl'</td>
        </tr>
    </table>
    <h4>Methods</h4>
    <table class="w-full">
        <tr>
            <th>Method</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>toggle()</td>
            <td>Switches (via update) the property "open" between true and false</td>
        </tr>
        <tr>
            <td>registerConfig(config: ModalConfig)</td>
            <td>Updates the modal configuration.</td>
        </tr>

    </table>

</article>
<Alert class="flex gap-3">
    <ExclamationCircleSolid/>
    <p>Be mindful of possible side-effects! In complex projects you might want to place an update to the modal within a function to avoid pollution from other components making use of the modal.</p>
</Alert>
