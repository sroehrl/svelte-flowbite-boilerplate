import {type Cookies, redirect} from "@sveltejs/kit";
import {PUBLIC_API_PATH} from "$env/static/public";

interface ServerObject {
    cookies: Cookies
    url?: URL,
    params?: any
}

export default function server2server(serverObject: any) {
    return {

        requiresLogin(){
            // TODO locals.fetchAuthHeaders?
            const loggedIn = serverObject.locals.fetchAuthHeaders.Authorization;
            if(!loggedIn) {
                serverObject.cookies.clear()
                redirect(300, '/')
            }
            return loggedIn;
        },
        async post(url: string, body: any){
            const call = await fetch(PUBLIC_API_PATH + url, {
                method: 'POST',
                headers: serverObject.locals.fetchAuthHeaders,
                body: JSON.stringify(body)
            })
            if(!call.ok){
                throw new Error(call.statusText);
            }
            try{
                return await call.json();
            } catch(e){
                throw new Error(call.statusText);
            }
        },
        async get(url: string){
            const call = await fetch(PUBLIC_API_PATH + url, {
                method: 'GET',
                headers: serverObject.locals.fetchAuthHeaders
            })
            if(!call.ok){
                throw new Error(call.statusText);
            }
            try{
                return await call.json();
            } catch(e){
                throw new Error(call.statusText);
            }

        }

    }

}