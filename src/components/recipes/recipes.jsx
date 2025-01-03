import { useContext } from 'react'
import './recipes.css'
import { useNavigate } from 'react-router'
import { recipesContext } from '../../contexts/recipesContext'

export function Recipes () {
  const { filteredRecipes } = useContext(recipesContext)
  const navigate = useNavigate()

  const navigateToRecipe = (id) => {
    console.log(id)
    navigate(`/recipe/${id}`)
  }

  return (
    <section className='recipes-container'>
      {filteredRecipes?.map((recipe) =>
        <div
          className='recipe-card' key={recipe.id} onClick={() => {
            navigateToRecipe(recipe.id)
          }}
        >
          <img src='https://picsum.photos/200/300' alt='recipe image' />
          {recipe.name}
        </div>)}

    </section>
  )
}
