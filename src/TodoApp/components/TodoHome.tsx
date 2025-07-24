import TodoContextProvider from "../TodoContextProvider";
import Header from "./Header";
import Main from "./TodoMain";


export default function TodoHome() {
  return (
    <div>
    <TodoContextProvider>
      <Header />
      <Main />
    </TodoContextProvider>
    </div>
  )
}
