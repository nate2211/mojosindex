import { createSlice} from '@reduxjs/toolkit'

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        billing_address: null,
        checkout_address: null,
        shipping_tax: null,
        shipping_cost: null,
        user_name: null,
        billing_checkout_same: true,
    },
    reducers: {

        checkoutAddress: (state, action) => {
            state.checkout_address = action.payload
        },
        billingAddress: (state, action) => {
            state.billing_address = action.payload
        },
        shippingTax: (state, action) => {
            state.shipping_tax = action.payload
        },
        shippingCost: (state, action) => {
            state.shipping_cost = action.payload
        },
        userName: (state, action) => {
            state.user_name = action.payload
        },
        billingCheckoutSame: (state, action) => {
            state.billing_checkout_same = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { checkoutAddress, billingAddress, shippingTax, shippingCost, userName, billingCheckoutSame} = checkoutSlice.actions

export default checkoutSlice.reducer