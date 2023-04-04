import React from 'react'
import { render, screen } from '@testing-library/react'
import CharacterCard from '../src/components/CharacterCard/index'
import { MemoryRouter } from 'react-router-dom'

const mockProps = {
  id: 1,
  name: 'Luke Skywalker',
  birthYear: '19 BBY',
  hairColor: 'Blond',
  gender: 'Male',
  eyeColor: 'Blue',
}

describe('CharacterCard', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <CharacterCard {...mockProps} />
      </MemoryRouter>,
    )
  })

  it('matches snapshot', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterCard {...mockProps} />
      </MemoryRouter>,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the character name', () => {
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
  })

  it('renders the birth year', () => {
    expect(screen.getByText('Birth Year:')).toBeInTheDocument()
    expect(screen.getByText('19 BBY')).toBeInTheDocument()
  })

  it('renders the eye color', () => {
    expect(screen.getByText('Eye Color:')).toBeInTheDocument()
    expect(screen.getByText('Blue')).toBeInTheDocument()
  })

  it('renders the hair color', () => {
    expect(screen.getByText('Hair Color:')).toBeInTheDocument()
    expect(screen.getByText('Blond')).toBeInTheDocument()
  })

  it('renders the gender', () => {
    expect(screen.getByText('Gender:')).toBeInTheDocument()
    expect(screen.getByText('Male')).toBeInTheDocument()
  })

  it('renders a link to the character details page', () => {
    expect(screen.getByRole('link')).toHaveAttribute('href', '/characters/1')
  })
})
