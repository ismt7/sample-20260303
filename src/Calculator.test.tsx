import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from './Calculator'

function getDisplay() {
  return screen.getByLabelText('display').textContent
}

function clickButton(label: string) {
  fireEvent.click(screen.getByRole('button', { name: label }))
}

describe('Calculator', () => {
  it('renders the calculator heading', () => {
    render(<Calculator />)
    expect(screen.getByText('電卓')).toBeInTheDocument()
  })

  it('shows 0 as initial display', () => {
    render(<Calculator />)
    expect(getDisplay()).toBe('0')
  })

  it('inputs digits correctly', () => {
    render(<Calculator />)
    clickButton('1')
    clickButton('2')
    clickButton('3')
    expect(getDisplay()).toBe('123')
  })

  it('adds two numbers', () => {
    render(<Calculator />)
    clickButton('3')
    clickButton('add')
    clickButton('4')
    clickButton('equals')
    expect(getDisplay()).toBe('7')
  })

  it('subtracts two numbers', () => {
    render(<Calculator />)
    clickButton('9')
    clickButton('subtract')
    clickButton('3')
    clickButton('equals')
    expect(getDisplay()).toBe('6')
  })

  it('multiplies two numbers', () => {
    render(<Calculator />)
    clickButton('6')
    clickButton('multiply')
    clickButton('7')
    clickButton('equals')
    expect(getDisplay()).toBe('42')
  })

  it('divides two numbers', () => {
    render(<Calculator />)
    clickButton('8')
    clickButton('divide')
    clickButton('2')
    clickButton('equals')
    expect(getDisplay()).toBe('4')
  })

  it('shows error on division by zero', () => {
    render(<Calculator />)
    clickButton('5')
    clickButton('divide')
    clickButton('0')
    clickButton('equals')
    expect(getDisplay()).toBe('エラー')
  })

  it('clears the display', () => {
    render(<Calculator />)
    clickButton('5')
    clickButton('clear')
    expect(getDisplay()).toBe('0')
  })

  it('handles decimal input', () => {
    render(<Calculator />)
    clickButton('1')
    clickButton('decimal')
    clickButton('5')
    expect(getDisplay()).toBe('1.5')
  })
})
