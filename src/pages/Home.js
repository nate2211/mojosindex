import React from "react";
import {
    WrapItem,
    Wrap, Heading, Box, Divider, Flex, Center, Text, Button, Stack, Container, CardBody, Card, CardHeader, CardFooter
} from "@chakra-ui/react";
import axios from "axios";
import {useQuery} from "react-query";
import {FeaturedCard, ProductCard} from "../components/Cards";
import {SuspenseElement} from "../ui/Suspense";
import {Helmet} from "react-helmet-async";
import {useNavigate} from "react-router-dom";

export function Home(){


    function HomeShowCase(){
        const {isLoading, isError, isSuccess, error, data} = useQuery('showcase', () =>
            axios.get('https://mojos.herokuapp.com/api/products/?site=Mojos%20Index&showcase=True').then((res) => res.data))
        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <ShowCase/>
            </SuspenseElement>
        )
    }

    function HomeFeatured(){
        const {isLoading, isError, isSuccess, error, data} = useQuery('featured', () =>
            axios.get('https://mojos.herokuapp.com/api/products/?site=Mojos%20Index&featured=True').then((res) => res.data))
        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <Featured/>
            </SuspenseElement>
        )
    }

    return(
        <Box>
            <Helmet>
                <title>Mojos Index Home</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
                <link rel="canonical" href={window.location}/>
            </Helmet>
            <HomeFeatured/>
            <HomeShowCase/>
        </Box>)
}



const Featured = ({data}) => {
    return(
        <Box  w='fit-content' m='auto'>
            <Heading>Featured</Heading>
            <Divider mt={4} mb={4}/>
            <Wrap justify='center'>
            {data.map((item, i) => {
                return(
                    <WrapItem key={i}>
                        <Box bgImage={`url(https://res.cloudinary.com/hsdvgholu/${item.background})`} w='100%' backgroundSize='75%'>
                            <Container backgroundColor='white'><Heading>{item.title}</Heading></Container>
                            <Divider/>
                            <FeaturedCard variants={item.variants}/>
                        </Box>
                        <Divider mt={4} mb={4}/>
                    </WrapItem>
                )
            })}
            </Wrap>
        </Box>

    )
}

const ShowCase = ({data}) => {
    const navigate = useNavigate()
    return(
        <Box w='fit-content' m='auto'>
            <Heading>Showcase</Heading>
            <Divider mt={4} mb={4}/>
            {data.map((item, i) => {
                return(
                    <React.Fragment key={i}>
                        <Box bgImage={`url(https://res.cloudinary.com/hsdvgholu/${item.background})`} w='100%' backgroundSize='75%'>
                            <Heading>{item.title}</Heading>
                            <Divider/>
                            <Wrap justify='center'>
                                <WrapItem>
                                    <Stack m='auto'>
                                        <Card w='15.5rem' m='.25rem'  backgroundColor='whiteAlpha.900'>
                                            <CardHeader><Heading>{item.type}</Heading></CardHeader>
                                            <CardBody>
                                                <Text w='25rem' as='b'>{item.desc}</Text>
                                            </CardBody>
                                            <CardFooter>
                                                <Button onClick={() => navigate(`shop/&type=${item.type}`)} w='25rem'>View All</Button>
                                            </CardFooter>
                                        </Card>
                                    </Stack>
                                </WrapItem>

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