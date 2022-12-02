import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <ul
      className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
      id='accordionSidebar'
    >
      {/* Sidebar - Brand */}
      <NavLink
        className='sidebar-brand d-flex align-items-center justify-content-center'
        to='/'
      >
        <div className='sidebar-brand-text mx-3'>Tiziki Studio</div>
      </NavLink>
      {/* Divider */}
      <hr className='sidebar-divider my-0' />
      {/* Nav Item - Dashboard */}
      <li className='nav-item active'>
        <NavLink className='nav-link' to='/'>
          <i className='fas fa-fw fa-tachometer-alt' />
          <span>Dashboard</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Quick Access</div>
      {/* Songs */}
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='/'
          data-toggle='collapse'
          data-target='#collapseTwo'
          aria-expanded='true'
          aria-controls='collapseTwo'
        >
          <i className='fas fa-fw fa-cog' />
          <span>Songs</span>
        </a>
        <div
          id='collapseTwo'
          className='collapse'
          aria-labelledby='headingTwo'
          data-parent='#accordionSidebar'
        >
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Songs Actions:</h6>
            <NavLink className='collapse-item' to='/songs'>
              All Songs
            </NavLink>
            <NavLink className='collapse-item' href='/add-song'>
              Add Song
            </NavLink>
          </div>
        </div>
      </li>
      {/* Events */}
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='/'
          data-toggle='collapse'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'
        >
          <i className='fas fa-fw fa-wrench' />
          <span>Events</span>
        </a>
        <div
          id='collapseUtilities'
          className='collapse'
          aria-labelledby='headingUtilities'
          data-parent='#accordionSidebar'
        >
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Events Actions:</h6>
            <NavLink className='collapse-item' to='/events'>
              All Events
            </NavLink>
            <NavLink className='collapse-item' to='/add-event'>
              Add Event
            </NavLink>
          </div>
        </div>
      </li>
      {/* Bookings */}
      <li className='nav-item'>
        <a
          className='nav-link collapsed'
          href='/'
          data-toggle='collapse'
          data-target='#collapseUtilities'
          aria-expanded='true'
          aria-controls='collapseUtilities'
        >
          <i className='fas fa-fw fa-wrench' />
          <span>Bookings</span>
        </a>
        <div
          id='collapseUtilities'
          className='collapse'
          aria-labelledby='headingUtilities'
          data-parent='#accordionSidebar'
        >
          <div className='bg-white py-2 collapse-inner rounded'>
            <h6 className='collapse-header'>Bookings Actions:</h6>
            <NavLink className='collapse-item' to='/bookings'>
              My Bookings
            </NavLink>
          </div>
        </div>
      </li>

      {/* Divider */}
      <hr className='sidebar-divider' />
      {/* Heading */}
      <div className='sidebar-heading'>Studio</div>

      {/* Nav Item - Charts */}
      <li className='nav-item'>
        <NavLink className='nav-link' to='/profile'>
          <i className='fas fa-fw fa-chart-area' />
          <span>My Profile</span>
        </NavLink>
      </li>
      {/* Nav Item - Tables */}
      <li className='nav-item'>
        <NavLink className='nav-link' to='/ticket-sales'>
          <i className='fas fa-fw fa-table' />
          <span>Ticket Sales</span>
        </NavLink>
      </li>
      {/* Divider */}
      <hr className='sidebar-divider d-none d-md-block' />
    </ul>
  )
}

export default SideBar
