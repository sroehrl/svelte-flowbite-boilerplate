<script>
    import {_, date, number, time} from "svelte-i18n";
    import {Alert} from "flowbite-svelte";
    import {ExclamationCircleSolid} from "flowbite-svelte-icons";
    import dayjs from "dayjs";
</script>

<article class="format lg:format-lg dark:format-invert w-full mt-5 mb-3">
    <h2>i18n</h2>
    <p class="lead">
        We are leveraging Kaisermann's i18n library <a href="https://github.com/kaisermann/svelte-i18n">svelte-i18n</a>.
        Next to simple translations, it supports formatting of numbers, times, and dates. <br>
        Our setup loads the translations from <code>src/lib/i18n</code> based on the browser locale as set up in
        <code>src/routes/+layout.ts</code>.
    </p>

</article>

<code class="format dark:format-invert my-5">
<pre>
    &lt;script&gt;
        import {'{ _ }'}  from 'svelte-i18n'
    &lt;/script&gt;
    &lt;p&gt;{'{$_(\'docs.i18n.demo\', {default: \'We could not find a translation for your language\'})}'}&lt;/p&gt;
</pre>
</code>
<article class="format dark:format-invert mb-5">
    <p>Rendered:</p>
    <p><strong>{$_('docs.i18n.demo', {default: 'We could not find a translation for your language'})}</strong></p>
</article>
<code class="format dark:format-invert my-5">
<pre>
    &lt;script&gt;
        import {'{ time, date, number }'}  from 'svelte-i18n'
    &lt;/script&gt;
    &lt;p&gt;{'{$time(new Date())}'}&lt;/p&gt;
    &lt;p&gt;{'{$date(new Date(), {format: "medium"})}'}&lt;/p&gt;
    &lt;p&gt;{'{$number(100000000, {locale: "de"})}'}&lt;/p&gt;
</pre>
</code>
<article class="format dark:format-invert mb-5 w-full">
    <p>Rendered:</p>
    <p><strong>{$time(new Date())}</strong></p>
    <p><strong>{$date(new Date(), {format: "medium"})}</strong></p>
    <p><strong>{$number(100000000, {locale: "de"})}</strong></p>
    <p>For a better understanding of the formatting options, see <a href="https://github.com/kaisermann/svelte-i18n/blob/main/docs/Formatting.md#formats">svelte-i18n formats</a>.</p>
</article>
<Alert class="flex gap-3">
    <ExclamationCircleSolid/>
    <p>
        We also ship with <a href="https://day.js.org/docs/en/display/as-javascript-date">Dayjs</a> in order to simplify
        time & date manipulation and calculations. We have not run into any issues when using dayjs-objects with i18n.
        (example: <code>{'{$time(dayjs())}'}</code>)
    </p>
</Alert>