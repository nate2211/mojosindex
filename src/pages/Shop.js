import {Link, useNavigate, useParams} from "react-router-dom";
import {SideBar} from "../components/Sidebar";
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Flex,
    Heading,
    Image,
    Input,
    InputGroup, InputLeftElement, InputRightElement,
    Wrap,
    WrapItem
} from "@chakra-ui/react";
import {useQuery} from "react-query";
import axios from "axios";
import {SuspenseElement} from "../ui/Suspense";
import {Helmet} from "react-helmet-async";
import {BiSearchAlt} from "react-icons/bi";
import React, {useRef, useState} from "react";
;

export function Shop(){
    const {id} = useParams()

    const ShopPage = () => {

        const {isLoading, isError, isSuccess, error, data} = useQuery('shop', () =>
            axios.get(id !== undefined ?`https://mojos.herokuapp.com/api/variants/?site=Mojos%20Index${id}`:`https://mojos.herokuapp.com/api/variants/?site=Mojos%20Index`).then((res) => res.data))

        return(
            <SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
                <ShopElement/>
            </SuspenseElement>
        )

    }
    return (<Box><ShopPage/></Box>)
}

const ShopElement = ({data}) => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("")

    function filter(){
        if(search=== "") {
            return data
        }
        else {
            return data.filter((variant) => variant.name.includes(search))
        }
    }

    return(<Flex flexDirection="column">
        <Helmet>
            <title>Mojos Index Shop</title>
            <meta
                name="Mojos Index Shop"
                content="Ecommerce site selling Home&Living goods. Canvas prints (framed and unframed), posters (framed and unframed), towels, pillows, tote bags, puzzles.Our designs our curated and belong to various categories such as Astrology, Space, Crystals and more."
            />
            <link rel="canonical" href={window.location}/>
        </Helmet>
        <SideBar/>
        <form>
            <InputGroup>
                <Input type='text' onChange={(e) => setSearch(e.target.value)}/>
                <InputRightElement
                    pointerEvents='none'
                    children={<BiSearchAlt color='gray.300' />}
                />
            </InputGroup>
        </form>
        <Wrap justify='center'>
            {filter(data).map((variant, i) => {
                return(
                    <WrapItem key={i}>
                        <Card>
                            <CardHeader><Heading>{variant.name}</Heading></CardHeader>
                            <CardBody>
                                <Image onClick={() => navigate(`/product/${variant.product}&${variant.index}`)} src={`https://res.cloudinary.com/hsdvgholu/${variant.image}`}  boxSize={['xs', 'sm', 'md', 'lg']} alt={`${variant.name} ${variant.producttype}`}/>
                            </CardBody>
                        </Card>
                    </WrapItem>
                )
            })}
        </Wrap>
    </Flex>)
}