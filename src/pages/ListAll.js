import React, {useState} from 'react'
import Person from '../components/Person'
import SearchInput from '../components/SearchInput'
import PropTypes from 'prop-types'

const filterPerson = search => {
  const re = new RegExp(search, 'i')
  return person => re.test(person.firstname) || re.test(person.lastname)
}

const ListAll = ({people}) => {
  const [searchInputValue, setSearchInputValue] = useState('')

  const handleChange = event => {
    setSearchInputValue(event.target.value)
  }

  return (
    <>
      <div className="card-container">
        <SearchInput
          id="search"
          label="search by name"
          value={searchInputValue}
          onChange={handleChange}
        />
      </div>
      <div className="card-container">
        {people.filter(filterPerson(searchInputValue)).map(person => (
          <Person person={person} key={person.id} />
        ))}
      </div>
    </>
  )
}

ListAll.propTypes = {
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
  ).isRequired,
}

export default ListAll
