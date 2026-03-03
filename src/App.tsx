import Calculator from './Calculator'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 px-8 py-4 shadow">
        <h1 className="text-xl font-bold">サンプルアプリ</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="mt-8">
          <Calculator />
        </div>
      </main>
      <footer className="bg-gray-800 px-8 py-4 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} サンプルアプリ</p>
      </footer>
    </div>
  )
}

export default App
