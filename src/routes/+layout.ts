import {browser} from "$app/env";
import '$lib/i18n/i18n'
import { locale, waitLocale } from 'svelte-i18n'
import type {LayoutLoad} from "./$types";
export const ssr = false;
export const prerender = true;

export const load: LayoutLoad = async () => {
    if (browser) {
        locale.set(window.navigator.language)
    }
    await waitLocale()
}