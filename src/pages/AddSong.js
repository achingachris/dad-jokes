const AddSong = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-8 col-md-8'>
            {/* song title */}
            <label htmlFor='songtitle' className='form-label'>
              Song Title
            </label>
            <input
              type='password'
              id='songtitle'
              className='form-control'
              aria-describedby='passwordHelpBlock'
            />
            <div id='passwordHelpBlock' className='form-text'>
              Enter the name of the song here
            </div>
          </div>

          {/*  */}
          <div className='col-lg-4 col-md-4'></div>
        </div>
      </div>
    </div>
  )
}

export default AddSong
