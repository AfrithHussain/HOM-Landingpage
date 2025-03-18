import React from 'react'
import HeroSection from './components/HeroSection'
import ServiceCards from './components/ServiceCard'
import PriceTable from './components/PriceTable'
import UserCard from './components/UserCard'
import ContactForm from './components/ContactForm'

function App() {
  return (
    <div className=''>

      <HeroSection/>
      <ServiceCards/>
      <PriceTable/>
      <UserCard/>
      <ContactForm/>
      

    </div>
  )
}

export default App