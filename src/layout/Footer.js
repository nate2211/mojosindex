import {Box, Center, Flex, HStack, Image, Spacer, Text} from "@chakra-ui/react";
import stripe_logo from "../res/stripe_logo.png";
import axp_logo from "../res/axp_logo.png";
import discover_logo from "../res/discover_logo.jpg";
import visa_logo from "../res/visa_logo.png";
import mc_logo from "../res/mc_logo.png";
import {Link} from "react-router-dom"
export function Footer(){
    return(
        <Flex h="10vh" bg="gray.200" flexDirection="column" position='fixed' bottom='0' w='100%'>
            <Center w='100%' h={"5vh"}>
                <HStack>
                    <Text textAlign='center' fontSize={['.60em', '1em']} as={Link} to={"/shipping"}>Shipping Policy</Text>
                    <Text textAlign='center' fontSize={['.60em', '1em']} as={Link} to={"/terms&conditions"}>Terms & Conditions</Text>
                    <Text textAlign='center' fontSize={['.60em', '1em']} as={Link} to={"/returns"}>Return Policy</Text>
                    <Text textAlign='center' fontSize={['.60em', '1em']} as={Link} to={"/privacy"}>Privacy Policy</Text>
                </HStack>
            </Center>
            <Center w='100%' h={"5vh"}>
                <HStack>
                    <Text textAlign='center' fontSize={['.50em', '1em']} as={Link} to={"/aboutus"}>About Us</Text>
                    <Text textAlign='center' fontSize={['.50em', '1em']} as={Link} to={"/contact"}>Contact</Text>
                    <Text textAlign='center' fontSize={['.50em', '1em']} as={Link} to={"/faq"}>FAQ</Text>
                    <Text textAlign='center' fontSize={['.50em', '1em']} as={Link} to={"/returnfaq"}>Returns</Text>
                </HStack>
            </Center>
            <Spacer />
            <Box alignSelf={"flex-end"}>
                <Flex flexDirection="column" w="100%" alignItems="flex-end">
                    <Image src={stripe_logo} boxSize='25px' alignSelf="self-end"/>
                    <HStack>
                        <Image src={axp_logo} boxSize='12px'/>

                        <Image src={discover_logo} boxSize='12px'/>

                        <Image src={mc_logo} boxSize='12px'/>

                        <Image src={visa_logo} boxSize='12px'/>
                    </HStack>
                </Flex>
            </Box>
        </Flex>
    )
}