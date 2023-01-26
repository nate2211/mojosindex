import {useAuthContext} from "../context/AuthContext";
import {useRef} from "react";
import {
    Button,
    Container,
    Divider,
    Heading,
    Input,
    ListItem,
    Textarea,
    List,
    Text,
    Card,
    CardBody, CardHeader, Stack
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from "react";
import {Helmet} from "react-helmet-async";

export function Contact(){
    const {contact} = useAuthContext()
    const message = useRef()
    const email = useRef()

    function onSubmit(e){
        e.preventDefault()
        contact(message.current.value, email.current.value)
    }
    return(
        <Container>
            <Helmet>
                <title>Mojos Index Contact</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows. Contact us."
                />
            </Helmet>
            <Card>
                <CardHeader><Heading>Contact Us</Heading></CardHeader>
                <Divider mt={4} mb={4}/>
                <CardBody>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <Stack spacing={2}>
                            <Input type='email' placeholder='Email' required ref={message}/>
                            <Textarea placeholder='Message' required ref={email}/>
                            <Button colorScheme='teal' size='md' type={"submit"}>
                                Submit
                            </Button>
                        </Stack>
                    </form>
                </CardBody>
            </Card>
        </Container>)
}

export function Faq(){

    return(
        <Container>
            <Helmet>
                <title>Mojos Index Faq</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            <Card>
                <CardHeader><Heading>Faq</Heading></CardHeader>
                <Divider mt={4} mb={4} p='0'/>
                <CardBody>
                    <List spacing={2}>
                        <ListItem>
                            Fulfillment time the time it takes to make your Mojo's Index product. 2–5 business days for fulfillment on all production techniques.
                        </ListItem>
                        <ListItem>
                            Fulfillment time does not include shipping
                        </ListItem>
                        <ListItem>
                            Fulfillment for larger orders might take longer then 5 business
                        </ListItem>
                        <ListItem>
                            Our Fulfillment times are an estimate not a guarantee
                        </ListItem>
                        <ListItem>
                            If order lost in mail or damaged <Link to={"/contact"}>Contact us</Link> or <Link to={"/return"}>Return</Link>
                        </ListItem>
                        <ListItem>
                            Shipping cost can be seen at <Link to={"/shipping"}>Shipping Cost</Link>
                        </ListItem>
                        <ListItem>
                            Past estimated delivery time and still have received your order <Link to={"/contact"}>Contact us</Link> or check <Link to={"/status"}>Order status </Link>
                            to see if theres been an update
                        </ListItem>
                        <ListItem>
                            Any claims for misprinted/damaged/defective items must be submitted within 30 days after the product is received
                        </ListItem>
                        <ListItem>
                            For packages lost in transit all claims must be submitted no more than 30 days after the estimated delivery date
                        </ListItem>
                        <ListItem>
                            To report a problem with your order visit <Link to={"/contact"}>Contact Us</Link>
                        </ListItem>
                        <ListItem>
                            All sent products are marked with the return address if you wish to learn more visit <Link to={"/return"}>Return Policy</Link>
                        </ListItem>
                        <ListItem>
                            Any claim for misprinted/damaged/defective products must be submitted within 30 days after the product is received.
                        </ListItem>
                    </List>
                </CardBody>
            </Card>
        </Container>
    )
}


export function ReturnFaq(){

    return(
        <Container>
            <Helmet>
                <title>Mojos Index Return Faq</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            <Card>
            <CardHeader><Heading>Return FAQ</Heading></CardHeader>
            <Divider mt={4} mb={4} p='0'/>
            <CardBody>
                <Link to={"/contact"}>Make a Return</Link>
                <List spacing={2}>
                    <ListItem>
                        Any claim for misprinted/damaged/defective products must be submitted within 30 days after the product is received. For packages lost in transit, all claims must be submitted no more the 30 days
                        after the estimated delivery date
                    </ListItem>
                    <ListItem>
                        Any returns or problems that occur because of an error on our part will be handled by our expense.
                    </ListItem>
                    <ListItem>
                        When the item is returned to our facility, we will contact you regarding the return.
                        We will ship the return back to you; however, you will be responsible for the shipping cost a second time.
                        Unclaimed returns get donated to charity after 30 days.
                    </ListItem>
                    <ListItem>
                        If you provide an address that is considered insufficient by the courier, the shipment will be returned to our facility. You will be liable for reshipment costs once we have confirmed an updated address with you
                    </ListItem>
                    <ListItem>
                        If the package was marked as delivered by the carrier, but the customer reports they have yet to receive it, We won't cover the cost of reshipping or refunding the order.
                    </ListItem>
                    <ListItem>
                        If you are unable to locate the package, you will need to place a new manual order to have it reshipped. We will not assist with filing claims with shipping carriers.
                    </ListItem>
                    <ListItem>
                        Shipments that go unclaimed are returned to our facility and you will be liable for the cost of a reshipment.
                    </ListItem>
                </List>
            </CardBody>
            </Card>
        </Container>)
}

export function ShippingFaq(){

    return(
        <Container>
            <Helmet>
                <title>Mojos Index Shipping</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            <Card>
            <CardHeader><Heading>Shipping</Heading></CardHeader>
            <Divider mt={4} mb={4} p='0'/>
                <CardBody>
                    <List spacing={4}>
                        <ListItem>
                            Once your order is ready too ship, we hand it over to the carrier and send you a shipping confirmation email with a tracking number.
                        </ListItem>
                        <ListItem>
                            You can also go to to the order status page and enter your order number and zip code
                        </ListItem>
                        <ListItem>
                            When an order is out for deliver updates on the status will depend on the carrier service
                        </ListItem>
                        <ListItem>
                            Our Estimated delivery time (EDT) follows a simple equation estimated fulfillment + estimated shipping = estimated delivery time
                            average order fulfillment takes 2-5 business days
                        </ListItem>
                        <ListItem>
                            Issues with print or embroidery files and equipment as well as products being out of stock and shipping related delays might cause the order to arrive past the EDT
                        </ListItem>
                        <ListItem>
                            Many of our products including framed posters and bulkier shipments are too large to be accepted by national postal operators, so we use commercial companies (like FedEx) to deliver these products that cannot deliver to PO Boxes. We suggest you use a physical address instead of a PO Box address to ensure smooth delivery.
                        </ListItem>
                        <ListItem>
                            For packages lost in transit, all claims must be submitted no later than 30 days after the estimated delivery date.
                            Keep in mind that if tracking information states an order was delivered but your customer thinks they haven't received it, we won't take responsibility and reship that order.
                            So make sure your shipping address is correct.
                        </ListItem>
                        <ListItem>
                            You can upgrade the shipping method but must do so while the order is still in fulfillment
                        </ListItem>
                        <ListItem>
                            If something arrives damaged, as well as attached a photo of the damaged goods for verification.
                        </ListItem>
                    </List>
                </CardBody>
            </Card>
        </Container>
    )
}

export function AboutUs(){


    return(
        <Container>
            <Helmet>
                <title>Mojos Index About</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            <Card>
                <CardHeader><Heading>About Us</Heading></CardHeader>
                <Divider mt={4} mb={4} p='0'/>
                <CardBody>
                    <Text>
                        Mojo's Index is a home goods selling website specializing in wall art. We at Mojo's Index took proper time and care
                        with our designs and curated our favorite from a selection of designs varying in categories such as astrology, space, mandala's, crystal's and botanical.
                        We mostly stock & sell canvas prints but have expanded to other products such as towels, pillows and puzzles.
                        Our goal at Mojos Index is to ship quality products all over the USA. Based out of Mississippi we ship all over the country.
                    </Text>
                </CardBody>
            </Card>
        </Container>
    )
}

export function ThankYou(){

    return(
        <Container>
            <Helmet>
                <title>Mojos Index Thank You</title>
                <meta
                    name="description"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
           <Card>
               <CardHeader><Heading>Thank you for you order</Heading></CardHeader>
               <Divider mt={4} mb={4} p='0'/>
               <CardBody>
                   <Text>A email will be sent to you with the receipt and the order ID, which you can use to lookup your order on the order lookup page.</Text>
               </CardBody>
           </Card>
        </Container>
    )
}