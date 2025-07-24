import TodoContextProvider from "../TodoContextProvider";
import Header from "./Header";
import Main from "./TodoMain";


export default function TodoHome() {
  return (
    <div className="bg-gray-600 min-h-screen p-4">
    <TodoContextProvider>
      <Header />
      <Main />
    </TodoContextProvider>
    </div>
  )
}
