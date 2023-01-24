import {useAuthContext} from "../context/AuthContext";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader, Checkbox,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Heading, Image,
    Input, List, ListItem,
    Select, Spacer, Spinner, Stack, Text,
} from "@chakra-ui/react";
import React, {useEffect, useRef, useState} from "react";
import states from "../res/states.json";
import {useStripeContext} from "../context/StripeContext";
import {useCartContext} from "../context/CartContext";
import {CardElement, Elements, useElements, useStripe} from "@stripe/react-stripe-js";
import {BsArrowDown, BsArrowUp} from "react-icons/bs";
import {useQuery} from "react-query";
import {SuspenseElement} from "../ui/Suspense";
import axios from "axios";
import {
    checkoutAddress,
    billingAddress,
    shippingCost,
    shippingTax,
    userName,
    billingCheckoutSame
} from "../redux/checkoutSlice";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useErrorContext} from "../context/ErrorContext";
import {Helmet} from "react-helmet-async";


export function Checkout(){
    const user_name = useSelector(state => state.checkout.user_name)
    const checkout_address = useSelector(state => state.checkout.checkout_address)
    return(<Container>
        <Helmet>
            <title>Mojos Index Checkout</title>
            <meta
                name="Mojos Index checkout"
                content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows. Our secure checkout page sponsored by stripe."
            />
        </Helmet>
        <Heading>Checkout</Heading>
        <Divider mt={4} mb={4}/>
        <Cart/>
        <CheckoutDetails/>
        {user_name !== null && <ShippingAddressForm/>}
        <Shipping/>
        {checkout_address !== null && <BillingAddressForm/>}
        <StripeCardPayment/>
    </Container>)
}


export function Shipping(){

    const {printfulItems} = useCartContext()
    const checkout_address = useSelector(state => state.checkout.checkout_address)
    const dispatch = useDispatch()
    const {cart} = useCartContext()
    useEffect(() => {

    }, [cart])

    const ShippingCost = () => {
        const {isLoading, isError, isSuccess, error, data} = useQuery('shippingcost', () => axios.post('https://mojos.herokuapp.com/api/users/shipping/', {address:checkout_address, items: printfulItems()} ).then((r) => r.data))

        const ShippingCostDisplay = ({data}) => {
            const shipping = JSON.parse(data[0])
            useEffect(() => {
                dispatch(shippingCost(shipping.result[0]))
            }, [data])
            return(<>
                <Text>{shipping.result[0].name} ${shipping.result[0].rate}</Text>
            </>)
        }

        return(<SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
            <ShippingCostDisplay/>
        </SuspenseElement>)
    }

    const ShippingTax = () => {
        const {isLoading, isError, error, data, isSuccess} = useQuery('shippingtax', () => axios.post('https://mojos.herokuapp.com/api/address/addresstax/', {address: checkout_address} ).then((r) => r.data))
        const ShippingTaxDisplay = ({data}) => {
            const shipping =  JSON.parse(data[0])
            useEffect(() => {
                dispatch(shippingTax(shipping.result))
            }, [data])
            return (<>
                <Text>Shipping Tax: {shipping.result.rate}</Text>
            </>)
        }
        return(<SuspenseElement isLoading={isLoading} isError={isError} isSuccess={isSuccess} error={error} data={data}>
            <ShippingTaxDisplay/>
        </SuspenseElement> )
    }


    return(
        <Card>
            <CardHeader><Heading>Shipping</Heading></CardHeader>
            <Divider mt={4} mb={4}/>
            <CardBody>
                {checkout_address !== null &&
                    <>
                        <ShippingCost/>
                        <ShippingTax/>
                    </>}
            </CardBody>
        </Card>
    )
}




