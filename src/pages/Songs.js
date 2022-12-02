import PageHeader from '../components/shared/PageHeader'
import SongsTable from '../components/songs/SongsTable'

const Songs = () => {
  return (
    <div>
      <PageHeader pageName='My Songs' />
      <p class='mb-4 text-muted'>
        List of all your songs listed on the platform
      </p>
      <SongsTable />
    </div>
  )
}

export default Songs
