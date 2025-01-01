import { useEffect, useState } from 'react'
import recipesData from '../mocks/recipes.json' //

export const useProducts = () => {
  const [recipes, setRecipes] = useState([])

  const filterRecipes = ({ category = 'all' }) => {
    const filteredRecipes = recipes.filter((recipe) => {
      const filterCategory = category.toLocaleLowerCase()
      const recipeCategory = recipe.category.toLocaleLowerCase()

      return recipeCategory === filterCategory || category === 'all' || !filterCategory
    })

    setRecipes(filteredRecipes)
  }

  const loadRecipes = async () => {
    setRecipes(recipesData)
  }

  useEffect(() => {
    loadRecipes()
  }, [])

  return { filterRecipes, recipes }
}
