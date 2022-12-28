const BookingData = ({ name, description, email }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{description}</td>
      <td>Date</td>
      <td>
        <a href='/'>View</a>
      </td>
    </tr>
  )
}

export default BookingData

BookingData.defaultProps = {
  name: 'Booking Title',
  description: 'Booking Description',
  email: 'client@mail.com',
}
