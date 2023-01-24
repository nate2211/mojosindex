import { loadStripe } from "@stripe/stripe-js";
import React, {createContext, useContext, useEffect, useRef, useState} from "react";
import axios from "axios";

const StripeContext = createContext()



const stripePromise = loadStripe("pk_live_51HpJs0GIZugFwQdSSxRPRQanFO4M9UsQFX9WKVR7CU6HUxGqnAdUzE54vnkgFHZzbqlnam0xTWU8iQfF9Hp67C2R00ljCapYcX");

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
