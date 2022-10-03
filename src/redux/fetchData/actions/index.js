import axios from "axios"
import {FETCH_DATA} from "./types"

export const fetchData = () =>{
    return dispatch =>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            dispatch({
                type: FETCH_DATA,
                payload: response.data 
            })
        })
    }
}
