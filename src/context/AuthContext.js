import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {useErrorContext} from "./ErrorContext";
import {useSuspenseContext} from "./SuspenseContext";

const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')) || null)
    const {errorHandle} = useErrorContext()
    const {setLoading} = useSuspenseContext()
    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    async function login(username, password){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/login/', {username: username, password: password}).then((r) => setUser(r.data)).then(() => setLoading(false)).catch((e) => errorHandle(e, "Username or Password is incorrect"))
    }
    async function logout(){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/logout/', {user: user.id}).then(() => setUser(null)).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function signup(data){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/signup/', {data: data}).then((r) => setUser(r.data)).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function changePassword(password, id){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/changepassword/', {password: password, id: id}).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function forgetPassword(email){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/forgetpassword/', {email: email}).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function updateAddress(address, data){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/updateaddress/', {address: address, dict: data}).then(() => refreshAccount()).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function refreshAccount(){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/refresh/', {user: user.id}).then((r) => setUser(r.data)).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function updateAccount(data){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/accountupdate/', {user: user.id, data: data}).then((r) => setUser(r.data)).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function deleteUser(password) {
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/deleteuser/', {
            id: user.id,
            uid: user.user.id,
            password: password
        }).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function removeAddress(id){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/removeaddress/', { address: id}).then(()=> refreshAccount()).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function addAddress(data){
        setLoading(true)
        if(user.address.length < 4) {
            await axios.post('https://mojos.herokuapp.com/api/users/addaddress/', {
                user: user.id,
                address: data
            }).then(() => refreshAccount()).catch((e) => errorHandle(e))
        }else{
            errorHandle("Can not have more then 3 Addresses")
        }
    }
    async function contact(message, email){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/contact/', {message: message, email: email}).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    function checkAddress(address){
        let temp = user.address
        let bool = false
        temp.forEach((address) => {
            delete address.id
            delete address.authuser
            delete address.current
        })
        temp.forEach((taddress) => {

            if(Object.entries(taddress).sort().toString() === Object.entries(address).sort().toString()){
                bool = true
            }
        })
        return bool
    }


    async function addwishlist(variant){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/addwishlist/',{authuser: user.id, id:variant.id}).then(()=> refreshAccount()).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function removewishlist(variant){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/users/removewishlist/',{authuser: user.id, id:variant.id}).then(()=> refreshAccount()).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function createreview(variant, review, rating){
        setLoading(true)
        return await axios.post('https://mojos.herokuapp.com/api/users/createreview/', {authuser: user.id, variant: variant.id, product: variant.product, review: review, rating: rating}).then(()=> refreshAccount()).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function deletereview(variant){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/reviews/deletereview/', {authuser: user.id, variant: variant.id, product: variant.product}).then(()=> refreshAccount()).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }
    async function editreview(review, rating, variant){
        setLoading(true)
        await axios.post('https://mojos.herokuapp.com/api/reviews/editreview/', {review: review, rating: rating, authuser: user.id, variant: variant.id, product: variant.product}).then(() => refreshAccount()).then(() => setLoading(false)).catch((e) => errorHandle(e))
    }


    return(<AuthContext.Provider value={{user, login, updateAccount, updateAddress, addAddress, refreshAccount, removeAddress, logout, forgetPassword,
        signup, contact, checkAddress, addwishlist, removewishlist, createreview, deletereview, editreview, changePassword, deleteUser}}>
        {children}
    </AuthContext.Provider>)

}

export const useAuthContext = () => useContext(AuthContext)