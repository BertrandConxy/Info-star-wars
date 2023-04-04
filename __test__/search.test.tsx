import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Search from '../src/components/Search/index'
import { MemoryRouter } from 'react-router-dom'

describe('Search', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Search handleSearch={() => {}} />
      </MemoryRouter>,
    )
  })
  it('should render the search input and button', () => {
    const { getAllByPlaceholderText, getAllByRole } = render(
      <Search handleSearch={() => {}} />,
    )
    expect(
      getAllByPlaceholderText('Search character...')[0],
    ).toBeInTheDocument()
    expect(getAllByRole('submit')[0]).toBeInTheDocument()
  })
})
