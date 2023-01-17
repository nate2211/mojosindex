import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, useDisclosure, Drawer, DrawerContent, DrawerOverlay, DrawerCloseButton, DrawerHeader, DrawerBody, List, ListItem, Flex, Box, Text, Image} from "@chakra-ui/react";
import {BsFillCartFill} from "react-icons/bs";
import {useCartContext} from "../context/CartContext";

export function SideCart() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const navigate = useNavigate()
    const {cart, totalCart} = useCartContext()

    function onClick(){
        onClose()
        navigate("/checkout")
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
                                                <Image src={`http://127.0.0.1:8000${item.item.image}`} boxSize={'4.50em'}/>
                                            </Box>
                                            <Box w='30%'>
                                                <Text>${item.value.price}</Text>
                                            </Box>
                                            <Box w='9%'>
                                                <Text>x{item.value.quantity}</Text>
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