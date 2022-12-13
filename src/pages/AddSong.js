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
            <input type='text' id='songtitle' className='form-control' />
            <div id='' className='form-text'>
              Enter the name of the song here
            </div>
          </div>
          <div className='col-lg-8 col-md-8 mt-3'>
            {/* song title */}
            <label htmlFor='releasedate' className='form-label'>
              Release Date
            </label>
            <input type='date' id='releasedate' className='form-control' />
            <div id='' className='form-text'>
              Enter the release date of the song here
            </div>
          </div>

          {/*  */}
          <div className='col-lg-4 col-md-4'>
            <div className='mb-4'>
              <label className='text-dark mb-2' htmlFor='fullName'>
                Choose Music Genre
              </label>
              <div id='id_work_days'>
                <label className='m-3'>
                  <input type='checkbox' name='work_days' defaultValue={1} />
                  <span>rap</span>
                </label>
                <label className='m-3'>
                  <input type='checkbox' name='work_days' defaultValue={2} />
                  <span>bongo</span>
                </label>
                <label className='m-3'>
                  <input type='checkbox' name='work_days' defaultValue={3} />
                  <span>drill</span>
                </label>
                <label className='m-3'>
                  <input type='checkbox' name='work_days' defaultValue={4} />
                  <span>gengetone</span>
                </label>
                <label className='m-3'>
                  <input type='checkbox' name='work_days' defaultValue={5} />
                  <span>gospel</span>
                </label>
                <label className='m-3'>
                  <input type='checkbox' name='work_days' defaultValue={6} />
                  <span>traditional</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSong
