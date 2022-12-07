import Table from '../shared/Table'
import BookingData from './BookingData'

const BookingsTable = () => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>Booking Title</th>
            <th>Date</th>
            <th>Client</th>
            <th>View</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>Booking Title</th>
            <th>Date</th>
            <th>Client</th>
            <th>View</th>
          </tr>
        </tfoot>
        <tbody>
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
          <BookingData />
        </tbody>
      </Table>
    </div>
  )
}

export default BookingsTable
