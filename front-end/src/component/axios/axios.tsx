import axios from "axios";

axios.defaults.baseURL = "localhost:3000";

export function procGetAxios(url : string, res : any, error : any){
    axios.get(url, {
        headers : {
            'Content-type': 'application/json', 
        }
    })
    .then(res)
    .catch(error)
}

export function procPostAxios(url : string, data : any, res : any, error : any){
    axios.post(url, data, {
        headers : {
            'Content-type': 'application/json', 
        }
    })
    .then(res)
    .catch(error)
}