export function Cart(){
    const {cart, quantity} = useCartContext()

    return(
        <Card>
            <CardHeader><Heading>Cart</Heading></CardHeader>
            <Divider mt={4} mb={4}/>
            <CardBody>
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
                                    <Box w='30%'>
                                        <Text>${item.value.price * item.value.quantity}</Text>
                                    </Box>
                                    <Box w='9%'>
                                        <Button p='0' boxSize='fit-content' onClick={() => quantity(1, item)}><BsArrowUp/></Button>
                                        <Text textAlign='center'>x{item.value.quantity}</Text>
                                        <Button p='0' boxSize='fit-content' onClick={() => quantity(-1, item)}><BsArrowDown/></Button>
                                    </Box>
                                </Flex>
                            </ListItem>)
                    })}
                </List>
            </CardBody>
        </Card>
    )
}


export function ShippingAddressForm(){


    return(
        <Card>
            <CardHeader><Heading>Shipping Address</Heading></CardHeader>
            <Divider mt={4} mb={4}/>
            <CardBody>
                <ShippingForm reducer={checkoutAddress}/>
            </CardBody>
        </Card>
    )
}

export function BillingAddressForm(){
    const billing_checkout_same = useSelector(state => state.checkout.billing_checkout_same)
    const dispatch = useDispatch()

    return(
        <Card>
            <CardHeader><Heading>Billing Address</Heading></CardHeader>
            <Divider mt={4} mb={4}/>
            <CardBody>
                <Checkbox size='lg'  isChecked={billing_checkout_same} onChange={() => dispatch(billingCheckoutSame(!billing_checkout_same))}>
                    Billing Address Same as Shipping
                </Checkbox>
                {!billing_checkout_same && <ShippingForm reducer={billingAddress}/>}

            </CardBody>
        </Card>
    )
}

const ShippingForm = ({reducer}) => {
    const [address, setAddress] = useState(null)
    const dispatch = useDispatch()

    const {user} = useAuthContext()

    const street_address = useRef()
    const city = useRef()
    const zip = useRef()
    const apt = useRef()
    const [state, setState] = useState("")
    const country = useRef()

    function onSubmit(e){
        e.preventDefault()

        dispatch(reducer({street_address: street_address.current.value, city:city.current.value,zip:zip.current.value,apt:apt.current.value,state:state,country:country.current.value}))
    }

    function onChange(e){
        e.preventDefault()
        if(e.target.value !== 'None') {
            setAddress(JSON.parse(e.target.value))
        }
        else{
            setAddress(null)
        }
    }

    useEffect(() => {
        if(address !== null) {
            setState(address.state)
        }
    }, [address])

    return(
        <form onSubmit={(e) => onSubmit(e)}>
            <Stack spacing={2}>
                {user !== null &&
                    <FormControl>
                        <FormLabel>Addresses</FormLabel>
                        <Select onChange={(e) => onChange(e)}>
                            <option value={null}>None</option>
                            {user.address.map((address, i) => {
                                return(<option key={i} value={JSON.stringify(address)}>{address.street_address}</option>)
                            })}
                        </Select>

                        <Divider mb={2} mt={2}/>
                    </FormControl>}
                <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input type="address" placeholder='Address'  defaultValue={address !== null ? address.street_address : ""} ref={street_address} required  maxLength="30" minLength="2"/>
                </FormControl>
                <Flex mt={2} mb={2}>
                    <FormControl isRequired mr={2}>
                        <FormLabel>City</FormLabel>
                        <Input type="text" placeholder='City'  defaultValue={address !== null ? address.city : ""} ref={city} maxLength="20" minLength="2" required/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Zip</FormLabel>
                        <Input type="text" placeholder='Zip'   defaultValue={address !== null ? address.zip : ""} ref={zip} maxLength="15" minLength="2" required/>
                    </FormControl>
                </Flex>
                <Flex>
                    <FormControl mr={2}>
                        <FormLabel>Apt #</FormLabel>
                        <Input type="number" placeholder='Apt #'  defaultValue={address !== null ? address.apt : ""} ref={apt} maxLength='6'/>
                    </FormControl>
                    <FormControl isRequired mr={2}>
                        <FormLabel>State</FormLabel>
                        <Select placeholder={"State"} required  onChange={(e) => setState(e.target.value)} value={state}>
                            {states.map((state, i) => {
                                return(<option key={i} value={state.abbreviation}>{state.abbreviation}</option>)
                            })}
                        </Select>
                    </FormControl>
                    <FormControl >
                        <FormLabel>Country</FormLabel>
                        <Input type="text" value="USA" readOnly ref={country} disabled/>
                    </FormControl>
                </Flex>
                <Button type='submit'>Submit</Button>
            </Stack>
        </form>
    )
}

