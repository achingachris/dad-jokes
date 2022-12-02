const UpcomingEvents = () => {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>Upcoming Events</h6>
      </div>
      <div className='card-body'>
        <h4 className='small font-weight-bold'>
          Event 1 <span className='float-right'>Jan 2023</span>
        </h4>
        <hr />
        <h4 className='small font-weight-bold'>
          Event 2 <span className='float-right'>Jan 2023</span>
        </h4>
        <hr />

        <h4 className='small font-weight-bold'>
          Event 3 <span className='float-right'>Jan 2023</span>
        </h4>
        <hr />

        <h4 className='small font-weight-bold'>
          Event 4 <span className='float-right'>Jan 2023</span>
        </h4>
        <hr />

        <h4 className='small font-weight-bold'>
          Event 5 <span className='float-right'>Jan 2023</span>
        </h4>
      </div>
    </div>
  )
}

export default UpcomingEvents
