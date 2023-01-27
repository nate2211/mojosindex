
import {Grid} from "@chakra-ui/react";

export function Body({children}){
    return(
        <Grid
            h='80vh'
            style={{overflowY: "scroll", overflowX: "hidden", paddingBottom:"3.5rem"}}
        >
            {children}
        </Grid>
    )
}