export function StripeCardPayment() {
    const {clientSecret, GetSecret, stripePromise} = useStripeContext()
    const {cart, totalCart} = useCartContext()
    const checkout_address = useSelector(state => state.checkout.checkout_address)
    const billing_address = useSelector(state => state.checkout.billing_address)
    const shipping_tax = useSelector(state => state.checkout.shipping_tax)
    const shipping_cost = useSelector(state => state.checkout.shipping_cost)

    const billing_checkout_same = useSelector(state => state.checkout.billing_checkout_same)
    const user_name = useSelector(state => state.checkout.user_name)
    useEffect(() => {
        if(shipping_tax !== null && shipping_cost !== null) {
            GetSecret((parseInt(totalCart()) + parseInt(shipping_cost.rate)) + Math.round((parseFloat(shipping_tax.rate) * parseInt(totalCart()))))
        }
    }, [shipping_tax, shipping_cost]);


    function cardCondition(){

        if(billing_checkout_same){
            return checkout_address !== null
        }else{
            return (billing_address && checkout_address)
        }
    }

    const appearance = {
        theme: 'stripe',
        iconColor: "#fff",
        color: "#fff",
        fontWeight: 400,
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
    };
    const options = {
        clientSecret,
        appearance,
    };
    return (
        <Card>
            <CardHeader><Heading>Checkout</Heading></CardHeader>
            <Divider mt={4} mb={4}/>
            <CardBody>
                <Heading textAlign={'center'}>Receipt</Heading>
            <List  m='auto'>
                {cart.map((item, i) => {
                    return(<ListItem key={i}>
                        <Flex
                            w="100%"
                            alignItems='center'>
                            <Box >
                                {item.value.quantity}*{item.item.name}
                            </Box>
                            <Spacer/>
                            <Box>
                                +${item.value.quantity * item.value.price}
                            </Box>
                        </Flex>
                    </ListItem>)
                })}
                <Divider mb={.50} mt={.50}/>
                <ListItem>
                </ListItem>
                <ListItem>
                    <Flex>
                        <Box>
                            Shipping Cost
                            {shipping_cost !== null && <Text fontSize={'2xs'}>{shipping_cost.id} {shipping_cost.minDeliveryDays} to {shipping_cost.maxDeliveryDays} days</Text>}
                        </Box>
                        <Spacer/>
                        <Box>
                            {shipping_cost !== null && <Text>+${shipping_cost.rate}</Text>}
                        </Box>
                    </Flex>
                </ListItem>
                <ListItem>
                    <Flex>
                        <Box>
                            Shipping Tax
                        </Box>
                        <Spacer/>
                        <Box>
                            {shipping_tax !== null && <Text>+${Math.round(parseFloat(shipping_tax.rate) * parseInt(totalCart()))}</Text>}
                        </Box>
                    </Flex>
                </ListItem>
                <Divider mb={2} mt={2}/>
                <ListItem textAlign='right'>
                    <Flex>
                        <Box>
                            Total
                        </Box>
                        <Spacer/>
                        <Box>
                            {shipping_cost !== null && shipping_tax !== null && <Text>${(parseInt(totalCart()) + parseInt(shipping_cost.rate)) + Math.round((parseFloat(shipping_tax.rate) * parseInt(totalCart())))}</Text>}
                        </Box>
                    </Flex>
                </ListItem>
            </List>
            {clientSecret && cardCondition() && (
                <Box m='4'>
                    <Elements options={options} stripe={stripePromise}>
                        <CardForm clientSecret={clientSecret} billing_address={billing_address} checkout_address={checkout_address} user_name={user_name} shipping_cost={shipping_cost} shipping_tax={shipping_tax}/>
                    </Elements>
                </Box>
            )}
            </CardBody>
        </Card>
    );
}


