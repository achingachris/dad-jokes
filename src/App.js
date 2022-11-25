import { Routes, Route } from 'react-router-dom'

// layput
import Layout from './layout/Layout'

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Bookings from './pages/Bookings'
import TicketSales from './pages/TicketSales'
import AddEvents from './pages/AddEvents'
import Events from './pages/Events'
import Songs from './pages/Songs'
import AddSong from './pages/AddSong'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Dashboard />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path='/ticket-sales' element={<TicketSales />} />
        <Route path='/events' element={<Events />} />
        <Route path='/add-event' element={<AddEvents />} />
        <Route path='/songs' element={<Songs />} />
        <Route path='/add-song' element={<AddSong />} />
      </Routes>
    </Layout>
  )
}

export default App
