import {SvelteComponent} from "svelte";

const components: any = {

    load: async (name: string): Promise<any> => await import(`./Docs${name}.svelte`),
}
export default components;