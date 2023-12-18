import {writable} from "svelte/store";
import autoFillStore from "../utils/autoFillStore";
import type {Writable} from "svelte/store";

export const user = writable(typeof window !== 'undefined' && typeof sessionStorage.user !== 'undefined' ? JSON.parse(sessionStorage.user) : null )

export const users : Writable<any[]> = writable([], () => autoFillStore(users, '/users'))