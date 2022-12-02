const Table = ({ children, tableName }) => {
  return (
    <div className='card shadow mb-4'>
      <div className='card-header py-3'>
        <h6 className='m-0 font-weight-bold text-primary'>{tableName}</h6>
      </div>
      <div className='card-body'>
        <div className='table-responsive'>
          <table
            className='table table-bordered'
            id='dataTable'
            width='100%'
            cellspacing='0'
          >
            {children}
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table

Table.defaultProps = {
  tableName: 'Table Name',
}
