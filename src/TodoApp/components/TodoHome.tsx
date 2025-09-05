import TodoContextProvider from "../TodoContextProvider"
import Header from "../components/Header"
import Main from "../components/TodoMain"

export default function TodoHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <TodoContextProvider>
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          <Header />
          <Main />
        </div>
      </TodoContextProvider>
    </div>
  )
}
