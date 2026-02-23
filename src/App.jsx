import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import Hero from "./components/hero_page"
import Hello from "./components/hello"
import FAQ from "./components/faq"
import CustomerStories from "./components/customer_stories"
import Testimonials from "./components/testimonials"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/customer_stories" element={<CustomerStories />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Route>
    </Routes>
  )
}

export default App