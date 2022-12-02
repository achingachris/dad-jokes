import PageHeader from '../components/shared/PageHeader'
import SummaryCardSection from '../components/dashboard/SummaryCardSection'
import EventsSection from '../components/dashboard/EventsSection'
import BookingsSection from '../components/dashboard/BookingsSection'

const Dashboard = () => {
  return (
    <div>
      <PageHeader pageName='Dashboard' />
      <SummaryCardSection />
      <EventsSection />
      <BookingsSection />
    </div>
  )
}

export default Dashboard
