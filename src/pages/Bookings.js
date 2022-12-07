import PageHeader from '../components/shared/PageHeader'
import BookingsTable from '../components/bookings/BookingsTable'

const Bookings = () => {
  return (
    <div>
      <PageHeader pageName='My Bookings' />
      <BookingsTable />
    </div>
  )
}

export default Bookings
