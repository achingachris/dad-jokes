const Loans = () => {
  return (
    <div className='col-xl-3 col-md-6 mb-4'>
      <div className='card border-left-warning shadow h-100 py-2'>
        <div className='card-body'>
          <div className='row no-gutters align-items-center'>
            <div className='col mr-2'>
              <div className='text-xs font-weight-bold text-warning text-uppercase mb-1'>
                Loan
              </div>
              <div className='h5 mb-0 font-weight-bold text-gray-800'>
                KES. 152,000
              </div>
            </div>
            <div className='col-auto'>
              <i className='fas fa-comments fa-2x text-gray-300' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loans
