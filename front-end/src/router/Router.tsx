import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from '../domain/Error404'
import SignIn from '../domain/SignIn'

export default function Router() {
  return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="*" element={<Error404/>}></Route>
    </Routes>
</BrowserRouter> 
)
}
