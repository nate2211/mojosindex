import React from "react";
import {
    WrapItem,
    Wrap, Heading,  Box,Divider
} from "@chakra-ui/react";
import axios from "axios";
import {useQuery} from "react-query";
import {FeaturedCard, ProductCard} from "../components/Cards";
import {SuspenseElement} from "../ui/Suspense";
import {Helmet} from "react-helmet-async";

export function Home(){


    function HomeShowCase(){
        const {isLoading, isError, isSuccess, error, data} = useQuery('showcase', () =>
            axios.get('http://127.0.0.1:8000/api/products/?site=Mojos%20Index&showcase=True').then((res) => res.data))
        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <ShowCase/>
            </SuspenseElement>
        )
    }

    function HomeFeatured(){
        const {isLoading, isError, isSuccess, error, data} = useQuery('featured', () =>
            axios.get('http://127.0.0.1:8000/api/products/?site=Mojos%20Index&featured=True').then((res) => res.data))
        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <Featured/>
            </SuspenseElement>
        )
    }

    return(
        <Box>
            <Helmet>
                <title>Mojos Index</title>
                <meta
                    name="Mojos Index home"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            <HomeFeatured/>
            <HomeShowCase/>
        </Box>)
}



const Featured = ({data}) => {
    return(
        <Box w='fit-content' m='auto'>
            <Heading>Featured</Heading>
            <Divider mt={4} mb={4}/>
            {data.map((item, i) => {
                return(
                    <React.Fragment key={i}>
                        <Box bgImage={`url(http://127.0.0.1:8000${item.background})`} w='100%' backgroundSize='75%'>
                            <Heading>{item.title}</Heading>
                            <Divider/>
                            <FeaturedCard variants={item.variants}/>
                        </Box>
                        <Divider mt={4} mb={4}/>
                    </React.Fragment>
                )
            })}
        </Box>

    )
}

const ShowCase = ({data}) => {

    return(
        <Box w='fit-content' m='auto'>
            <Heading>Showcase</Heading>
            <Divider mt={4} mb={4}/>
            {data.map((item, i) => {
                return(
                    <React.Fragment key={i}>
                        <Box bgImage={`url(http://127.0.0.1:8000${item.background})`} w='100%' backgroundSize='75%'>
                            <Heading>{item.title}</Heading>
                            <Divider/>
                            <Wrap justify='center'>
                                {item.variants.map((variant, i) => {
                                    return(<WrapItem key={i}>
                                        <ProductCard product={variant}/>
                                    </WrapItem>)
                                })}
                            </Wrap>
                        </Box>
                        <Divider mt={4} mb={4}/>
                    </React.Fragment>
                )
            })}
        </Box>
    )
}