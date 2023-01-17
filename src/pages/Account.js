import React, {useEffect, useRef, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    List,
    ListItem,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    PopoverArrow,
    Select,
    Text,
    Tooltip,
    VStack,
    Image,
    Stack,
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    FormErrorMessage
} from "@chakra-ui/react";
import {AiOutlineMinus} from "react-icons/ai";
import states from "../res/states.json";
import {SelectedStarRating} from "../components/Rating";
import {AddressModal, ChangePasswordModal, DeletePasswordModal} from "../components/Modals";
import {OrderItems, PaginatedItems, ReviewItems, WishListItems} from "../ui/Pagination";
import {BsArrowDown, BsArrowUp} from "react-icons/bs";
import {OrderCard} from "../components/Cards";
import axios from "axios";
import {useQuery} from "react-query";
import {shippingTax} from "../redux/checkoutSlice";
import {SuspenseElement} from "../ui/Suspense";
import {Helmet} from "react-helmet-async";

export function Account(){
    const {user, updateAccount, updateAddress, removeAddress, refreshAccount} = useAuthContext()
    const navigate = useNavigate()



    function UserDisplay(){
        const [disabled, setDisabled] = useState(true)
        const username = useRef()
        const email = useRef()
        const number = useRef()
        const firstname = useRef()
        const lastname = useRef()
        const emailupdate = useRef()

        function onSubmit(e){
            e.preventDefault()
            updateAccount({username: username.current.value, email: email.current.value, number: number.current.value, first_name: firstname.current.value, last_name: lastname.current.value, email_updates: emailupdate.current.checked})
        }

        return(
            <form  onSubmit={(e) => onSubmit(e) } >
                <Stack spacing={2}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type='text' defaultValue={user.user.username} disabled={disabled} ref={username} maxLength="20" minLength="2"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' defaultValue={user.user.email} disabled={disabled} ref={email}  maxLength="50"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Phone Number</FormLabel>
                        <Input type='number' maxLength={10} minLength={10} defaultValue={user.number} disabled={disabled} ref={number}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input type='text' defaultValue={user.user.first_name} disabled={disabled} ref={firstname} maxLength="20" minLength="2"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input type='text' defaultValue={user.user.last_name} disabled={disabled} ref={lastname} maxLength="20" minLength="2"/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email Updates</FormLabel>
                        <Checkbox defaultChecked={user.email_updates} disabled={disabled} ref={emailupdate} />
                    </FormControl>
                    <FormControl>
                        {disabled ? <Tooltip label="Update Information"><Button onClick={() => setDisabled(false)}>Update</Button></Tooltip>:
                            <Button type='submit'>Save</Button>}
                    </FormControl>
                    <ChangePasswordModal/>
                    <DeletePasswordModal/>
                    <Divider/>
                </Stack>
            </form>
        )
    }


    function AddressDisplay({address, i}){
        const [disabled, setDisabled] = useState(true)
        const streetaddress = useRef()
        const apt = useRef()
        const city = useRef()
        const zip = useRef()
        const state = useRef()
        const country= useRef()
        return(
            <form>
                <Stack spacing={2}>
                    <FormControl>
                        <FormLabel >Address {i + 1}</FormLabel>
                        <Input type="address" placeholder='Street Address' required defaultValue={address.street_address} disabled={disabled} ref={streetaddress} maxLength="30" minLength="2"/>
                    </FormControl>
                    <Flex>
                        <FormControl mr={2}>
                            <FormLabel>City</FormLabel>
                            <Input type="text" placeholder='City' required defaultValue={address.city} disabled={disabled} ref={city} maxLength="20" minLength="2"/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Zip</FormLabel>
                            <Input type="text" placeholder='Zip' required defaultValue={address.zip} disabled={disabled} ref={zip} maxLength="20" minLength="2"/>
                        </FormControl>
                    </Flex>
                    <Flex>
                        <FormControl mr={2}>
                            <FormLabel >Apt</FormLabel>
                            <Input type="number"  placeholder='Apt #' defaultValue={address.apt} disabled={disabled} ref={apt} maxLength="6"/>
                        </FormControl>
                        <FormControl mr={2}>
                            <FormLabel>State</FormLabel>
                            <Select placeholder={"Select State"} defaultValue={address.state} disabled={disabled} ref={state} required>
                                {states.map((state, i) => {
                                    return(<option key={i} value={state.abbreviation}>{state.abbreviation}</option>)
                                })}
                            </Select>
                        </FormControl>
                        <FormControl mr={2}>
                            <FormLabel>Country</FormLabel>
                            <Input type="text" value={address.country} disabled={true} ref={country}/>
                        </FormControl>
                    </Flex>
                    <FormControl>
                        {!disabled &&
                            <Flex justify='center'>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button><AiOutlineMinus/></Button>
                                    </PopoverTrigger>
                                    <Portal>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverHeader>Remove Address Are You Sure</PopoverHeader>
                                            <PopoverCloseButton />
                                            <PopoverBody>
                                                <Button onClick={() => removeAddress(address.id)}>Remove</Button>
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Portal>
                                </Popover>
                                <Button onClick={() => setDisabled(true)}>Cancel</Button>
                            </Flex>
                        }
                    </FormControl>
                    <FormControl>
                        {disabled ? <Tooltip label="Update Address"><Button onClick={() => setDisabled(false)}>Update</Button></Tooltip>:
                            <Button onClick={(e) => updateAddress(
                                address.id, {street_address: streetaddress.current.value, state: state.current.value, zip: zip.current.value, city: city.current.value ,apt: apt.current.value}
                            )}>Save</Button>}
                    </FormControl>
                </Stack>
            </form>)
    }

    return(
        <Container>
            <Helmet>
                <title>Mojos Index Account</title>
                <meta
                    name="Mojos Index account"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            <Accordion allowMultiple>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Heading textAlign={'center'}>Account Information</Heading>
                        </Box>
                    <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                        <Divider mt={4} mb={4}/>
                        <UserDisplay user={user}/>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Heading textAlign={'center'}>Shipping Addresses</Heading>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                        <Divider mt={4} mb={4}/>
                        {user.address === null ? <Text>No Shipping Address</Text>:
                            <List>
                                {user.address.map((address, i) => {
                                    return(<ListItem key={i} p='1rem'>
                                        <AddressDisplay address={address} i={i}/>
                                    </ListItem>)
                                })}
                            </List>
                        }
                        <AddressModal/>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Heading textAlign={'center'}>Wishlist</Heading>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                <AccordionPanel>
                    <Divider mt={4} mb={4}/>
                    {user.wishlist.length === 0? <Text>Wishlist is Empty</Text>:
                        <WishListItems wishlist={user.wishlist}/>}
                </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Heading textAlign={'center'}>Purchases</Heading>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                        <Divider mt={4} mb={4}/>
                        {user.order.length === 0? <Text>No Purchases</Text>:
                            <OrderItems order={user.order}/>
                        }
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            <Heading textAlign={'center'}>Reviews</Heading>
                        </Box>
                        <AccordionIcon/>
                    </AccordionButton>
                    <AccordionPanel>
                        <Divider mt={4} mb={4}/>
                        {user.reviews === null ? <Text>No Reviews</Text>:
                            <ReviewItems reviews={user.reviews} account={true}/>
                        }
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>)
}

