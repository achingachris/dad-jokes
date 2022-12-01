const PageHeader = ({ pageName }) => {
  return (
    <div className='d-sm-flex align-items-center justify-content-between mb-4'>
      <h1 className='h3 mb-0 text-gray-800'>{pageName}</h1>
      <a
        href='/'
        className='d-none d-sm-inline-block btn btn-sm btn-warning shadow-sm'
      >
        <i className='fas fa-download fa-sm text-white-50' /> Quick Help
      </a>
    </div>
  )
}

export default PageHeader

PageHeader.defaultProps = {
  pageName: 'Page Header',
}
