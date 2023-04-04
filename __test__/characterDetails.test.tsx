import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CharacterDetails from '../src/components/CharacterDetails/index'

const mockCharacter = {
  id: 1,
  name: 'Luke Skywalker',
  birth_year: '19 BBY',
  gender: 'Male',
  hair_color: 'Blond',
  eye_color: 'Blue',
  height: 172,
  mass: 77,
  films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
}

describe('CharacterDetails', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CharacterDetails character={mockCharacter} />
      </MemoryRouter>,
    )
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterDetails character={mockCharacter} />
      </MemoryRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the character name', () => {
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
  })

  it('renders the character details', () => {
    expect(screen.getByText('Birth year:')).toBeInTheDocument()
    expect(screen.getByText('19 BBY')).toBeInTheDocument()
    expect(screen.getByText('gender:')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()
    expect(screen.getByText('Eye color:')).toBeInTheDocument()
    expect(screen.getByText('Blue')).toBeInTheDocument()
    expect(screen.getByText('Hair color:')).toBeInTheDocument()
    expect(screen.getByText('Blond')).toBeInTheDocument()
    expect(screen.getByText('Height:')).toBeInTheDocument()
    expect(screen.getByText('172')).toBeInTheDocument()
    expect(screen.getByText('Mass:')).toBeInTheDocument()
    expect(screen.getByText('77')).toBeInTheDocument()
    expect(screen.getByText('Films Featured:')).toBeInTheDocument()
    expect(screen.getByText('A New Hope')).toBeInTheDocument()
    expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument()
    expect(screen.getByText('Return of the Jedi')).toBeInTheDocument()
  })
})
