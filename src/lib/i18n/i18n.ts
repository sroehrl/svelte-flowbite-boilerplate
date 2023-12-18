import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

register('de', () => import('./de.json'));
init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
});