import * as api from "$lib/api";
import {get} from "svelte/store";
import type {Writable} from "svelte/store";


let pristine: any = {};
export default function autoFillStore<T>(store: Writable<any[]>, endpoint: string){
    if(get(store).length > 0 || typeof pristine[endpoint] !== 'undefined'){
        pristine[endpoint] = true
        return
    }
    api.get(endpoint).then((x: any[]) => {
        const results: any[]  = x.map((x: any) => ({value: x.id, ...x}));
        store.update(existing => [...existing, ...results])
    })
}