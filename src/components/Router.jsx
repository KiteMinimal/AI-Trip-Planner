import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './custom/Hero'
import CreateTrip from '../create trip/CreateTrip'
import ViewTrip from '@/viewTrip/[tripId]/ViewTrip'


const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/createtrip' element={<CreateTrip />} />
            <Route path='/viewtrip/:tripId' element={<ViewTrip />} />
        </Routes>
    </Router>
  )
}

export default AppRouter