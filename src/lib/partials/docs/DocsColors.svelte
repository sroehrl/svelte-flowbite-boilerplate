<script>
import colors from "$lib/_setup/colors.js";
import {Alert} from "flowbite-svelte";

export let id = "colors";

const shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"];
</script>

<article id={id} class="format lg:format-lg dark:format-invert w-full mt-5 mb-3">
    <h2>Colors</h2>
    <p class="lead">Next to the tailwind color palette and the flowbite colors, you may add or overwrite values.</p>
    <code>src/lib/_setup/colors.js</code>
    <p>
        Below is the calculated result of the base values. You can define colors as hex, hsl, or rgb.
        Make sure to familiarize yourself with flowbite-svelte to understand how to influence prop-colors by setting them.
        The primary name, for example, is used in many components.
    </p>


    <Alert color="yellow">The value you specify is used for the shade "500"</Alert>
</article>
<div  class="w-full overflow-x-auto">
    {#each Object.entries(colors) as [name, color]}
        <h2 class="capitalize text-lg my-1 dark:text-white">{name}</h2>
        <div class="grid grid-cols-10 gap-3 overflow-x-auto">
            {#each shades as shade}
                <div class="h-32 p-3 bg-{name}-{shade}">
                    {shade} <br>
                    <p class="text-xs text-gray-500 bg-gray-200/50 rounded px-1">.bg-{name}-{shade}</p>
                </div>
            {/each}
        </div>

    {/each}
</div>
