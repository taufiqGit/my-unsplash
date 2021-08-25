import { createContext, useReducer } from "react"
import axios from 'axios'
import AppReducer from './AppReducer'
const URL_BE = "https://api-my-unsplash.herokuapp.com"

const init = { 
    images: [],
    error: null,
    loading: true,
    idDel: null,
    showAdd: false,
    showDel: false
}

export const GlobalContext = createContext()

export const GlobalProvider =({ children })=>{
    const [state, dispatch] = useReducer(AppReducer, init)

    function handleShowAdd(condition) {
        dispatch({
            type: "SHOW_ADD",
            payload: condition
        })
    }

    function handleShowDel(condition) {
        dispatch({
            type: "SHOW_DEL",
            payload: condition
        })
    }

    function handleIdDel(id) {
        //console.log(id)
        dispatch({
            type: "ID_DEL",
            payload: id
        })
    }

    async function handleGetAll(){
        try {
            const result = await axios.get(`${URL_BE}/image`)
            const images = await result.data
        //console.log(images)
            dispatch({
                type: 'GET_IMAGE_ALL',
                payload: images.data
            })   
                  
        } catch (error) {
            let err = error.response.data
            dispatch({
                type: 'IMAGE_ERROR',
                payload: err.message
            })             
        }
    }

    async function handleAddImage(newImage) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        try {
            const result = await axios.post(`${URL_BE}/image`, newImage, config)
            dispatch({
                type: 'ADD_IMAGE',
                payload: result.data.data
            })
        } catch (error) {
            let err = error.response.data
            dispatch({
                type: 'IMAGE_ERROR',
                payload: err.message
            })   
        }
    }

    async function handleSearchImage(keyword) {
        try {
            const result = await axios.get(`${URL_BE}/image?search=${keyword}`)
            const images = result.data
            // console.log(images.data)
            dispatch({
                type: "SEARCH_IMAGE",
                payload: images.data
            })
        } catch (error) {
            // console.log(error.response.data)
            let err = error.response.data
            dispatch({
                type: 'IMAGE_404',
                payload: err.message
            })   
        }
    }
    
    async function handleDeleteImage(id, password) {
        //console.log(id, password)
        try {
            await axios.delete(`${URL_BE}/image/${id}`, { data: { password },
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            dispatch({
                type: "DELETE_IMAGE",
                payload: id
            })
        } catch (error) {
            let err = error.response.data
            dispatch({
                type: 'IMAGE_ERROR',
                payload: err.message
            })   
        }
    }

    return(
        <GlobalContext.Provider value={{
            images: state.images,
            error: state.error,
            loading: state.loading,
            showAdd: state.showAdd,
            showDel: state.showDel,
            idDel: state.idDel,
            handleGetAll,
            handleAddImage,
            handleDeleteImage,
            handleSearchImage,
            handleShowAdd,
            handleShowDel,
            handleIdDel
        }}>
            { children }
        </GlobalContext.Provider>
    )
}