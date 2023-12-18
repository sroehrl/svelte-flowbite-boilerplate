<article class="format lg:format-lg dark:format-invert w-full mt-5 mb-3">
    <h2>Stores</h2>
    <p class="lead">
        Svelte stores are one of the arguments for the framework as their simplicity is unbeatable.
        This package ships with 3 stores: <strong>auth, modal, user</strong>.
        <br>
        As you will mainly be using them as reference for own stores, we designed them with various use-cases:
    </p>
    <h3>Auth store</h3>
    <p>Notice how the token "survives" the reload of the page by using the sessionStorage.</p>
    <h3>Modal store</h3>
    <p>Notice how methods simplify the update process.</p>
    <h3>User store</h3>
    <p>Notice how the "users" store ensures that the store will be filled via external data on subscription (see autoFillStore).</p>
    <h4>Recommended usage</h4>
    <p>
        Svelte shines when ignoring the asynchronicity of the stores when utilizing the $-sign. <br>
        Instead of the documented approach, we recommend using this feature.
    </p>
</article>
<code class="format lg:format-lg dark:format-invert">
<pre>
 &lt;script&gt;
        import {'{ user }'}  from '$lib/stores/user'
 &lt;/script&gt;
 &lt;span&gt;{'{$user.email}</span>'}
</pre>
</code>