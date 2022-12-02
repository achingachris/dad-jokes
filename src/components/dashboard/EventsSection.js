import PastEvents from "./eventscards/PastEvents"
import UpcomingEvents from "./eventscards/UpcomingEvents"

const EventsSection = () => {
  return (
    <section>
      <div className='align-items-center justify-content-between mb-4'>
        <h1 className='h3 mb-0 text-gray-800'>Events Summary</h1>
      </div>
      <div className='row'>
        <div className='col-lg-6 mb-4'>
         <UpcomingEvents />
        </div>
        <div className='col-lg-6 mb-4'>
         <PastEvents />
        </div>
      </div>
    </section>
  )
}

export default EventsSection
