import { Routes, Route } from "react-router-dom";

// #########################################
// ## Core Pages
// #########################################
import Layout from "./components/layout";
import Home from "./components/Home";
import Product_Overview from "./components/product_overview";
import Pricing from "./components/pricing";
import HowItWorks from "./components/how_it_works";
import Features from "./components/features";
import Benefits from "./components/benefits";
import ComparePlans from "./components/compare_plans";
import RequestDemo from "./components/request_demo";
import GetStarted from "./components/get_started";

// #########################################
// ## Auth Pages
// #########################################
import SignUp from "./components/auth/sign_up";
import SignIn from "./components/auth/sign_in";

// #########################################
// ## Solutions Pages
// #########################################
import Businesses from "./components/solutions/businesses";
import Schools from "./components/solutions/schools";
import Events from "./components/solutions/events";
import Healthcare from "./components/solutions/healthcare";

// #########################################
// ## Customers Pages
// #########################################
import Security from "./components/customers/security";
import Why_Zaptian from "./components/customers/why_zaptian";

// #########################################
// ## Resources Pages
// #########################################
import Blog from "./components/resources/blog";
import FAQ from "./components/resources/faq";

// #########################################
// ## Company Pages
// #########################################
import About from "./components/company/about";
import Contact from "./components/company/contact";
import Partners from "./components/company/partners";
import Terms_conditions from "./components/legal/Terms_conditions";
import Privacy from "./components/legal/Privacy_Policy";
import Cookies from "./components/legal/Cookies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*************************************
         * Core Pages Routes
         **************************************/}
        <Route index element={<Home />} />
        <Route path="/product_overview" element={<Product_Overview />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/compare-plans" element={<ComparePlans />} />
        <Route path="/request-demo" element={<RequestDemo />} />
        <Route path="/get-started" element={<GetStarted />} />

        {/*************************************
         * Auth Pages Routes
         **************************************/}
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/sign_in" element={<SignIn />} />

        {/*************************************
         * Solutions Pages Routes
         **************************************/}
        <Route path="/solutions/businesses" element={<Businesses />} />
        <Route path="/solutions/schools" element={<Schools />} />
        <Route path="/solutions/events" element={<Events />} />
        <Route path="/solutions/healthcare" element={<Healthcare />} />

        {/*************************************
         * Customers Pages Routes
         **************************************/}
        <Route path="/customers/security" element={<Security />} />
        <Route path="/customers/why_zaptian" element={<Why_Zaptian />} />

        {/*************************************
         * Resources Pages Routes
         **************************************/}
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/faq" element={<FAQ />} />

        {/*************************************
         * Company Pages Routes
         **************************************/}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/company/partners" element={<Partners />} />

        {/*************************************
         * Legal Pages Routes
         **************************************/}
        <Route path="/legal/terms" element={<Terms_conditions />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/cookies" element={<Cookies />} />
      </Route>
    </Routes>
  );
}

export default App;
