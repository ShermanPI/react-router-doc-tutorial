import { Outlet } from 'react-router'
import './App.css'

function App () {
  return (
    <div>
      /App
      <div className='child'>
        <Outlet />
      </div>
    </div>
  )
}

export default App
