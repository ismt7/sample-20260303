import { useState } from 'react'

type Operator = '+' | '-' | '*' | '/'

const buttonBase = [
  'flex items-center justify-center rounded-lg text-xl font-medium',
  'h-14 cursor-pointer transition-colors duration-150',
  'focus:outline-[4px] focus:outline-auto',
].join(' ')

const numBtn = `${buttonBase} bg-gray-700 hover:bg-gray-600`
const opBtn = `${buttonBase} bg-indigo-600 hover:bg-indigo-500`
const eqBtn = `${buttonBase} bg-green-600 hover:bg-green-500 col-span-2`
const clearBtn = `${buttonBase} bg-red-600 hover:bg-red-500 col-span-2`
const zeroBtn = `${numBtn} col-span-2`

function calculate(a: number, op: Operator, b: number): number {
  switch (op) {
    case '+': return a + b
    case '-': return a - b
    case '*': return a * b
    case '/': return b !== 0 ? a / b : NaN
  }
}

function Calculator() {
  const [display, setDisplay] = useState('0')
  const [operand, setOperand] = useState<number | null>(null)
  const [operator, setOperator] = useState<Operator | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? digit : display + digit)
    }
  }

  const handleDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
      return
    }
    if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperator = (op: Operator) => {
    const current = parseFloat(display)
    if (operand !== null && operator && !waitingForOperand) {
      const result = calculate(operand, operator, current)
      const resultStr = isNaN(result) ? 'エラー' : String(parseFloat(result.toPrecision(12)))
      setDisplay(resultStr)
      setOperand(isNaN(result) ? null : result)
    } else {
      setOperand(current)
    }
    setOperator(op)
    setWaitingForOperand(true)
  }

  const handleEquals = () => {
    const current = parseFloat(display)
    if (operand !== null && operator) {
      const result = calculate(operand, operator, current)
      const resultStr = isNaN(result) ? 'エラー' : String(parseFloat(result.toPrecision(12)))
      setDisplay(resultStr)
      setOperand(null)
      setOperator(null)
      setWaitingForOperand(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setOperand(null)
    setOperator(null)
    setWaitingForOperand(false)
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 w-72 shadow-lg">
      <h2 className="text-lg font-bold mb-4 text-center">電卓</h2>
      <div
        aria-label="display"
        className="bg-gray-900 rounded-lg px-4 py-3 mb-4 text-right text-2xl font-mono break-all min-h-[3rem]"
      >
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button aria-label="clear" className={clearBtn} onClick={handleClear}>C</button>
        <button aria-label="divide" className={opBtn} onClick={() => handleOperator('/')}>÷</button>
        <button aria-label="multiply" className={opBtn} onClick={() => handleOperator('*')}>×</button>
        <button aria-label="7" className={numBtn} onClick={() => handleDigit('7')}>7</button>
        <button aria-label="8" className={numBtn} onClick={() => handleDigit('8')}>8</button>
        <button aria-label="9" className={numBtn} onClick={() => handleDigit('9')}>9</button>
        <button aria-label="subtract" className={opBtn} onClick={() => handleOperator('-')}>−</button>
        <button aria-label="4" className={numBtn} onClick={() => handleDigit('4')}>4</button>
        <button aria-label="5" className={numBtn} onClick={() => handleDigit('5')}>5</button>
        <button aria-label="6" className={numBtn} onClick={() => handleDigit('6')}>6</button>
        <button aria-label="add" className={opBtn} onClick={() => handleOperator('+')}>+</button>
        <button aria-label="1" className={numBtn} onClick={() => handleDigit('1')}>1</button>
        <button aria-label="2" className={numBtn} onClick={() => handleDigit('2')}>2</button>
        <button aria-label="3" className={numBtn} onClick={() => handleDigit('3')}>3</button>
        <button aria-label="0" className={zeroBtn} onClick={() => handleDigit('0')}>0</button>
        <button aria-label="decimal" className={numBtn} onClick={handleDecimal}>.</button>
        <button aria-label="equals" className={eqBtn} onClick={handleEquals}>=</button>
      </div>
    </div>
  )
}

export default Calculator
