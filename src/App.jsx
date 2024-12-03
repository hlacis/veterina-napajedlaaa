import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import Workflow from "./components/Workflow"
import Price from "./components/Price"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Price />
        <Testimonials />
        <Footer />
      </div>
    </>
  )
}

export default App
