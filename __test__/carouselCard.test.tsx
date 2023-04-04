import React from 'react'
import { render, screen } from '@testing-library/react'
import CarouselCard from '../src/components/CarouselCard/index'

describe('CarouselCard', () => {
  const props = {
    image: 'https://example.com/image.jpg',
    title: 'Example title',
    subtitle: 'Example subtitle',
  }

  it('should render an image, title, and subtitle', () => {
    render(<CarouselCard {...props} />)

    const image = screen.getByRole('img')
    const title = screen.getByText(props.title)
    const subtitle = screen.getByText(props.subtitle)

    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
