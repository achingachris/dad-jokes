const Footer = () => {
  // get current year
  const year = new Date().getFullYear()
  return (
    <footer className='sticky-footer bg-white'>
      <div className='container my-auto'>
        <div className='copyright text-center my-auto'>
          <span>Copyright © Tiziki {year}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
