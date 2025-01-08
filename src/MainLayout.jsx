import { useContext, useEffect, useRef } from 'react'
import './App.css'

import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router'
import { recipesContext } from './contexts/recipesContext'

export function MainLayout () {
  const { categories } = useContext(recipesContext)
  const [searchParams] = useSearchParams()
  const searchValueRef = useRef('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!searchParams.get('category')) {
      searchParams.set('category', 'All')
    }
  }, [])

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()} className='search-container'>
        <input
          onInput={(e) => {
            searchValueRef.current = e.target.value
          }}
          type='text'
          name='search'
          id='search-input'
          placeholder='SEARCH A RECIPE'
        />
        <button onClick={() => {
          navigate(`/search?query=${searchValueRef.current}`)
        }}
        >SEARCH
        </button>
      </form>
      <section className='categories-section'>
        {categories?.map((categoryName, index) =>
          <NavLink
            key={index} to={`/?category=${categoryName}`}
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
