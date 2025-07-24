
import Todo from './Todo'
import InProgress from './InProgress'
import Done from './Done'

export default function Main() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      <Todo />
      <InProgress />
      <Done />
    </div>
  )
}
