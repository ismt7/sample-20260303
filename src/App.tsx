import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Calculator from './Calculator'

const reactLogoClass = [
  'h-24 p-4 transition-all duration-300',
  'hover:drop-shadow-[0_0_2em_#61dafbaa]',
  'animate-spin [animation-duration:20s]',
].join(' ')

const buttonClass = [
  'rounded-lg border border-transparent px-5 py-2',
  'text-base font-medium bg-gray-200 text-gray-800 cursor-pointer',
  'hover:border-indigo-500 focus:outline-[4px] focus:outline-auto',
  'transition-colors duration-300 mb-4',
].join(' ')

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-white px-8 py-4 shadow">
        <h1 className="text-xl font-bold">サンプルアプリ</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="flex gap-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-24 p-4 hover:drop-shadow-[0_0_2em_#646cffaa] transition-all duration-300" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className={reactLogoClass} alt="React logo" />
          </a>
        </div>
        <h2 className="text-5xl font-bold mb-6">Vite + React</h2>
        <div className="bg-white rounded-lg p-8 mb-6 text-center shadow">
          <button onClick={() => setCount((count) => count + 1)} className={buttonClass}>
            count is {count}
          </button>
          <p>
            Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
        <div className="mt-8">
          <Calculator />
        </div>
      </main>
      <footer className="bg-white px-8 py-4 text-center text-gray-500 text-sm shadow-inner">
        <p>&copy; {new Date().getFullYear()} サンプルアプリ</p>
      </footer>
    </div>
  )
}

export default App
