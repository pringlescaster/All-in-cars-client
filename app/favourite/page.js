"use client"

import React from 'react'
import ProtectedRoute from '../hooks/protectedRoute';

function page() {
   

  return (
    <ProtectedRoute>
         <div>
       <h1>Add to Favorite</h1>
    </div>
    </ProtectedRoute>
   
  )
}

export default page
