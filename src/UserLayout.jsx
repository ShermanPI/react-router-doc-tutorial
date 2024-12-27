import { Outlet } from 'react-router'

function UserLayout () {
  return (
    <div>
      <b>THIS IS THE MAIN LAYOUT</b>
      <div className='child'>
        <Outlet />
      </div>
    </div>
  )
}

export default UserLayout
