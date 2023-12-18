import {writable} from "svelte/store";

type ModalConfig = {
    title: string
    content?: string
    component?: any,
    autoclose?: boolean,
    outsideclose?: boolean,
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}
export const modalStore = writable({
    open: false,
    title: "",
    content:'',
    component: null,
    autoclose: false,
    outsideclose: false,
    size: "md",
    toggle(){
        modalStore.update(x => {
            x.open = !x.open
            return x
        })
    },
    registerConfig(config:ModalConfig){
        modalStore.update(x => {
            // reset
            x.content = ''
            x.component = null
            Object.keys(config).forEach(key => {
                // @ts-ignore
                if(config[key] !== undefined){
                    // @ts-ignore
                    x[key] = config[key]
                }
            })
            return x
        })

    }
})