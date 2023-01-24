import {Link, useNavigate} from "react-router-dom";
import {useEffect, useRef} from "react";
import {useAuthContext} from "../context/AuthContext";
import {
    Button,
    Card,
    CardBody,
    CardHeader, Checkbox,
    Container,
    Divider, Flex,
    FormControl, FormLabel,
    Heading,
    Input,
    Stack,
    Text
} from "@chakra-ui/react";
import React from "react";
import {useErrorContext} from "../context/ErrorContext";
import {Helmet} from "react-helmet-async";


export function Login(){
    const username = useRef()
    const password = useRef()
    const {user, login} = useAuthContext()
    const navigate = useNavigate()
    const {DisplayError} = useErrorContext()
    function onSubmit(e){
        e.preventDefault()
        login(username.current.value, password.current.value)
    }


    useEffect(() => {
        if(user !== null){
            navigate("/")
        }
    }, [user])

    return(<Container>
        <Helmet>
            <title>Mojos Index Login</title>
            <meta
                name="Mojos Index login"
                content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
            />
        </Helmet>
        <Card>
            <CardHeader><Heading>Login</Heading></CardHeader>
            <Divider mt={4} mb={4}/>
            <CardBody>
                <DisplayError/>
                <form onSubmit={(e) => onSubmit(e)}>
                    <Stack spacing={2}>
                        <FormControl>
                            <FormLabel>Username</FormLabel>
                            <Input type='username' placeholder='Username' ref={username} required maxLength={20}/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder='Password' ref={password} required maxLength={20}/>
                        </FormControl>
                    <Text>No account <Link to={'/signup'}>Signup</Link></Text>
                    <Button mt='2' size='md' type='submit'>
                        Login
                    </Button>
                    </Stack>
                </form>
            </CardBody>
        </Card>
    </Container>)
}


export function Signup(){
    const {user, signup} = useAuthContext()
    const firstname = useRef()
    const lastname = useRef()
    const number = useRef()
    const email = useRef()
    const username = useRef()
    const password= useRef()
    const confirmpassword = useRef()
    const emailupdate = useRef()
    const navigate = useNavigate()
    function SignUp(e){
        e.preventDefault()
        if(password.current.value !== confirmpassword.current.value){
            alert("Passwords are not the same")
        }
        let data = {
            first_name: firstname.current.value,
            last_name: lastname.current.value,
            number: number.current.value,
            email: email.current.value,
            username: username.current.value,
            password: password.current.value,
            email_updates: emailupdate.current.checked
        }
        signup(data)

    }

    useEffect(() => {
        if(user !== null){
            navigate("/")
        }
    }, [user])
    return(
        <Container>
            <Helmet>
                <title>Mojos Index Signup</title>
                <meta
                    name="Mojos Index signup"
                    content="Ecommerce site selling Home&Living goods. Canvas prints, posters, towels and pillows."
                />
            </Helmet>
            <Card>
                <CardHeader><Heading>Sign Up</Heading></CardHeader>
                <Divider mt={4} mb={4}/>
                <CardBody>
                    <form onSubmit={(e) => SignUp(e)}>
                        <Stack spacing={2}>
                        <FormControl isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input type='text' placeholder="First Name" ref={firstname} maxLength="20" minLength="2" required/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Last Name</FormLabel>
                            <Input type='text' placeholder="Last Name" ref={lastname} maxLength="20" minLength="2" required/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Number</FormLabel>
                            <Input type='number' placeholder="Phone Number" ref={number} maxLength="10" minLength="10"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' placeholder="Email" ref={email} required/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Username</FormLabel>
                            <Input type='username' placeholder="Username" ref={username} maxLength="20" minLength="4" required/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Password</FormLabel>
                            <Input type='password' placeholder="Password" ref={password} maxLength="20" minLength="4" required/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Confirm Password</FormLabel>
                            <Input type='password' placeholder="Confirm Password" ref={confirmpassword} maxLength="20" minLength="4" required/>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Email Updates</FormLabel>
                            <Checkbox  ref={emailupdate} />
                        </FormControl>
                        <Flex flexDirection='column'>
                            <Button mt='2' size='md' type={"submit"}>Sign Up</Button>
                            <Link to={"/forgetpassword"}>Forgot Password</Link>
                        </Flex>
                        </Stack>
                    </form>
                </CardBody>
            </Card>
        </Container>
    )
}

export function Logout(){
    const {logout} = useAuthContext()
    const navigate = useNavigate()
    useEffect(()=>{
        logout()
        navigate("/")
    }, [])
    return(<></>)
}
