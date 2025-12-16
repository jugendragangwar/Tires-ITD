import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Animation from '../src/assets/Images/Animation.gif'

// const WhatWeGet = lazy(() => import('./components/whar we get there/WhatWeGet'));
// const Home = lazy(() => import('./components/home/Home'));
// const WhoWeAre = lazy(() => import('./components/who we are/WhoWeAre'));
// const WhatWeOffer = lazy(() => import('./components/whatweoffer/WhatWeOffer'));
// const PartnerUsPage = lazy(() => import('./Pages/partner/PartnerUs'));
// const OurTeam = lazy(() => import('./components/who we are/OurTeam'));
// const Diversity = lazy(() => import('./components/who we are/Diversity'));
// const Leadership = lazy(() => import('./components/who we are/Leadership'));
// const Tires = lazy(() => import('./components/whatweoffer/Tires'));
// const ITDSuppliers = lazy(() => import('./components/whatweoffer/ITDSupplies'));
// const Grow = lazy(() => import('./components/whatweoffer/Grow'));
// const Products = lazy(() => import('./components/whatweoffer/Products'));
// const Shop = lazy(() => import('./components/whatweoffer/Shop'));
// const Reward = lazy(() => import('./components/whatweoffer/Reward'));
// const GivinBack = lazy(() => import('./components/who we are/GivinBack'));
// const Careers = lazy(() => import('./components/who we are/Careers'));
// const SocialResponsibility = lazy(() => import('./components/who we are/SocialResponsibility'));
// const Sustainability = lazy(() => import('./components/who we are/Sustainability'));
// const Location = lazy(() => import('./components/whatweoffer/Location'));
const Home1 = lazy(() => import('./Pages/Home/Home'));
const RegistrationForm = lazy(() => import('./Pages/login/RegistrationForm'));
const Login = lazy(() => import('./Pages/login/Login'));
const VerifyOTP = lazy(() => import('./Pages/login/VerifyOTP'));
const Forgot = lazy(() => import('./Pages/login/Forgot'));
const ResetPassword = lazy(() => import('./Pages/login/ResetPassword'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const Cart = lazy(() => import('./Shopping/Cart'));
const WishlistPage = lazy(() => import('./Shopping/Wishlist'));
const TermsCondition = lazy(() => import('./Pages/policy/TermsCondition'));
const VendorInformation = lazy(() => import('./Shopping/VendorInformation'));
const PrivacyPolicy = lazy(() => import('./Pages/policy/PrivacyPolicy'));
const Suppliers = lazy(() => import('./Pages/policy/Suppliers'));
const ContactSection =lazy(()=> import('./Pages/Contact/ContactSection'))
const ProductInfo =lazy(()=> import('./Shopping/ProductInfo'))
const AllProducts =lazy(()=> import('./Shopping/AllProducts'))
import StepperWithContent  from './Pages/login/Stepper';
import Card from '../src/Shopping/ProductDetails'


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='flex justify-center items-center'><img  src={Animation} alt="" /></div>}>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/VerifyOTP/:id" element={<VerifyOTP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/WishlistPage" element={<WishlistPage />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/ProductInfo" element={<ProductInfo />} />
          <Route path="/VendorInformation" element={<VendorInformation />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
          <Route path="/Suppliers" element={<Suppliers />} />
          <Route path="/ContactSection" element={<ContactSection />} />
          <Route path="/StepperWithContent" element={<StepperWithContent />} />
          <Route path="/Card" element={<Card />} />
          <Route path="/*" element={<NotFound />} />
          




          {/* <Route path="/Home1" element={<Home />} /> */}
          {/* <Route path="/PartnerUsPage" element={<PartnerUsPage />} /> */}
          {/* <Route path="/whatgetthere" element={<WhatWeGet />} /> */}
          {/* <Route path="/who" element={<WhoWeAre />} /> */}
          {/* <Route path="/what" element={<WhatWeOffer />} /> */}
          {/* <Route path="/ourteam" element={<OurTeam />} /> */}
          {/* <Route path="/diversity" element={<Diversity />} /> */}
          {/* <Route path="/Location" element={<Location />} /> */}
          {/* <Route path="/Tires" element={<Tires />} /> */}
          {/* <Route path="/ITDSuppliers" element={<ITDSuppliers />} /> */}
          {/* <Route path="/Grow" element={<Grow />} /> */}
          {/* <Route path="/Shop" element={<Shop />} /> */}
          {/* <Route path="/product" element={<Products />} /> */}
          {/* <Route path="/GivinBack" element={<GivinBack />} /> */}
          {/* <Route path="/careers" element={<Careers />} /> */}
          {/* <Route path="/Reward" element={<Reward />} /> */}
          {/* <Route path="/leader" element={<Leadership />} /> */}
          {/* <Route path="/social" element={<SocialResponsibility />} /> */}
          {/* <Route path="/sustainability" element={<Sustainability />} /> */}
       
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
