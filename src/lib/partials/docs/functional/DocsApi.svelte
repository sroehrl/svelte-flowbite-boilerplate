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
        import * as api from '$lib/api'
    </code>
    <p>The API automatically uses the store "auth" to retrieve an active JWT-token, if present.</p>
    <code class="block">
        let existingEntries = []; <br>
        let newEntry; <br>
        onMount(async()=> &#123; <br>
        &nbsp;existingEntries = await api.get('/blog') <br>
        &nbsp;newEntry = await api.post('/blog', &#123;title: "new post"&#125;) <br>
        )
    </code>
    <table>
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
    </table>
</article>
