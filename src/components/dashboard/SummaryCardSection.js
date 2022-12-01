import MonthlyEarnings from './summarycards/MonthlyEarnings'
import YearEarnings from './summarycards/YearEarnings'
import Events from './summarycards/Events'
import Loans from './summarycards/Loans'

const SummaryCardSection = () => {
  return (
    <section className='row'>
      <MonthlyEarnings />
      <YearEarnings />
      <Events />
      <Loans />
    </section>
  )
}

export default SummaryCardSection
