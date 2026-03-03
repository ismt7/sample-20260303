import Calculator from './Calculator'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-white px-8 py-4 shadow">
        <h1 className="text-xl font-bold">サンプルアプリ</h1>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-8">
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
