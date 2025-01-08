import { Outlet } from 'react-router'
import { Header } from './components/header/header'
import './App.css'

export function MainLayout () {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  )
}
