
import {Grid} from "@chakra-ui/react";

export function Body({children}){
    return(
        <Grid
            position='fixed' bottom='10vh' top='10vh'
            h='80vh'
            style={{overflowY: "scroll", overflowX: "hidden"}}
        >
            {children}
        </Grid>
    )
}