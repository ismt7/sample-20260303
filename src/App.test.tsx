import { render, screen, within } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the header title', () => {
    render(<App />)
    expect(screen.getByText('サンプルアプリ')).toBeInTheDocument()
  })

  it('renders the footer with copyright text', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/サンプルアプリ/)).toBeInTheDocument()
  })
})
