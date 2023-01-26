import React, {memo, useEffect} from "react";
import {Alert, AlertIcon, Spinner} from "@chakra-ui/react";

export const SuspenseElement = ({isLoading, isError, isSuccess, error, children, data}) => {
    const childrenArray = React.Children.toArray(children)

    function DataIsEqual(prev,next){
        return JSON.stringify(prev) === JSON.stringify(next)
    }
    const Helper = memo(function Helper({data}){
        return(<>{childrenArray.map((child) => React.cloneElement(child, {data: data}))}</>)
    }, DataIsEqual)

    return(
        <>
            {isLoading && !isError && <Spinner style={{position: 'absolute', top: "50%", left: '50%'}}/>}
            {isError && <Alert status='error'><AlertIcon />{error.message}</Alert>}
            {isSuccess && <Helper data={data}/>}
        </>

    )
}

