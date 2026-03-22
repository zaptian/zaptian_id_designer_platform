import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Hero from "./components/hero_page"
import Hello from "./components/hello"
import FAQ from "./components/faq"
import CustomerStories from "./components/customer_stories"
import Testimonials from "./components/testimonials"
import Product_Overview from "./components/product_overview"
import Pricing from "./components/pricing"
import HowItWorks from "./components/how_it_works"
import WhyZaptian from "./components/why_zaptian"
import SignUp from "./components/auth/sign_up"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/customer_stories" element={<CustomerStories />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/product_overview" element={<Product_Overview />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/why_zaptian" element={<WhyZaptian />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Route>
    </Routes>
  )
}

export default App