import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, useDisclosure, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, List, ListItem, Flex, Box, Text, Image} from "@chakra-ui/react";
import {BsFillCartFill} from "react-icons/bs";
import {useCartContext} from "../context/CartContext";
import {useErrorContext} from "../context/ErrorContext";

export function SideCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()
    const {cart, totalCart, removeCart} = useCartContext()
    const {errorHandle} = useErrorContext()
    function onClick(){
        onClose()
        if(cart.length  !== 0) {
            navigate("/checkout")
        }else{
            errorHandle("Cart is empty")
        }
    }

    return (
        <>
            <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
                <BsFillCartFill size={55}/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Cart</DrawerHeader>

                    <DrawerBody>
                        <List>
                            {cart.map((item, i) => {
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
                                                <Image src={`https://res.cloudinary.com/hsdvgholu/${item.item.image}`} boxSize={'4.50em'} alt={`Cart ${item.item.title}`}/>
                                            </Box>
                                            <Box w='21%'>
                                                <Text>${item.value.price}</Text>
                                            </Box>
                                            <Box w='9%'>
                                                <Text>x{item.value.quantity}</Text>
                                            </Box>
                                            <Box w='9%'>
                                                <Button onClick={() => removeCart(item)}>X</Button>
                                            </Box>
                                        </Flex>
                                    </ListItem>)
                            })}
                        </List>
                        <Text>Total: ${totalCart()}</Text>
                        <Button onClick={() => onClick()}>Pay</Button>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}