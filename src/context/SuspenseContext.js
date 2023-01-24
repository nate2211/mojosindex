
import {Box, Spinner} from "@chakra-ui/react";
import React, {createContext, useContext, useEffect, useState} from "react";
import {useErrorContext} from "./ErrorContext";






const SuspenseContext = createContext()

export function SuspenseContextProvider({children}){
    const [loading, setLoading] = useState(false)
    const {error} = useErrorContext()

    useEffect(() => {
        if(error !== null){
            setLoading(false)
        }
    }, [error])


    const DisplaySuspense = () => {


        return(
            <Box w='100%' h='100%' backgroundColor='gainsboro.500' zIndex={6} position={"absolute"}>
                <Spinner style={{position: 'absolute', top: "50%", left: '50%'}}/>}
            </Box>
        )
    }
    return(<SuspenseContext.Provider value={{setLoading}}>
        {loading && <DisplaySuspense/>}
        {children}
    </SuspenseContext.Provider>)
}

export const useSuspenseContext = () => useContext(SuspenseContext)



