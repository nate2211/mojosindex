
import {Container, Grid, Box, Flex, Spacer} from "@chakra-ui/react";

export function Body({children}){
    return(
        <Grid
            position='fixed' w='100%' top='10vh' bot='10vh'
            h='80vh'
            style={{overflowY: "scroll", overflowX: "hidden"}}

        >
            {children}
            <Box p='4' h='4.5rem'>
            </Box>
        </Grid>
    )
}