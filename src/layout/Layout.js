import SideBar from './SideBar'
import TopBar from './TopBar'
import LogoutModal from './LogoutModal'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div id='wrapper'>
      <SideBar />
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id='content'>
          <TopBar />
          <div className='container-fluid'>{children}</div>
        </div>
        <Footer />
      </div>
      <a className='scroll-to-top rounded' href='#page-top'>
        <i className='fas fa-angle-up' />
      </a>
      <LogoutModal />
    </div>
  )
}

export default Layout
