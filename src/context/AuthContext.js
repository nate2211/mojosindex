import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import {useErrorContext} from "./ErrorContext";

const AuthContext = createContext()

export function AuthContextProvider({children}) {

    const [user, setUser] = useState(JSON.parse(window.localStorage.getItem('user')) || null)
    const {errorHandle} = useErrorContext()
    useEffect(() => {
        window.localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    function login(username, password){
        axios.post('http://127.0.0.1:8000/api/users/login/', {username: username, password: password}).then((r) => setUser(r.data)).catch((e) => errorHandle(e, "Username or Password is incorrect"))
    }
    function logout(){
        axios.post('http://127.0.0.1:8000/api/users/logout/', {user: user.id}).then(() => setUser(null)).catch((e) => errorHandle(e))
    }
    function signup(data){
        axios.post('http://127.0.0.1:8000/api/users/signup/', {data: data}).catch((e) => errorHandle(e))
    }
    function changePassword(password, id){
        axios.post('http://127.0.0.1:8000/api/users/changepassword/', {password: password, id: id}).catch((e) => errorHandle(e))
    }
    function forgetPassword(email){
        axios.post('http://127.0.0.1:8000/api/users/forgetpassword/', {email: email}).catch((e) => errorHandle(e))
    }
    function updateAddress(address, data){
        axios.post('http://127.0.0.1:8000/api/users/updateaddress/', {address: address, dict: data}).then(() => refreshAccount()).catch((e) => errorHandle(e))
    }
    function refreshAccount(){
        axios.post('http://127.0.0.1:8000/api/users/refresh/', {user: user.id}).then((r) => setUser(r.data)).catch((e) => errorHandle(e))
    }
    function updateAccount(data){
        axios.post('http://127.0.0.1:8000/api/users/accountupdate/', {user: user.id, data: data}).then((r) => setUser(r.data)).catch((e) => errorHandle(e))
    }
    function deleteUser(password) {
        axios.post('http://127.0.0.1:8000/api/users/deleteuser/', {
            id: user.id,
            uid: user.user.id,
            password: password
        }).catch((e) => errorHandle(e))
    }
    function removeAddress(id){
        axios.post('http://127.0.0.1:8000/api/users/removeaddress/', { address: id}).then(()=> refreshAccount()).catch((e) => errorHandle(e))
    }
    function addAddress(data){
        if(user.address.length < 4) {
            axios.post('http://127.0.0.1:8000/api/users/addaddress/', {
                user: user.id,
                address: data
            }).then(() => refreshAccount()).catch((e) => errorHandle(e))
        }else{
            errorHandle("Can not have more then 3 Addresses")
        }
    }
    function contact(message, email){
        axios.post('http://127.0.0.1:8000/api/users/contact/', {message: message, email: email}).catch((e) => errorHandle(e))
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


    function addwishlist(variant){
        axios.post('http://127.0.0.1:8000/api/users/addwishlist/',{authuser: user.id, id:variant.id}).finally(()=> refreshAccount()).catch((e) => errorHandle(e))
    }
    function removewishlist(variant){
        axios.post('http://127.0.0.1:8000/api/users/removewishlist/',{authuser: user.id, id:variant.id}).finally(()=> refreshAccount()).catch((e) => errorHandle(e))
    }
    function createreview(variant, review, rating){
        axios.post('http://127.0.0.1:8000/api/users/createreview/', {authuser: user.id, variant: variant.id, product: variant.product, review: review, rating: rating}).finally(()=> refreshAccount()).catch((e) => errorHandle(e))
    }
    function deletereview(variant){
        axios.post('http://127.0.0.1:8000/api/reviews/deletereview/', {authuser: user.id, variant: variant.id, product: variant.product}).finally(()=> refreshAccount()).catch((e) => errorHandle(e))
    }
    function editreview(review, rating, variant){
        axios.post('http://127.0.0.1:8000/api/reviews/editreview/', {review: review, rating: rating, authuser: user.id, variant: variant.id, product: variant.product}).finally(() => refreshAccount()).catch((e) => errorHandle(e))
    }


    return(<AuthContext.Provider value={{user, login, updateAccount, updateAddress, addAddress, refreshAccount, removeAddress, logout, forgetPassword,
        signup, contact, checkAddress, addwishlist, removewishlist, createreview, deletereview, editreview, changePassword, deleteUser}}>
        {children}
    </AuthContext.Provider>)

}

export const useAuthContext = () => useContext(AuthContext)