function CheckoutDetails(){
    const dispatch = useDispatch()
    const first_name = useRef()
    const last_name = useRef()
    const email = useRef()
    const {user} = useAuthContext()
    function onSubmit(e){
        e.preventDefault()
        dispatch(userName({first_name: first_name.current.value, last_name: last_name.current.value, email: email.current.value}))
    }

    return(
        <Card>
            <CardHeader><Heading>User Details</Heading></CardHeader>
            <Divider mt={4} mb={4}/>
            <CardBody>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Stack spacing={2}>
                        <Flex>
                            <FormControl isRequired mr={2}>
                                <FormLabel>First Name</FormLabel>
                                <Input type="text" placeholder='First Name'  defaultValue={user !== null  ? user.user.first_name : "" } ref={first_name} maxLength="20" minLength="2" required/>
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Last Name</FormLabel>
                                <Input type="text" placeholder='Last Name'  defaultValue={user !== null  ? user.user.last_name : "" } ref={last_name}  maxLength="20" minLength="2" required/>
                            </FormControl>
                        </Flex>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder='Email' defaultValue={user !== null  ? user.user.email : "" } ref={email}  maxLength="50" required/>
                        </FormControl>
                        <Button type='submit'>Submit</Button>
                    </Stack>
                </form>
            </CardBody>
        </Card>
    )
}


export function CardForm({clientSecret, billing_address, checkout_address, user_name, shipping_cost, shipping_tax}){
    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuthContext()
    const {cart, totalCart} = useCartContext()
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const {errorHandle} = useErrorContext()
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (event) => {
        // We don't want to let default form submission happen here,
        // which would refresh the page.
        event.preventDefault();
        setLoading(true)

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }


        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: user_name.first_name + " " + user_name.last_name,
                    address: {
                        city: billing_address !== null ? billing_address.city : checkout_address.city,
                        state: billing_address !== null ? billing_address.state : checkout_address.state,
                        line1: billing_address !== null ? billing_address.street_address : checkout_address.street_address,
                        postal_code: billing_address !== null ? billing_address.zip : checkout_address.zip,
                        country: 'US'
                    },
                },
            }
        });
        if (result.error) {
            setError(result.error.message)
        } else {
            if (result.paymentIntent.status === 'succeeded') {
                axios.post('https://mojos.herokuapp.com/api/orders/ordercreate/', {checkout_address: checkout_address, user_name: user_name.first_name + " " + user_name.last_name, authuser: user !== null ? user.id : null, items: cart, email: user_name.email, shipping_cost: shipping_cost.rate, shipping_name: shipping_cost.name, shipping_tax: Math.round(parseFloat(shipping_tax.rate) * parseInt(totalCart())), total: (parseInt(totalCart()) + parseInt(shipping_cost.rate)) + Math.round((parseFloat(shipping_tax.rate) * parseInt(totalCart())))}).then((r) => r).finally(() => navigate("/thankyou")).catch((error) => errorHandle(error))
            }
        }
    };

    return(
        <form onSubmit={(e) => handleSubmit(e)}>
            {loading && <Spinner style={{position: 'absolute', top: "50%", left: '50%'}}/>}
            <Stack spacing={2}>
                <CardElement/>
                {!loading ? <Button type='submit' colorScheme='yellow'>Pay</Button>:<Button type='submit' colorScheme='yellow' disabled>Pay</Button>}
            </Stack>
            {error && <Text colorScheme='red'>{error}</Text>}
        </form>
    )
}




