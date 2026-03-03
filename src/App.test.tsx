import { render, screen, fireEvent, within } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header title', () => {
    render(<App />)
    expect(screen.getByText('サンプルアプリ')).toBeInTheDocument()
  })

  it('renders the Vite + React heading', () => {
    render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is/i })
    expect(button).toHaveTextContent('count is 0')
    fireEvent.click(button)
    expect(button).toHaveTextContent('count is 1')
  })

  it('renders the footer with copyright text', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/サンプルアプリ/)).toBeInTheDocument()
  })
})
