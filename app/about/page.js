import React from 'react';
import FirstSection from './Component/firstSection';
import SecondSection from './Component/secondSection';
import ThirdSection from './Component/thirdSection';
import ForthSection from './Component/forthSection';
import FifthSection from './Component/fifthSection';
import Footer from '../Component/footer'

function page() {
  return (
    <div>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <ForthSection />
    <FifthSection />
    <Footer />
    </div>
  )
}

export default page
