import React from "react";
import {
    WrapItem,
    Wrap,
    Heading,
    Box,
    Divider,
    Flex,
    Center,
    Text,
    Button,
    Stack,
    Container,
    CardBody,
    Card,
    CardHeader,
    CardFooter,
    Image, HStack, VStack
} from "@chakra-ui/react";
import axios from "axios";
import {useQuery} from "react-query";
import {FeaturedCard, ProductCard} from "../components/Cards";
import {SuspenseElement} from "../ui/Suspense";
import {Helmet} from "react-helmet-async";
import {useNavigate} from "react-router-dom";
import thinCanvas from "../res/thin-canvas1.png";
import thinCanvas2 from "../res/thin-canvas2.png";
import {BoxOverlay} from "../ui/Overlay";
import {Link} from "react-router-dom"
export function Home(){


    function HomeShowCase(){
        const {isLoading, isError, isSuccess, error, data} = useQuery('showcase', () =>
            axios.get('https://mojos.herokuapp.com/api/products/?site=Mojos%20Index&showcase=True').then((res) => res.data))
        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <ShowCaseTemplate/>
            </SuspenseElement>
        )
    }

    function HomeFeatured(){
        const {isLoading, isError, isSuccess, error, data} = useQuery('featured', () =>
            axios.get('https://mojos.herokuapp.com/api/products/?site=Mojos%20Index&featured=True').then((res) => res.data))
        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <FeaturedTemplate/>
            </SuspenseElement>
        )
    }

    function HomeDetail(){
        const {isLoading, isError, isSuccess, error, data} = useQuery('detail', () =>
            axios.get('https://mojos.herokuapp.com/api/products/?site=Mojos%20Index&detail=True').then((res) => res.data))
        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <ProductDetail/>
            </SuspenseElement>
        )

    }
    function ProductDetail({data}){
        const navigate = useNavigate()
        return(
            <Box m='auto' w='fit-content'>
            <Heading>New Product: Thin Canvas Print</Heading>
            <Wrap flexDirection='row' justify='center'>
                <WrapItem>
                    <Image src={thinCanvas} boxSize={[ "20.5rem"]} m='1rem'/>
                </WrapItem>
                <WrapItem>
                    <Image src={thinCanvas2} boxSize={[ "20.5rem"]} m='1rem'/>
                </WrapItem>
                <WrapItem h='20.5rem' >
                    <VStack m='1rem'>
                    <Text w={[ "20.5rem"]}>Slim and trim Thin Canvases come ready to hang with an attached wall mount. The canvas is stretched over pine wood.
                        Slimmer then your regular canvas as well as cheaper this provides a high quality alternative to the traditional canvas print</Text>
                    <Button onClick={() => navigate("/shop/&producttype=Thin Canvas Print")}>View All</Button>
                    </VStack>
                </WrapItem>

                </Wrap>
            </Box>

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
            <ProductDetail/>
            <HomeFeatured/>
            <HomeShowCase/>
        </Box>)
}


const FeaturedTemplate = ({data}) => {
    return(
        <Box  w='fit-content' m='auto'>
            <Heading>Featured</Heading>
            <Divider mt={4} mb={4}/>
            <Flex flexDirection='column'>
                {data.map((item, i) => {
                    return(
                        <React.Fragment key={i}>
                            <Heading>{item.title}</Heading>
                            <Text textAlign='right' position='relative'><Link to={`/shop/&type=${item.type}`} style={{color: "blue"}}>View All {item.type} Prints >></Link></Text>
                            <Wrap key={i} justify='center'>
                                {item.variants.map((variant, i) => {
                                    return(
                                        <WrapItem key={i}>
                                            <Image src={`https://res.cloudinary.com/hsdvgholu/${variant.image}`} boxSize={[ "20.5rem"]} alt={`${variant.name} ${variant.producttype}`}/>
                                        </WrapItem>
                                    )
                                })}
                            </Wrap>
                        </React.Fragment>

                    )
                })}
            </Flex>
        </Box>
    )
}

const ShowCaseTemplate = ({data}) => {


    return(
        <Box w='fit-content' m='auto'>
            <Heading>Showcase</Heading>
            <Divider mt={4} mb={4}/>
            {data.map((item, i) => {
                return(
                    <React.Fragment key={i}>
                        <Heading>{item.title}</Heading>
                        <Text textAlign='right' position='relative'><Link to={`/product/${item.id}&0`} style={{color: "blue"}}>View {item.title} >></Link></Text>
                        <Wrap key={i} justify='center'>
                            <WrapItem boxSize={[ "20.5rem"]} ><Text textAlign='middle' m='auto'>{item.desc}</Text></WrapItem>
                            {item.variants.map((variant, i) => {
                                return(
                                    <WrapItem key={i}>
                                        <Image src={`https://res.cloudinary.com/hsdvgholu/${variant.image}`} boxSize={[ "20.5rem"]} alt={`${variant.name} ${variant.producttype}`}/>
                                    </WrapItem>
                                )
                            })}
                        </Wrap>
                    </React.Fragment>
                )
            })}
        </Box>
    )
}


const Featured = ({data}) => {
    return(
        <Box  w='fit-content' m='auto'>
            <Heading>Featured</Heading>
            <Divider mt={4} mb={4}/>
            <Flex flexDirection='column'>
            {data.map((item, i) => {
                return(
                    <Wrap justify='center' alignItems='center'>
                        {i % 2 !== 0  && <WrapItem key={i}>
                            <Box bgImage={`url(https://res.cloudinary.com/hsdvgholu/${item.background})`} w='100%' backgroundSize='75%'>
                            <Container backgroundColor='white'><Heading>{item.title}</Heading></Container>
                            <Divider/>
                            <FeaturedCard variants={item.variants}/>
                            </Box>
                            <Divider mt={4} mb={4}/>
                            </WrapItem>}
                        <WrapItem alignSelf='center'>
                            <BoxOverlay>
                                <Link to={`/shop/&type=${item.type}`}>{item.type}</Link>
                            </BoxOverlay>
                        </WrapItem>
                        <WrapItem alignSelf='center'>
                            <BoxOverlay>
                                <Link to={`/shop/&subtype=${item.subtype}`}>{item.subtype}</Link>
                            </BoxOverlay>
                        </WrapItem>
                        {i % 2 === 0 && <WrapItem key={i}>
                            <Box bgImage={`url(https://res.cloudinary.com/hsdvgholu/${item.background})`} w='100%' backgroundSize='75%'>
                                <Container backgroundColor='white'><Heading>{item.title}</Heading></Container>
                                <Divider/>
                                <FeaturedCard variants={item.variants}/>
                            </Box>
                            <Divider mt={4} mb={4}/>
                        </WrapItem>}
                    </Wrap>
                )
            })}
            </Flex>
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
                            <Heading backgroundColor='whiteAlpha.900'>{item.title}</Heading>
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