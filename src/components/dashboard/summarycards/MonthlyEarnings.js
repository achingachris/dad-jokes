const MonthlyEarnings = () => {
  // get current month by name
  const month = new Date().toLocaleString('default', { month: 'long' })

  return (
    <div className='col-xl-3 col-md-6 mb-4'>
      <div className='card border-left-primary shadow h-100 py-2'>
        <div className='card-body'>
          <div className='row no-gutters align-items-center'>
            <div className='col mr-2'>
              <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>
                Earnings ({month})
              </div>
              <div className='h5 mb-0 font-weight-bold text-gray-800'>
                KES. 40,000
              </div>
            </div>
            <div className='col-auto'>
              <i className='fas fa-calendar fa-2x text-gray-300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonthlyEarnings
