import { loadStripe } from "@stripe/stripe-js";
import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import axios from "axios";

const StripeContext = createContext()



const stripePromise = loadStripe("pk_test_51HpJs0GIZugFwQdSP0TdGSVDzNK6D2jsqdGIJFoUxWMVNtmTmPI5MfJeYFzN7MWSJRYYNNsUucfsB5f6e7JkqVW300051GRoM7");

export function StripeContextProvider({children}){
    const [clientSecret, setClientSecret] = useState(null);
    const [stripe] = useState(async () => await stripePromise)


    function GetSecret(total){
        axios.post("https://mojos.herokuapp.com/api/users/payment/", {total:total} )
            .then((res) => res.data)
            .then((data) => setClientSecret(data.clientSecret));
    }



    return(<StripeContext.Provider value={{clientSecret, GetSecret, stripe, stripePromise}}>
        {children}
    </StripeContext.Provider>)
}

export const useStripeContext = () => useContext(StripeContext)