export function OrderLookup(){
    const orderRef = useRef()
    const [show, setShow] = useState(false)

    function onSubmit(e){
        e.preventDefault()
        setShow(true)
    }

    const OrderDisplay = () => {
        const {isLoading, isError, error, data, isSuccess} = useQuery('orderlookup', () => axios.get(`http://127.0.0.1:8000/api/orders/${orderRef.current.value}/`).then((r) => r.data))
        return(<SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
            <OrderCard item={data}/>
        </SuspenseElement> )
    }


    return(<Container>
        <Helmet>
            <title>Mojos Index Order Lookup</title>
            <meta
                name="Mojos Index order lookup"
                content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows. Use your order id sent to you by email to lookup your order
                if you do not have an account with us."
            />
        </Helmet>
        <Heading>Order Lookup</Heading>
        <Divider mt={4} mb={4}/>
        <form onSubmit={(e) => onSubmit(e)}>
            <Stack spacing={2}>
                <Input type='text' ref={orderRef} placeholder='Order Lookup'/>
                <Button type='submit'>Lookup</Button>
            </Stack>
        </form>
        {show && <OrderDisplay/>}
    </Container>)
}

export function ForgetPassword(){
    const {forgetPassword} = useAuthContext()
    const email = useRef()
    const {id} = useParams()
    function onSubmit(e) {
        e.preventDefault()
        forgetPassword(email.current.value)
    }

    function ForgetPasswordDisplay() {
        const [password, setPassword] = useState("")
        const [confirmPassword, setconfirmPassword] = useState("")
        const {changePassword} = useAuthContext()

        function onSubmit(e) {
            e.preventDefault()
            if (password === confirmPassword) {
                changePassword(password, id)
            }
        }

        const isError = password !== confirmPassword
        return (
            <Container>
                <Card>
                    <CardHeader><Heading>Forget Password</Heading></CardHeader>
                    <Divider mt={4} mb={4}/>
                    <CardBody>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <Stack spacing={2}>
                                <Input type='password' placeholder='Password'
                                       onChange={(e) => setPassword(e.target.value)} required maxLength={20}/>
                                <Input type='password' placeholder='Confirm Password'
                                       onChange={(e) => setconfirmPassword(e.target.value)} required maxLength={20}/>
                                <FormControl isInvalid={isError}>
                                    {isError && <FormErrorMessage>Password and confirm password are not the
                                        same</FormErrorMessage>}
                                </FormControl>
                                <Button type='submit'>Submit</Button>
                            </Stack>
                        </form>
                    </CardBody>
                </Card>
            </Container>
        )
    }

    return (
        <Container>
            <Helmet>
                <title>Mojos Index Forget Password</title>
                <meta
                    name="Mojos Index forget"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            {id ? <ForgetPasswordDisplay/>:
            <Card>
                <CardHeader><Heading>Forget Password</Heading></CardHeader>
                <Divider mt={4} mb={4}/>
                <CardBody>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Stack spacing={2}>
                            <Input type='text' ref={email} placeholder='Email'/>
                            <Button type='submit'>Submit</Button>
                        </Stack>
                    </form>
                </CardBody>
            </Card>}
        </Container>
    )
}