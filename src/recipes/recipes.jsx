import { useContext } from 'react'
import { recipesContext } from '../contexts/recipesContext'
import './recipes.css'

export function Recipes () {
  const { filteredRecipes } = useContext(recipesContext)

  return (
    <section className='recipes-container'>
      {filteredRecipes?.map((recipe, index) =>
        <div className='recipe-card' key={index}>
          <img src='https://picsum.photos/200/300' alt='recipe image' />
          {recipe.name}
        </div>)}

    </section>
  )
}
