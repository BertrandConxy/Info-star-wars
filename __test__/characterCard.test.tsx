import React from 'react'

import { render, screen } from '@testing-library/react'
import CharacterCard from '../src/components/CharacterCard/index'

const mockProps = {
  id: 1,
  name: 'Luke Skywalker',
  birthYear: '19 BBY',
  hairColor: 'blond',
  gender: 'male',
  eyeColor: 'blue',
}

describe('CharacterCard component', () => {
  it('should render correctly', () => {
    const { container } = render(
      <CharacterCard
        birthYear={mockProps.birthYear}
        eyeColor={mockProps.eyeColor}
        gender={mockProps.gender}
        hairColor={mockProps.hairColor}
        name={mockProps.name}
        id={mockProps.id}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('should display correct data', () => {
    render(
      <CharacterCard
        birthYear={mockProps.birthYear}
        eyeColor={mockProps.eyeColor}
        gender={mockProps.gender}
        hairColor={mockProps.hairColor}
        name={mockProps.name}
        id={mockProps.id}
      />,
    )
    expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument
    expect(screen.getByText(/birth year:/i)).toBeInTheDocument()
    expect(screen.getByText(/19 bby/i)).toBeInTheDocument()
    expect(screen.getByText(/eye color:/i)).toBeInTheDocument()
    expect(screen.getByText(/blue/i)).toBeInTheDocument()
    expect(screen.getByText(/hair color:/i)).toBeInTheDocument()
    expect(screen.getByText(/blond/i)).toBeInTheDocument()
    expect(screen.getByText(/gender:/i)).toBeInTheDocument()
    expect(screen.getByText(/male/i)).toBeInTheDocument()
  })
})
