import React, { useCallback } from 'react'
import { useState } from 'react'
import { useRecoilState } from 'recoil';
import { errorState } from '../Global/Atom';
const useAPI = () => {

    const [data, setData] = useState("")
    const [loading, setLoading] = useState(false);
    const [serverError , setServerError] = useState()
    const [error ,setError] = useRecoilState(errorState);
    const postREQUEST = useCallback(async (PATH, BODY, HEADER) => {
        try {
            const RESPONSE = await fetch(`${import.meta.env.VITE_API_URL}${PATH}`,
            {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": localStorage.getItem("token"),
                        ...HEADER
                    },
                    body: BODY,
                    method: "POST"
                })
            const data = await RESPONSE.json();
            if (data) {
                setData(data);
                return data
            }
        }
        catch (error) {
            setError(error)
            // setServerError(error)
            return error
        }
    }, [data, error, loading]);
    
    const getREQUEST = useCallback(async (PATH, BODY, HEADER) => {
        // setIsRefreshing(true)
        try {
            const RESPONSE = await fetch(`${import.meta.env.VITE_API_URL}${PATH}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": localStorage.getItem("token")
                    },
                    method: "GET"
                })
            const data = await RESPONSE.json();
            if (data) {
                // setIsRefreshing(false)
                setData(data);
            }
            return data
        }
        catch(e) {
            if (e) {
                console.log(e);
                setError(e)
            }
            return e;
        }
    }, [data  ,data, error,serverError]);
    
    
    const patchREQUEST = useCallback(async (PATH,COLLECTION_NAME  ,_id, COLUMNS ) => {
        try {
            // setLoaderState(true)
            const RESPONSE = await fetch(`${import.meta.env.VITE_API_URL}${PATH}`,
            {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": localStorage.getItem("token")
                    },
                    method: "PATCH",
                    body:JSON.stringify({
                        COLLECTION_NAME,
                        COLUMNS,
                        _id
                    })
                })
            const data = await RESPONSE.json();
            if (data) {
                // setLoaderState(false)
                setData(data);
            }
            return data
        }
        catch (error) {
            // setLoaderState(false);
            setError(error);
            // setServerError(error.toString())
            return error
        }
    }, [data, error, loading]);
    console.log(error);
    
    
    const deleteREQUEST = useCallback(async (PATH,COLLECTION_NAME , WHERE ) => {
        try {
            const RESPONSE = await fetch(`${import.meta.env.VITE_API_URL}${PATH}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "authorization": localStorage.getItem("token")
                    },
                    method: "DELETE",
                    body:JSON.stringify({
                        COLLECTION_NAME,
                        WHERE
                    })
                })
            const data = await RESPONSE.json();
            setData(data);
            return data
        }
        catch (error) {
            // setLoaderState(false);
            setError(error);
            return error
        }
    }, [data, error, loading]);
    
    return {postREQUEST ,getREQUEST ,deleteREQUEST,patchREQUEST  ,serverError, error, data , loading }
}

export default useAPI


// const response = await fetch("http://localhost:5500/login", {
//                     body: JSON.stringify({ email, password }),
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 })