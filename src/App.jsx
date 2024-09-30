import CustomComponent from "./Components/CustomComponent"
import HeroSection from "./Pages/HeroSection"
import Features from "./Pages/Features"
import Testimonials  from "./Pages/Testimonials"
import MedicalComponent from "./Components/MedicalComponent"
import FooterSection from "./Pages/FooterSection"

function App() {

  return (
    <>
      <HeroSection />
      <CustomComponent />
      <MedicalComponent />
      <Features />
      <Testimonials />
      <FooterSection />
      
    </>
  )
}

export default App
