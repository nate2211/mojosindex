import {SuspenseElement} from "../ui/Suspense";
import {useQuery} from "react-query";
import axios from "axios";
import {
    Accordion, AccordionButton, AccordionItem, AccordionPanel,
    Box, Button,
    Card,
    CardBody,
    CardHeader, Center,
    Container,
    Heading,
    Image,
    List,
    ListItem, Text,
    Wrap,
    WrapItem,
    AccordionIcon, Tooltip, Flex, VStack, HStack, Divider, CardFooter, Checkbox
} from "@chakra-ui/react";
import {useNavigate, useParams} from "react-router-dom";
import {React, useEffect, useState} from "react";
import {useCartContext} from "../context/CartContext";
import {BarReview} from "../components/Rating";
import {ReviewItems} from "../ui/Pagination";
import {FullProductCard} from "../components/Cards";
import {useAuthContext} from "../context/AuthContext";
import {ReviewModal} from "../components/Modals";
import {ImageMagnifier} from "../components/Imagemagnify";




export function Product(){
    const {id} = useParams()
    const ProductCard = () => {
        const {isLoading, isError, isSuccess, error, data} = useQuery(['product', id], () =>
            axios.get(`https://mojos.herokuapp.com/api/products/?site=Mojos%20Index&id=${id.slice(0, id.indexOf('&'))}`).then((res) => res.data))
        return(<SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
            <FullProductCard/>
        </SuspenseElement> )
    }
    return(<Container centerContent>

        <ProductCard/>
    </Container>)
}


export const Recommended = ({item}) => {



    const RecommendedItems = ({data}) => {
        const navigate = useNavigate()
        return(
            <Flex justify='center' flexDirection='column' alignItems='center'>
                {data.slice(0,6).map((variant, i) => {
                    return (
                            <Card m='2' key={i}>
                                <CardHeader><Heading textOverflow={"ellipsis"}>{variant.name}</Heading></CardHeader>
                                <CardBody><Image src={`https://mojos.herokuapp.com${variant.image}`} boxSize={[ "12.5rem"]} alt={`${variant.name} ${variant.producttype}`}/></CardBody>
                                <CardFooter><Button onClick={() => navigate(`/product/${variant.product}&${variant.index}`)}>View</Button></CardFooter>
                            </Card>
                    )
                })}
            </Flex>)
    }
    const RecommendedQuery = () => {
        const {isLoading, isError, isSuccess, error, data} = useQuery('recommended', () =>
            axios.post(`https://mojos.herokuapp.com/api/variants/recommended/`, {payload: {"producttype":  item.variants[0].producttype} , id: {"product": item.variants[0].product}}).then((res) => res.data))
        return(<SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
            <RecommendedItems/>
        </SuspenseElement> )
    }

    return(
            <RecommendedQuery/>
    )
}



export const SelectedVariantList = ({product, vid}) => {
    const [index, setIndex] = useState(vid)
    const variants = product.variants
    const {addCart} = useCartContext()
    const {user, addwishlist} = useAuthContext()
    function addToCart(){
        let obj = Object.assign({"title": product.title, "index": product.index}, product.variants[index])
        addCart({item: obj, value: {price: product.variants[index].price, quantity: 1}})
    }

    return(
        <>
            <ImageMagnifier>
                <Image src={`https://res.cloudinary.com/hsdvgholu/${variants[index].image}`} boxSize={['18em']} m='auto' alt={`${variants[index].name}`}/>
            </ImageMagnifier>
            <Wrap justify='center'>
                {[].concat(variants.slice(0,index), variants.slice(index + 1)).map((variant, i) => {
                    return(
                        <WrapItem key={i}>
                            <Image src={`https://res.cloudinary.com/hsdvgholu/${variant.image}`} boxSize={['5.50em', '7.50em']} onClick={() => setIndex(variant.index)} alt={`${variants.name}`}/>
                        </WrapItem>)
                })}
            </Wrap>
            <Accordion allowMultiple>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Product Description
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Text>{product.desc}</Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Product Points
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <List listStyleType='circle'>
                            {variants[index].points.split("\n").map((point, i  ) => {
                                return (<ListItem key={i}><Text>{point}</Text></ListItem>)

                            })}

                        </List>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Product Details
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <List>
                            <ListItem>
                                <Text>Name: {variants[index].name}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Type: {product.type}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Color : {variants[index].color}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Subtype: {product.subtype}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Size: {variants[index].size}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Set: {product.set}</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Product type: {variants[index].producttype}</Text>
                            </ListItem>

                        </List>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex='1' textAlign='left'>
                                Product Reviews
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <ReviewPanel product={product} index={index} />

                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Center m='2'><Button onClick={()=> addToCart()}>Add to Cart ${variants[index].price}</Button></Center>
            {user !== null && <Center m='2'><Button onClick={()=> addwishlist(variants[index])}>Add to Wishlist</Button></Center>}
        </>
    )
}


const ReviewPanel = ({product, index}) => {
    const variants = product.variants
    const [filter, setFilter] = useState(null)
    const [reviews, setReviews] = useState(product.reviews.filter((el) => el.variant.name === variants[index].name))

    useEffect(() => {
        setReviews(product.reviews.filter((el) => el.variant.name === variants[index].name))
    }, [index])
    useEffect(() => {
        if(filter !== null) {
            setReviews(product.reviews.filter((el) => el.variant.name === variants[index].name).filter((el) => el.rating === filter))
        }
        if(filter === null){
            setReviews(product.reviews.filter((el) => el.variant.name === variants[index].name))
        }
    }, [filter])

    return(
        <Flex alignItems='center' justifyContent='center' flexDirection='column'>
            <ReviewModal variants={variants} index={index}/>
            <Flex alignItems='center' justifyContent='space-evenly' w='15em'>
                <Box>
                    <Image src={`https://res.cloudinary.com/hsdvgholu/${variants[index].image}`} boxSize={'4.50em'} alt={`${variants[index].name}`}/>
                </Box>
                <Box>
                    <BarReview rating={variants[index].review_average}/>
                </Box>
                <Box>
                    <Tooltip label='Review Average'><Text>{Number((variants[index].review_average).toFixed(2))}</Text></Tooltip>
                </Box>
                <Box>
                    <Tooltip label='Review Count'><Text>({variants[index].review_count})</Text></Tooltip>
                </Box>
            </Flex>
            {variants[index].parsed_reviews.map((value, i) => {
                const sum = variants[index].parsed_reviews.reduce((a,b) => a + b)
                return(
                    <Flex key={i} alignItems='center' w='100%' justifyContent='space-evenly'>
                        <Box>
                            <Text w='4.50em'>{i+1} Star</Text>
                        </Box>
                        <Center>
                            <Checkbox onChange={() => filter !== i+1 ? setFilter(i+1): setFilter(null)} isChecked={filter === i+1}/>
                        </Center>
                        <Box>
                            <BarReview rating={value} sum={sum}/>
                        </Box>
                        <Box >
                            <Tooltip label='Review Count'><Text w='4.50em' textAlign='center' >({value})</Text></Tooltip>
                        </Box>
                    </Flex>
                )
            })}
            <ReviewItems reviews={reviews}/>
        </Flex>
    )
}