import {
    Avatar,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Image,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Popover,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    PopoverArrow,
    Select,
    Stack,
    Textarea,
    Tooltip,
    useDisclosure,
    VStack,
    Text, FormErrorMessage
} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import {StarRating} from "./Rating";
import {BsPlusLg} from "react-icons/bs";
import {useAuthContext} from "../context/AuthContext";
import React, {useRef, useState} from "react";
import states from "../res/states.json"
import {useErrorContext} from "../context/ErrorContext";


export function AddressModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {addAddress, user} = useAuthContext()
    const streetaddress = useRef()
    const apt = useRef()
    const city = useRef()
    const zip = useRef()
    const state = useRef()
    const country= useRef()
    const {DisplayError} = useErrorContext()
    function onSubmit(e){
        e.preventDefault()
        addAddress({street_address: streetaddress.current.value, state: state.current.value, zip: zip.current.value, city: city.current.value ,apt: apt.current.value, country: country.current.value})
    }
    return (
        <>
            {user.address.length < 4 && <Tooltip label='Add Address'><Button onClick={onOpen}><BsPlusLg/></Button></Tooltip>}

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Address</ModalHeader>
                    <DisplayError/>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <Stack spacing={2}>
                            <FormControl>
                                <FormLabel >Street Address</FormLabel>
                                <Input type="address" placeholder='Street Address' ref={streetaddress} maxLength="30" minLength="2" required/>
                            </FormControl>
                            <Flex>
                                <FormControl mr={2}>
                                    <FormLabel>City</FormLabel>
                                    <Input type="text" placeholder='City' ref={city} maxLength="20" minLength="2" required/>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Zip</FormLabel>
                                    <Input type="text" placeholder='Zip' ref={zip} maxLength="20" minLength="2" required/>
                                </FormControl>
                            </Flex>
                            <Flex>
                                <FormControl mr={2}>
                                    <FormLabel >Apt</FormLabel>
                                    <Input type="number"  placeholder='Apt #' ref={apt} maxLength="6"/>
                                </FormControl>
                                <FormControl mr={2}>
                                    <FormLabel>State</FormLabel>
                                    <Select placeholder={"Select State"} ref={state} required>
                                        {states.map((state, i) => {
                                            return(<option key={i} value={state.abbreviation}>{state.abbreviation}</option>)
                                        })}
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Country</FormLabel>
                                    <Input type="text" value="USA" disabled={true} ref={country}/>
                                </FormControl>
                            </Flex>
                            <Button colorScheme='gray' mr={3} type='submit'>
                                Save
                            </Button>
                            </Stack>
                        </form>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}

export function ReviewModal({variants, index}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = useState(variants[index])
    const {createreview} = useAuthContext()
    const [stars, setStars] = useState()
    const review = useRef()
    const {user} = useAuthContext()
    const {DisplayError} = useErrorContext()
    function onSubmit(e){
        e.preventDefault()
        createreview(value, review.current.value, stars)
    }
    return (
        <>
            {user === null ?
                <Popover>
                    <PopoverTrigger>
                        <Button>Write an Review</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Please login to write a review</PopoverHeader>
                        <PopoverBody><Link to='/login'><Button>Login</Button></Link></PopoverBody>
                    </PopoverContent>
                </Popover>:
                <Button onClick={onOpen}>Write an Review</Button>}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Write an Review</ModalHeader>
                    <DisplayError/>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={(e) => onSubmit(e) }>
                            <Stack spacing={2}>
                            <HStack>
                                <StarRating setValue={setStars}/>
                                <Image boxSize={['3.25em']} src={`https://res.cloudinary.com/hsdvgholu/${value.image}`}/>
                                <FormControl isRequired>
                                <Select onChange={(e) => setValue(JSON.parse(e.target.value))} value={JSON.stringify(value)}>
                                    {variants.map((item, i) => {
                                        return(
                                            <option value={JSON.stringify(item)} key={i}>
                                                {item.name}
                                            </option>
                                        )
                                    })}
                                </Select>
                                </FormControl>
                            </HStack>
                                <Textarea required ref={review}/>
                                <Button type='submit'>Submit</Button>
                            </Stack>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export function ChangePasswordModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const {changePassword} = useAuthContext()
    const {user} = useAuthContext()
    const {DisplayError} = useErrorContext()
    function onSubmit(e){
        e.preventDefault()
        if(password === confirmPassword){
            changePassword(password, user.id)
        }
    }
    const isError = password !== confirmPassword
    return (
        <>
            <Button onClick={onOpen}>Change Password</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Change Password</ModalHeader>
                    <DisplayError/>
                    <ModalCloseButton />
                    <ModalBody>
                        <form onSubmit={(e) => onSubmit(e) }>
                            <Stack spacing={2}>
                                <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required maxLength={20}/>
                                <Input type='password' placeholder='Confirm Password' onChange={(e) => setconfirmPassword(e.target.value)}  required maxLength={20}/>
                                <FormControl isInvalid={isError}>
                                    {isError && <FormErrorMessage>Password and confirm password are not the same</FormErrorMessage>}
                                </FormControl>
                                <Button type='submit'>Submit</Button>
                            </Stack>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export function DeletePasswordModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {deleteUser} = useAuthContext()
    const password = useRef()
    const {DisplayError} = useErrorContext()
    function onSubmit(e){
        e.preventDefault()
        deleteUser(password.current.value)
    }
    return (
        <>
            <Button onClick={onOpen}>Delete Account</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Delete Account</ModalHeader>
                    <DisplayError/>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>Are you sure you want to delete your account</Text>
                        <form onSubmit={(e) => onSubmit(e)}>
                            <Stack spacing={2}>
                                <FormControl>
                                    <FormLabel>Password</FormLabel>
                                    <Input type='password' placeholder='Password' ref={password} required maxLength={20}/>
                                </FormControl>
                                <Button mt='2' size='md' type='submit'>
                                    Submit
                                </Button>
                            </Stack>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}