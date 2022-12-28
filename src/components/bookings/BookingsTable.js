import { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../shared/Table'
import BookingData from './BookingData'

const BookingsTable = () => {
  const [bookings, setBookings] = useState([])

  // get booking data
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        'http://localhost:1337/api/artist-bookings?populate=artist'
      )
      setBookings(response.data.data)
      console.log(response.data.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Date</th>
            <th>View</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Description</th>
            <th>Date</th>
            <th>View</th>
          </tr>
        </tfoot>
        <tbody>
          {/* DISPLAY DATA FROM API */}
          {bookings.map((data) => (
            <BookingData
              key={data.id}
              name={data.attributes.name}
              email={data.attributes.email}
              description={data.attributes.booking_description}
            />
          ))}
          {/* <BookingData /> */}
        </tbody>
      </Table>
    </div>
  )
}

export default BookingsTable
