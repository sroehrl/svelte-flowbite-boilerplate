import { PUBLIC_API_PATH } from '$env/static/public';
import { token } from '$lib/stores/auth';
interface fetchObject {
    method:string,
    headers:any,
    body?:any,
    withCredentials?:boolean
}

let bearer:string|null|undefined = null;

if(token){
    token.subscribe((t) => {
        bearer = t
    })
}

const getOptions = (method:string, payload = null) => {
    const obj: fetchObject = {
        method: method.toUpperCase(),
        headers: {
            'Authorization': 'bearer ' + bearer,
            'Content-Type': 'application/json'
        }
    }
    if(bearer){
        obj.withCredentials = true;
        // obj.credentials = 'include'
    }

    if(payload){
        obj.body = JSON.stringify(payload)
    }
    return obj;
}

const call = async (method: string, url:string, postData:any|null = null) => {
    const call = await fetch(PUBLIC_API_PATH + url, getOptions(method, postData))
    if(call.status >= 200 && call.status <= 299){
        return await call.json();
    } else {
        throw Error(call.statusText)
    }

}

export const post = async (url: string, postData = {}) => call('post', url, postData)
export const get = async (url:string) => call('get', url)

export const retire = async (url:string) => call('delete', url)
export const put = async (url:string, postData = {}) => call('put', url, postData)

export const formDataPost = async (url:string, postData:any) => {
    const options = getOptions('post')
    delete options.headers['Content-Type']
    const data = new FormData();
    for(const name in postData) {
        data.append(name, postData[name]);
    }
    options.body = data;
    const call = await fetch(PUBLIC_API_PATH + url, options)
    if(call.status >= 200 && call.status <= 299){
        return await call.json();
    }
    throw Error(call.statusText)
}