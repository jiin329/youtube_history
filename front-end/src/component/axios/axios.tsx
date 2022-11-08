import axios from "axios";


export function procGetAxios(url : string, res : any, error : any){
    axios.get(url, {
        headers : {
            'Content-type': 'application/json', 
        }
    })
    .then(res)
    .catch(error)
}

export function procPostAios(url : string, data : any, res : any, error : any){
    axios.post(url, data, {
        headers : {
            'Content-type': 'application/json', 
        }
    })
    .then(res)
    .catch(error)
}