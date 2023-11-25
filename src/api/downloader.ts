import {ResponseData, ResponseJson} from "./interfaces";
import {API_URL} from "../config";

let controller = new AbortController();
export async function parseDataFromServer(value: number, ){
    if(controller) controller.abort();
    controller = new AbortController();
    const ans = await fetch(API_URL, {
        signal: controller.signal,
        method: 'POST',
        body: JSON.stringify({value}),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
        .then(e=>e.json()) as ResponseJson<ResponseData>;
    console.assert(ans.success,"Request failed for some reason...")
    return ans.response.text;
}