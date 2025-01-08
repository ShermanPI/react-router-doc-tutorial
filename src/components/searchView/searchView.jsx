import { useSearchParams } from 'react-router'
import './searchView.css'
import { Recipes } from '../recipes/recipes'

export const SearchView = () => {
  const [searchParams] = useSearchParams()

  return (
    <div>
      <h1>
        Results for:
        <span className='result-name'>
          {searchParams.get('query')}
          <Recipes />
        </span>
      </h1>
    </div>
  )
}
