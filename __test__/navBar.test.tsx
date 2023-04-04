import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import NavBar from '../src/components/NavBar/index'
import { MemoryRouter } from 'react-router-dom'

describe('NavBar', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NavBar Searched={(string) => {}} />
      </MemoryRouter>,
    )
  })
  it('should render the brand link correctly', () => {
    expect(screen.getByText('Star Wars')).toBeInTheDocument()
  })

  //   it('should toggle the menu when the hamburger button is clicked', () => {
  //     render(<NavBar Searched={() => {}} />);
  //     expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  //     fireEvent.click(screen.getByRole('button', { name: 'Toggle Navigation' }));
  //     expect(screen.getByRole('navigation')).toBeInTheDocument();
  //     fireEvent.click(screen.getByRole('button', { name: 'Close Navigation' }));
  //     expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  //   });

  //   it('should close the menu when the close button is clicked', () => {
  //     render(<NavBar Searched={() => {}} />);
  //     fireEvent.click(screen.getByRole('button', { name: 'Toggle Navigation' }));
  //     expect(screen.getByRole('navigation')).toBeInTheDocument();
  //     fireEvent.click(screen.getByRole('button', { name: 'Close Navigation' }));
  //     expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  //   });

  //   it('should render the links correctly', () => {
  //     render(<NavBar Searched={() => {}} />);
  //     expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  //     expect(screen.getByRole('link', { name: 'Characters' })).toHaveAttribute('href', '/characters');
  //     expect(screen.getByRole('link', { name: 'Planets' })).toHaveAttribute('href', '/planets');
  //   });

  //   it('should render the search component correctly', () => {
  //     render(<NavBar Searched={() => {}} />);
  //     expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  //   });
})
