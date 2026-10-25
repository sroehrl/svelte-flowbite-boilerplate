<script lang="ts">
    export let id = "api";
</script>
<style>
    table td{
        padding: 0.5rem;
        border-bottom: 1px solid #e2e8f0;
    }
</style>
<article id={id} class="format lg:format-lg dark:format-invert w-full mt-5 mb-5">
    <h2>API</h2>
    <p class="lead">Using the celest-API or another external REST-API?</p>
    <p>
        Configuring the <code>.env</code>-file (delivery as example.env) allows the following CRUD methods
    </p>
    <code>
        import * as api from '$lib/utils/api'
    </code>
    <p>The API automatically uses the store "auth" to retrieve an active JWT-token, if present.</p>
    <code class="block">
        let existingEntries = $state([]); <br>
        let newEntry = $state(null); <br>
        onMount(async()=> &#123; <br>
        &nbsp;existingEntries = await api.get('/blog') <br>
        &nbsp;newEntry = await api.post('/blog', &#123;title: "new post"&#125;) <br>
        )
    </code>
    <table>
        <tbody>
        <tr>
            <th>Method</th>
            <th>Description</th>
        </tr>
        <tr>
            <td>post(url: string, postData: object)</td>
            <td>Sends a POST-request to PUBLIC_API_PATH + "url"</td>
        </tr>
        <tr>
            <td>put(url: string, postData: object)</td>
            <td>Sends a PUT-request to PUBLIC_API_PATH + "url"</td>
        </tr>
        <tr>
            <td>get(url: string)</td>
            <td>Sends a GET-request to PUBLIC_API_PATH + "url"</td>
        </tr>
        <tr>
            <td>retire(url: string)</td>
            <td>Sends a DELETE-request to PUBLIC_API_PATH + "url"</td>
        </tr>
        <tr>
            <td>formDataPost(url: string, formData: object)</td>
            <td>Sends a POST-request with FormData to PUBLIC_API_PATH + "url"</td>
        </tr>
        </tbody>

    </table>
    <h2 class="mt-4">Server-API</h2>
    <p>If you're using this boilerplate with adapter node, you can use the server2server wrapper to make requests in *.server.ts files.</p>
    <code class="block">
        import server2server from "$lib/utils/server2server"; <br>
        import type &#123; PageServerLoad &#125; from "./$types"; <br>

        export const load: PageServerLoad = async (&#123; locals, cookies, url &#125;) => &#123; <br>
            &nbsp;const api = server2server(&#123; locals, cookies &#125;); <br>
        &nbsp;return &#123; <br>
        &nbsp;&nbsp;blogPosts: await api.get('/blog') <br>
        &nbsp;&#125;<br>
        &#125;<br>
    </code>
</article>
