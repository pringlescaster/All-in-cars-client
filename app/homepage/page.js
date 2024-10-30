import React from 'react'
import Navbar from "../homepage/component/navbar"
import Hero from "../homepage/component/hero"
import ThirdSection from './component/thirdSection'
import ForthSection from './component/forthSection'
import FifthSection from './component/fifthSection'
import SixthSection from './component/sixthSection'
import Footer from './component/footer'
function page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  )
}

export default page
