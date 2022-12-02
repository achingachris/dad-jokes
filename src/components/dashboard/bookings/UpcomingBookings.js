import { NavLink } from 'react-router-dom'

const UpcomingBookings = () => {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>Upcoming Bookings</h6>
      </div>
      <div className='card-body'>
        {/* <h4 className='small font-weight-bold'>
          Event 1 <span className='float-right'>Jan 2023</span>
        </h4> */}
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            An item{' '}
            <span className='float-right'>
              Jan 2023{' '}
              <NavLink to='/bookings'>
                <span class='text'>View</span>
              </NavLink>
            </span>
          </li>
          <li className='list-group-item'>
            A second item{' '}
            <span className='float-right'>
              Jan 2023{' '}
              <NavLink to='/bookings'>
                <span class='text'>View</span>
              </NavLink>
            </span>
          </li>
          <li className='list-group-item'>
            A third item{' '}
            <span className='float-right'>
              Jan 2023{' '}
              <NavLink to='/bookings'>
                <span class='text'>View</span>
              </NavLink>
            </span>
          </li>
          <li className='list-group-item'>
            A fourth item{' '}
            <span className='float-right'>
              Jan 2023{' '}
              <NavLink to='/bookings'>
                <span class='text'>View</span>
              </NavLink>
            </span>
          </li>
          <li className='list-group-item'>
            And a fifth one{' '}
            <span className='float-right'>
              Jan 2023{' '}
              <NavLink to='/bookings'>
                <span class='text'>View</span>
              </NavLink>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default UpcomingBookings
