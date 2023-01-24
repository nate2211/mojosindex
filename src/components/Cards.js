import {
    Box,
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader, Divider,
    Flex,
    Heading,
    HStack, Image, List, ListItem, Text,
} from "@chakra-ui/react";
import React, {useState} from "react";
import {motion, useAnimationControls} from "framer-motion";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {useNavigate, useParams} from "react-router-dom";
import {Recommended, SelectedVariantList} from "../pages/Products";
import {ReviewModal} from "./Modals";
import {Helmet} from "react-helmet-async";


export const ProductCard = ({product}) => {
    const navigate = useNavigate()

    return(<Card  w='15.5rem' m='.25rem'  backgroundColor='whiteAlpha.900'>
        <CardHeader><Heading textOverflow='ellipsis' noOfLines={1} fontSize='xl'>{product.name}</Heading></CardHeader>
        <CardBody>
            <Image src={`https://res.cloudinary.com/hsdvgholu/${product.image}`} boxSize={[ "12.5rem"]}  alt={`${product.name} ${product.producttype}`}/>
        </CardBody>
        <CardFooter>
            <Button onClick={() => navigate(`product/${product.product}&${product.index}`)}>View</Button>
        </CardFooter>
    </Card>)
}


export const FullProductCard = ({data}) => {
    const [item, ] = useState(data[0])
    const {id} = useParams()

    return(
        <>
            <Helmet>
                <title>Mojos Index Product Page</title>
                <meta
                    name="Mojos Index product page"
                    content={`${item.desc}`}
                />
                <link rel="canonical" href={window.location}/>
            </Helmet>
            <Card w='100%'>
                <CardHeader><Heading>{item.title}</Heading></CardHeader>
                <CardBody>
                    <SelectedVariantList product={item} vid={parseInt(id.slice(id.indexOf('&')+1))}/>
                </CardBody>
            </Card>
            <Divider mt={2} mb={2}/>
            <Card w='100%'>
                <CardHeader><Heading>Recommended</Heading></CardHeader>
                <CardBody>
                    <Recommended item={item}/>
                </CardBody>
            </Card>
        </>
    )
}


export const FeaturedCard = ({variants}) => {
    const [current, setCurrent] = useState(0)
    const controls = useAnimationControls()
    let animation = {
        left: {translateX: -255 + current},
        right: {translateX: 255 + current}
    }
    function right(){
        if(current > -((variants.length - 1) * 255)) {
            setCurrent((prev) => prev + -255)
            controls.start('left')
        }
    }
    function left(){
        if(current < 0) {
            setCurrent((prev) => prev + 255)
            controls.start('right')
        }
    }
    return(
        <HStack w='22rem'>
            <Button onClick={() => left()}><AiOutlineArrowLeft/></Button>
            <Box overflow='hidden'>
                <motion.div animate={controls} variants={animation}>
                    <Flex w={`${100 * variants.length}%`}>
                        {variants.map((variant, i) => {
                            return(
                                <ProductCard product={variant} key={i}/>
                            )
                        })}
                    </Flex>
                </motion.div>
            </Box>
            <Button onClick={() => right()}><AiOutlineArrowRight/></Button>
        </HStack>
    )
}


export function OrderCard({item}){

    return(
        <Card>
            <Text>Order Name: {item.order_name}</Text>
            <Text>Order ID: {item.order_id}</Text>
            <Text>Status: {item.status}</Text>
            <Text textAlign='center'>Products</Text>
            <List>
            {item.products.map((item, i) => {
                return(
                    <ListItem key={i}>
                        <Flex
                            w="100%"
                            alignItems='center'
                        >
                            <Box w='30%'>
                                <Text>{item.item.title}</Text>
                            </Box>
                            <Box w='30%'>
                                <Image src={`https://res.cloudinary.com/hsdvgholu/${item.item.image}`} boxSize={'4.50em'} alt={`Order ${item.item.title} `}/>
                            </Box>
                            <Box w='30%'>
                                <Text>${item.value.price * item.value.quantity}</Text>
                            </Box>
                            <Box w='9%'>
                                <Text textAlign='center'>x{item.value.quantity}</Text>
                            </Box>
                        </Flex>
                    </ListItem>)
            })}
            </List>
            <Text textAlign='center'>Address</Text>
            <HStack>
                <Text>Street Address: {item.address.street_address}</Text>
                <Text>Apt: {item.address.apt}</Text>
                <Text>Zip: {item.address.zip}</Text>
            </HStack>
            <HStack>
                <Text>City: {item.address.city}</Text>
                <Text>State: {item.address.state}</Text>
                <Text>Country: {item.address.country}</Text>
            </HStack>
            <ReviewModal variants={item.products.map((item) => item.item)} index={0}/>
        </Card>
    )
}