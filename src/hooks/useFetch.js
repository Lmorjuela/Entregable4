import axios from "axios"
import { useState } from "react"

const useFetch = (baseURL) => {
  
    //Guardar la información de la API
    const [infoApi, setInfoApi] = useState()

    //READ - Obtener información de la API
    const getApi = (path) => {
        const url = `${baseURL}${path}/`
        axios.get(url)
        .then (res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }

    //CREATE - Crear información en la API
    const createNewRegister = (path, data) =>{
        const url = `${baseURL}${path}/`
        axios.post(url, data)
        .then (res =>{
            console.log(res.data)
            setInfoApi([...infoApi, res.data])
        })
        .catch (err => console.log(err))
    }

    //DELETE

    const deleteRegister = (path, id) => {
        const  url = `${baseURL}${path}/${id}/`

        axios.delete (url)
        .then(res => {
            console.log(res.data)
            const infoApiFilter = infoApi.filter(register => register.id !== id)
            setInfoApi(infoApiFilter)
        })
        .catch(res=>console.log(err))
    }

    //UPDATE
    const updateRegister = (path, id, data) =>{
        const url = `${baseURL}${path}/${id}/`
       
        axios.put(url, data)
        .then(res => {
            console.log(res.data)
            const infoApiUpdated = infoApi.map(register =>{
                if(register.id === id){
                    return data
                }else{
                    return register
                }
            })
            setInfoApi(infoApiUpdated)
        })
        .catch(err => console.log(err))

    }

    //Return

    return[infoApi, getApi, createNewRegister, deleteRegister, updateRegister]

}

export default useFetch