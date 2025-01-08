import { useEffect, useState } from 'react'
import recipesData from '../mocks/recipes.json'
import { useSearchParams } from 'react-router'

export const useProducts = () => {
  const [recipes, setRecipes] = useState([])
  const [categories, setCategories] = useState([])
  const [searchParams] = useSearchParams()

  const searchParamCategory = searchParams.get('category')?.toLocaleLowerCase() || ''
  const searchQueryParam = searchParams.get('query')?.toLocaleLowerCase() || ''

  const filteredRecipes = recipes.filter((recipe) => {
    const recipeCategory = recipe.category.toLocaleLowerCase()
    const recipeName = recipe.name.toLocaleLowerCase()

    return (
      searchParamCategory
        ? recipeCategory === searchParamCategory ||
      searchParamCategory === 'all' ||
       !searchParamCategory
        : recipeName.includes(searchQueryParam)
    )
  })

  useEffect(() => {
    const categories = recipesData.map(recipe => recipe.category)
    setCategories(['All', ...new Set(categories)]);

    (async () => {
      setRecipes(recipesData)
    })()
  }, [])

  return { filteredRecipes, categories, recipes }
}
