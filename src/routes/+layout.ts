import {browser} from "$app/environment";
import '$lib/i18n/i18n'
import { locale, waitLocale } from 'svelte-i18n'
import type {LayoutLoad} from "../../.svelte-kit/types/src/routes/$types";
export const ssr = false;
export const prerender = true;

export const load: LayoutLoad = async () => {
    if (browser) {
        locale.set(window.navigator.language)
    }
    await waitLocale()
}