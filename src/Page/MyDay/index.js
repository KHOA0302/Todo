import PageLayout from '~/components/PageLayout'
import { MyDayIcon } from '~/Icons'

function MyDay() {
  const today = new Date().toISOString().slice(0, 10) //with YYYY-MM-DD format
  return (
    <PageLayout type='my-day' Icon={MyDayIcon} title='My day' today={today} />
  )
}

export default MyDay
