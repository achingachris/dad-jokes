import PastBookings from "./bookings/PastBookings"
import UpcomingBookings from "./bookings/UpcomingBookings"

const BookingsSection = () => {
  return (
    <section>
      <div className='align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>Bookings Summary</h1>
      </div>
      <div className='row'>
        <div className='col-lg-6 mb-4'>
          <UpcomingBookings />
        </div>
        <div className='col-lg-6 mb-4'>
          <PastBookings />
        </div>
      </div>
    </section>
  )
}

export default BookingsSection
