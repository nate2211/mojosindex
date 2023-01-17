import React, {createContext, useContext, useEffect, useState} from "react";

const CartContext = createContext()

export function CartContextProvider({children}) {
    const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart")) || [])

    function addCart(element){
        if(!cart.some((el) => el.item.title === element.item.title)) {
            setCart((prev) => [...prev, element])
        }else{
            let temp = cart.find((el) => el.item.title === element.item.title)
            if(JSON.stringify(temp.value) !== JSON.stringify(element.value)){
                let index = cart.findIndex((el) => el.item.title === temp.item.title)
                cart[index] = element
                setCart(cart)
            }
        }
    }

    function quantity(op, element){
        if(element.value.quantity + op === 0){
            removeCart(element)
        }else{
            let index = cart.findIndex((el) => el.item.title === element.item.title)
            element.value.quantity = element.value.quantity + op
            cart[index] = element
            setCart(() => [...cart])
        }

    }

    function removeCart(element){
        setCart((prev) => prev.filter((el) => el.item.title !== element.item.title))
    }

    function totalCart(){
        let sum = 0
        cart.forEach((item) => {
            sum = sum + item.value.price * item.value.quantity
        })
        return sum
    }

    function printfulItems(){
        let items = []
        cart.forEach((item) => {
            items.push({variant_id: item.item.printful_id || 823, quantity: item.value.quantity})
        })
        return items

    }
    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])


    return(<CartContext.Provider value={{cart, setCart, addCart, removeCart, quantity, totalCart, printfulItems}}>
        {children}
    </CartContext.Provider>)

}

export const useCartContext = () => useContext(CartContext)