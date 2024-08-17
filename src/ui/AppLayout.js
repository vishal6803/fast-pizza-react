import React from 'react'
import Header from './Header'
import CartOverview from './CartOverview'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <CartOverview/>
    </>
  )
}

export default AppLayout
