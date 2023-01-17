import {Component} from "react";
import {Box, Heading, Text} from "@chakra-ui/react";
import React, {createContext, useContext, useState} from "react";
import {useRef, useEffect} from "react";


export function useMountedRef() {
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false)
    })
    return mounted;
}


const ErrorContext = createContext()

export function ErrorContextProvider({children}){
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);
    const [mounted, setMounted] = useState(false)

    function errorHandle(e, m){
        if(e !== String) {
            setError(e.message)
        }else{
            setError(e)
        }
        if(m){
            setMessage(m)
        }
    }


    const DisplayError = () => {
        const mounted = useMountedRef()
        useEffect(() => {
            setMounted(mounted.current)
        }, [])
        return(
            <>
                {error !== null && <Text color='red'>Error: {error}</Text>}
                {message !== null && <Text color='red' fontSize='xs'>{message}</Text>}
            </>
        )
    }
    return(<ErrorContext.Provider value={{errorHandle, DisplayError}}>
        {error !== null && mounted === false && <Heading backgroundColor='red' w='100%'>{error}</Heading>}
        {children}
    </ErrorContext.Provider>)
}

export const useErrorContext = () => useContext(ErrorContext)



