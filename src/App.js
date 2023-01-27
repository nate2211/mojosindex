import {NavBar} from "./layout/Navbar";
import {Footer} from "./layout/Footer";
import {Body} from "./layout/Body";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Checkout} from "./pages/Checkout";
import {Account, ForgetPassword, OrderLookup} from "./pages/Account";
import {Login, Logout, Signup} from "./pages/Auth";
import {Product} from "./pages/Products";
import {Shop} from "./pages/Shop";
import {Privacy, Return, TermsConditions, Shipping} from "./pages/Policies";
import {AboutUs, Contact, Faq, ReturnFaq, ShippingFaq, ThankYou} from "./pages/About";
import {useEffect} from "react";


function App() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [window.location.pathname]);

  return (
    <>
      <NavBar/>
        <Body>
            <Routes>
                <Route path={'/'} exact element={<Home/>}/>
                <Route path={'/checkout'} exact element={<Checkout/>}/>
                <Route path={'/account'} element={<Account/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/signup'} element={<Signup/>}/>
                <Route path={'/logout'} element={<Logout/>}/>
                <Route path={'/product/:id'} element={<Product/>}/>
                <Route path={'/shop'} element={<Shop/>}/>
                <Route path={'/shop/:id'} element={<Shop/>}/>
                <Route path={'/privacy'} element={<Privacy/>}/>
                <Route path={'/terms&conditions'} element={<TermsConditions/>}/>
                <Route path={'/returns'} element={<Return/>}/>
                <Route path={'/shipping'} element={<Shipping/>}/>
                <Route path={'/faq'} element={<Faq/>}/>
                <Route path={'/returnfaq'} element={<ReturnFaq/>}/>
                <Route path={'/shippingfaq'} element={<ShippingFaq/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'/aboutus'} element={<AboutUs/>}/>
                <Route path={'/orderlookup'} element={<OrderLookup/>}/>
                <Route path={'/forgetpassword'} element={<ForgetPassword/>}/>
                <Route path={'/forgetpassword/:id'} element={<ForgetPassword/>}/>
                <Route path={'/thankyou'} element={<ThankYou/>}/>
            </Routes>

        </Body>
      <Footer/>
    </>
  );
}

export default App;
