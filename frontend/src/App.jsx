import { Routes, Route } from "react-router-dom"

// #########################################
// ## Core Pages
// #########################################
import Layout from "./components/layout"
import Home from "./components/Home"
import FAQ from "./components/faq"
import CustomerStories from "./components/customer_stories"
import Testimonials from "./components/testimonials"
import Product_Overview from "./components/product_overview"
import Pricing from "./components/pricing"
import HowItWorks from "./components/how_it_works"
import WhyZaptian from "./components/why_zaptian"
import Features from "./components/features"
import Benefits from "./components/benefits"
import ComparePlans from "./components/compare_plans"
import RequestDemo from "./components/request_demo"
import GetStarted from "./components/get_started"

// #########################################
// ## Auth Pages
// #########################################
import SignUp from "./components/auth/sign_up"
import SignIn from "./components/auth/sign_in"

// #########################################
// ## Solutions Pages
// #########################################
import Businesses from "./components/solutions/businesses"
import Schools from "./components/solutions/schools"
import Events from "./components/solutions/events"
import Healthcare from "./components/solutions/healthcare"
import Government from "./components/solutions/government"

// #########################################
// ## Customers Pages
// #########################################
import Security from "./components/customers/security"
import SLA from "./components/customers/sla"

// #########################################
// ## Resources Pages
// #########################################
import Docs from "./components/resources/docs"
import Help from "./components/resources/help"
import Blog from "./components/resources/blog"
import CaseStudies from "./components/resources/case_studies"

// #########################################
// ## Company Pages
// #########################################
import About from "./components/company/about"
import Careers from "./components/company/careers"
import Contact from "./components/company/contact"
import Partners from "./components/company/partners"

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
        <Route path="/why_zaptian" element={<WhyZaptian />} />
        <Route path="/customer_stories" element={<CustomerStories />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
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
        <Route path="/solutions/government" element={<Government />} />

        {/*************************************
         * Customers Pages Routes
         **************************************/}
        <Route path="/customers/security" element={<Security />} />
        <Route path="/customers/sla" element={<SLA />} />

        {/*************************************
         * Resources Pages Routes
         **************************************/}
        <Route path="/resources/docs" element={<Docs />} />
        <Route path="/resources/help" element={<Help />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />

        {/*************************************
         * Company Pages Routes
         **************************************/}
        <Route path="/company/about" element={<About />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/contact" element={<Contact />} />
        <Route path="/company/partners" element={<Partners />} />
      </Route>
    </Routes>
  )
}

export default App