import { useContext, useEffect } from 'react'
import './App.css'

import { NavLink, Outlet, useSearchParams } from 'react-router'
import { recipesContext } from './contexts/recipesContext'

export function MainLayout () {
  const { categories } = useContext(recipesContext)
  const [searchParams] = useSearchParams()

  useEffect(() => {
    if (!searchParams.get('category')) {
      searchParams.set('category', 'All')
    }
  }, [])

  return (
    <main>
      <div className='search-container'>
        <input type='text' name='search' id='search-input' placeholder='SEARCH A RECIPE' />
        <button>SEARCH</button>
      </div>
      <section className='categories-section'>
        {categories?.map((categoryName, index) =>
          <NavLink
            key={index} to={`?category=${categoryName}`}
            className={() =>
              `${searchParams.get('category') === categoryName ? 'category-link-active' : ''} category-link`}
          >
            {categoryName[0].toUpperCase() + categoryName.slice(1)}
          </NavLink>
        )}
      </section>
      <Outlet />
    </main>
  )
}
