import React from 'react'
import Hero from './Component/hero';
import Main from './Component/Main';
import Footer from '../Component/footer';
import ProtectedRoute from '../hooks/protectedRoute';

function page() {
  return (
    <ProtectedRoute>
      <div>
      <Hero />
      <Main />
      <Footer />
    </div>
    </ProtectedRoute>
    
  )
}

export default page
