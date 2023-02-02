import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: '1', name: 'Arto Hellas', number: '040-123456' },
    { id: '2', name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: '3', name: 'Dan Abramov', number: '12-43-234345' },
    { id: '4', name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }

    if (persons.some(person => person.name !== newName)) {
      setPersons(persons.concat(personObject))
      setNewName('')
    } else {
      window.alert(`${newName} is already added to phonebook`)
    }
  }

  const handleBookChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const Person = ({ person }) => {
    return (
      <li>{person.name} {person.number}</li>
    )
  }

  const Filter = ({ filter, handleFilterChange }) => {
    return (
      <div>
        filter shown with: <input onChange={handleFilterChange} value={filter} />
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={ }
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleBookChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>debug: {newName}</div>
      <ul>
        {persons.map(person =>
          <Person key={person.id} person={person} />
        )}
      </ul>
    </div>
  )

}

export default App