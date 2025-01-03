import { useContext } from 'react'
import './App.css'

import { NavLink, Outlet } from 'react-router'
import { recipesContext } from './contexts/recipesContext'

export function MainLayout () {
  const { categories } = useContext(recipesContext)

  return (
    <main>
      <section className='categories-section'>
        {categories?.map((categoryName, index) =>
          <NavLink key={index} to={`?category=${categoryName}`}>
            {categoryName[0].toUpperCase() + categoryName.slice(1)}
          </NavLink>
        )}
      </section>
      {/* RECIPES HERE */}
      <Outlet />
    </main>
  )
}
