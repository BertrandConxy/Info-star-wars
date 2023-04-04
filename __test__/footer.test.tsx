import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../src/components/Footer/index'
import { MemoryRouter } from 'react-router-dom'

describe('Search', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    )
  })
  it('should render the search input and button', () => {
    expect(screen.getByText('Star wars')).toBeInTheDocument()
    expect(
      screen.getByText('Copyright All Rights Reserved 2023'),
    ).toBeInTheDocument()
  })
})
