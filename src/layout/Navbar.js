import {Link} from "react-router-dom";
import {Center, Grid, GridItem, Heading} from "@chakra-ui/react";
import {SideNav} from "../components/Sidenav";
import {SideCart} from "../components/Sidecart";

export function NavBar(){

    return(
        <Grid h='10vh' templateColumns='repeat(5, 1fr)' gap={0} zIndex={4} w='100%'  bg='lightpink'>
            <GridItem colSpan={2} h='100%'>
                <Center h='100%'>
                    <SideNav/>
                </Center>
            </GridItem>
            <GridItem colSpan={1} h='100%'>
                <Center h='100%'>
                    <Link to={"/"}><Heading color='whitesmoke' textAlign='center' fontSize={['2xl', '3x1']}>Mojos Index</Heading></Link>
                </Center>
            </GridItem>
            <GridItem colStart={4} colEnd={6} h='100%'>
                <Center h='100%'>
                    <SideCart/>
                </Center>
            </GridItem>
        </Grid>
    )
}