import { useContext } from 'react'
import { useSearchParams } from 'react-router'
import { recipesContext } from '../contexts/recipesContext'

export function Recipes () {
  const [searchParams] = useSearchParams()
  const recipes = useContext(recipesContext)

  console.log(recipes, '🥳🥳🥳')

  return (
    <>
      <div className='recipe-card'>
        {searchParams.get('category')}
        <img src='https://picsum.photos/200/300' alt='recipe image' />
        Mac And Cheese
      </div>
    </>
  )
}
