import './App.css'

import { NavLink, Outlet } from 'react-router'

export function MainLayout () {
  const categories = ['all', 'basics', 'holidays']

  return (
    <>
      <section className='categories-section'>
        {categories.map((categoryName, index) =>
          <NavLink key={index} to={`?category=${categoryName}`}>
            {categoryName[0].toUpperCase() + categoryName.slice(1)}
          </NavLink>
        )}
      </section>
      {/* RECIPES HERE */}
      <Outlet />
    </>
  )
}
