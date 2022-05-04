import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import BusinessPage from '../../pages/business/[id]'

describe('Calculator', () => {
  it('renders a calculator', () => {
    render(<BusinessPage />)
    // check if all components are rendered
    expect(screen.getByTestId('location')).toBeInTheDocument()
  })
})
