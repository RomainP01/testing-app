import React from 'react'
import {useParams} from 'react-router-dom'
import Person from '../components/Person'
import PropTypes from 'prop-types'

const ShowPerson = ({people}) => {
  const params = useParams()

  const person = people.find(person => person.id === params.id)

  return (
    <div className="card-container">
      {person ? <Person person={person} /> : <h1>Person not found :(</h1>}
    </div>
  )
}

ShowPerson.propTypes = {
  people: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      entity: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
      managerId: PropTypes.string,
      manager: PropTypes.string,
    }),
  ),
}
export default ShowPerson
