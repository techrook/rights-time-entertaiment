import React from 'react'
import Baselayout from '../components/Baselayout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Search from '../components/Search'

function Homepage() {
  return (
    <>
    <Baselayout>
        <Header />
        <Search />
        <Footer />
    </Baselayout>
   

        

    </>
  )
}

export default Homepage