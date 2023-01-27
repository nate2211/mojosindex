
import {Grid} from "@chakra-ui/react";

export function Body({children}){
    return(
        <Grid
            position='relative'
            h='80vh'
            style={{overflowY: "scroll", overflowX: "hidden"}}
        >
            {children}
        </Grid>
    )
}