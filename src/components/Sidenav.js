import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Text, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerCloseButton, DrawerHeader, List, ListItem, Accordion, AccordionPanel, AccordionButton, AccordionItem, AccordionIcon, Box} from "@chakra-ui/react";
import {useAuthContext} from "../context/AuthContext";
import {AiOutlineMenu} from "react-icons/ai";
import {useErrorContext} from "../context/ErrorContext";

export function SideNav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const {user} = useAuthContext()
    const navigate = useNavigate()

    const SideLink = ({to, children}) => {
        function onClick() {
            onClose()
            navigate(to)
        }
        return(
            <Text onClick={() => onClick()}>{children}</Text>
        )
    }

    return (
        <>
            <Button ref={btnRef} colorScheme='white' onClick={onOpen}>
                <AiOutlineMenu size={55}/>

            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader><SideLink to={"/"}>Mojos-Index</SideLink></DrawerHeader>

                    <DrawerBody>
                        <List>
                            <ListItem>
                                <Accordion allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Shop
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>

                                            <Accordion allowMultiple>
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box textAlign='left' flex='1'>
                                                                <SideLink to={"/shop/"}>All</SideLink>
                                                            </Box>
                                                        </AccordionButton>
                                                    </h2>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box flex='1' textAlign='left'>
                                                                Home&Living
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <List>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Canvas%20Print"}>Canvas Prints</SideLink>
                                                            </ListItem>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Thin%20Canvas%20Print"}>Thin Canvas Prints</SideLink>
                                                            </ListItem>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Framed%20Canvas%20Print"}>FramedCanvas Prints</SideLink>
                                                            </ListItem>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Framed%20Poster"}>Framed Posters</SideLink>
                                                            </ListItem>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Pillow"}>Pillows</SideLink>
                                                            </ListItem>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Throw%20Blanket"}>Throw Blankets</SideLink>
                                                            </ListItem>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Towel"}>Towels</SideLink>
                                                            </ListItem>
                                                        </List>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                                <AccordionItem>
                                                    <h2>
                                                        <AccordionButton>
                                                            <Box flex='1' textAlign='left'>
                                                                Accessories
                                                            </Box>
                                                            <AccordionIcon />
                                                        </AccordionButton>
                                                    </h2>
                                                    <AccordionPanel pb={4}>
                                                        <List>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Tote%20Bag"}>Tote Bags</SideLink>
                                                            </ListItem>
                                                            <ListItem>
                                                                <SideLink to={"/shop/&producttype=Puzzle"}>Puzzles</SideLink>
                                                            </ListItem>

                                                        </List>
                                                    </AccordionPanel>
                                                </AccordionItem>
                                            </Accordion>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </ListItem>
                            <ListItem>
                                <Accordion allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    About
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <List>
                                                <ListItem>
                                                    <SideLink to={"/faq"}>Faq</SideLink>
                                                </ListItem>
                                                <ListItem>
                                                    <SideLink to={"/returnfaq"}>Return</SideLink>
                                                </ListItem>
                                                <ListItem>
                                                    <SideLink to={"/shippingfaq"}>Shipping</SideLink>
                                                </ListItem>
                                                <ListItem>
                                                    <SideLink to={"/contact"}>Contact</SideLink>
                                                </ListItem>
                                                <ListItem>
                                                    <SideLink to={"/aboutus"}>About Us</SideLink>
                                                </ListItem>
                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </ListItem>
                            <ListItem>
                                <Accordion allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Policies
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <List>
                                                <ListItem>
                                                    <SideLink to={"/privacy"}>Privacy</SideLink>
                                                </ListItem>
                                                <ListItem>
                                                    <SideLink to={"/shipping"}>Shipping</SideLink>
                                                </ListItem>
                                                <ListItem>
                                                    <SideLink to={"/returns"}>Returns</SideLink>
                                                </ListItem>
                                                <ListItem>
                                                    <SideLink to={"/terms&conditions"}>Terms and Conditions</SideLink>
                                                </ListItem>
                                            </List>
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </ListItem>
                            <ListItem>
                                <Accordion allowMultiple>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Account
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {user === null ?
                                                <List>
                                                    <ListItem>
                                                        <SideLink to={"/signup"}>Signup</SideLink>
                                                    </ListItem>
                                                    <ListItem>
                                                        <SideLink to={"/login"}>Login</SideLink>
                                                    </ListItem>
                                                    <ListItem>
                                                        <SideLink to={"/forgetpassword"}>Forget Password</SideLink>
                                                    </ListItem>
                                                    <ListItem>
                                                        <SideLink to={"/orderlookup"}>Order Lookup</SideLink>
                                                    </ListItem>
                                                </List>:
                                                <List>
                                                    <ListItem>
                                                        <SideLink to={"/account"}>Account Information</SideLink>
                                                    </ListItem>
                                                    <ListItem>
                                                        <SideLink to={"/logout"}>Logout</SideLink>
                                                    </ListItem>
                                                </List>}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            </ListItem>
                        </List>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}