import {Component} from "react";
import {Box, Button, Flex, Heading, Spacer, Text} from "@chakra-ui/react";
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
        if(typeof e !== "string") {
            setError(e.message)
        }else{
            setError(e)
        }
        if(m){
            setMessage(m)
        }
    }

    const DisplayError = () => {

        const DisplayErrorText = () => {
            const mounted = useMountedRef()
            useEffect(() => {
                setMounted(mounted.current)
            }, [])
            return(
                <>
                    {error !== null && <Text fontSize='xl'> Error: {error}</Text>}
                    {message !== null && <Text fontSize='s' >{message}</Text>}
                    {(error !== null || message !== null) && <Spacer/>}
                    {(error !== null || message !== null) && <Button onClick={() => {setError(null);setMessage(null)}} >X</Button>}
                </>
            )
        }
        return(
            <Flex backgroundColor='red'>
                {(error !== null || message !== null) && <DisplayErrorText/>}
            </Flex>
        )
    }
    return(<ErrorContext.Provider value={{errorHandle, DisplayError}}>
        {error !== null && mounted === false && <Heading backgroundColor='red' w='100%'>{error}</Heading>}
        {children}
    </ErrorContext.Provider>)
}

export const useErrorContext = () => useContext(ErrorContext)



