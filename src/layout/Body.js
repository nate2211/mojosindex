
import {Grid} from "@chakra-ui/react";

export function Body({children}){
    return(
        <Grid
            position='fixed' top='10vh' bottom='10vh' w='100%'
            h='80vh'
            style={{overflowY: "scroll", overflowX: "hidden"}}
        >
            {children}
        </Grid>
    )
}