import { Outlet } from 'react-router'
import { Header } from './components/header/header'
import './App.css'
import { Footer } from './footer/Footer'

export function MainLayout () {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}
