import React from 'react'
import Header from './Header'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import Footer from './Footer'
import {Outlet} from 'react-router'
import ToTop from '../ToTop'


function Layout() {
  return (
    <div className='layout'>
      <Header/>
      <LeftMenu/>
        <ToTop/>
      {/* <RightMenu/> */}
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout
