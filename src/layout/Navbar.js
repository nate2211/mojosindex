import {Link} from "react-router-dom";
import {Center, Grid, GridItem, Heading} from "@chakra-ui/react";
import {SideNav} from "../components/Sidenav";
import {SideCart} from "../components/Sidecart";
import {useErrorContext} from "../context/ErrorContext";

export function NavBar(){

    return(
        <>
            <Grid h='10vh' templateColumns='repeat(5, 1fr)' gap={0}>
                <GridItem colSpan={2} h='100%' bg='gray.900'>
                    <Center h='100%'>
                        <SideNav/>
                    </Center>
                </GridItem>
                <GridItem colSpan={1} h='100%' bg='gray.900'>
                    <Center h='100%'>
                        <Link to={"/"}><Heading color='whitesmoke'>Mojos Index</Heading></Link>
                    </Center>
                </GridItem>
                <GridItem colStart={4} colEnd={6} h='100%' bg='gray.900'>
                    <Center h='100%'>
                        <SideCart/>
                    </Center>
                </GridItem>
            </Grid>
        </>
    )
}