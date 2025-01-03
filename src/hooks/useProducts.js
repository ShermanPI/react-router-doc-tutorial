import { useEffect, useState } from 'react'
import recipesData from '../mocks/recipes.json'
import { useSearchParams } from 'react-router'

export const useProducts = () => {
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])
  const [searchParams] = useSearchParams()

  const searchParamCategory = searchParams.get('category')?.toLocaleLowerCase() || ''

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeCategory = recipe.category.toLocaleLowerCase()

    return recipeCategory === searchParamCategory || searchParams.category === 'all' || !searchParamCategory
  })

  useEffect(() => {
    const categories = recipesData.map(recipe => recipe.category)
    setCategories([...new Set(categories)]);

    (async () => {
      setRecipes(recipesData)
    })()
  }, [])

  return { filteredRecipes, categories }
}
