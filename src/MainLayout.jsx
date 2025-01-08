import { useContext, useEffect, useState } from 'react'
import './App.css'

import { NavLink, Outlet, useNavigate, useSearchParams } from 'react-router'
import { recipesContext } from './contexts/recipesContext'

export function MainLayout () {
  const { categories } = useContext(recipesContext)
  const [searchParams] = useSearchParams()
  const [searchValue, setSearchValue] = useState(searchParams.get('query') || '')
  const navigate = useNavigate()

  useEffect(() => {
    if (!searchParams.get('category') && !searchParams.get('query')) {
      searchParams.set('category', 'All')
    }
  }, [])

  useEffect(() => {
    setSearchValue(searchParams.get('query') || '')
  }, [searchParams.get('query')])

  console.log('render')

  return (
    <main>
      <form onSubmit={(e) => e.preventDefault()} className='search-container'>
        <input
          onInput={(e) => {
            setSearchValue(e.target.value)
          }}
          type='text'
          name='search'
          id='search-input'
          placeholder='SEARCH A RECIPE'
          value={searchValue}
        />
        <button onClick={() => {
          navigate(`/search?query=${searchValue}`)
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
