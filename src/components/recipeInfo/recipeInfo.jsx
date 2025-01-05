import { useContext } from 'react'
import { recipesContext } from '../../contexts/recipesContext'
import { useNavigate, useParams } from 'react-router'

export const RecipeInfo = ({ children }) => {
  const { recipes } = useContext(recipesContext)
  const { id: urlProductId } = useParams()
  const navigate = useNavigate()

  const recipe = recipes?.find((recipe) => {
    return (recipe.id).toString() === urlProductId
  })

  return (
    <>
      <button onClick={() => {
        navigate('/')
      }}
      > GO BACK
      </button>

      <div>
        <h1>{recipe?.name}</h1>
        <img src={recipe?.image} alt={`${recipe?.name} image`} />
        <p>{recipe?.description}</p>
      </div>

      <br />
      <hr />
      <h2>Ingredients</h2>
      <ul>
        {recipe?.ingredients.map((ingredient, index) =>
          <li key={index}>
            {ingredient}
          </li>)}
      </ul>
    </>
  )
}
