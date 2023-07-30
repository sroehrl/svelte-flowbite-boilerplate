import { writable } from 'svelte/store'



export const token = writable(typeof window !== 'undefined' ? sessionStorage.token : null)

export const user = writable(typeof window !== 'undefined' ? sessionStorage.user : null)
