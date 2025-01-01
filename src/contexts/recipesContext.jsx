import { createContext, useEffect, useState } from 'react'
import recipesData from '../mocks/recipes.json' // Adjust the path as needed

export const recipesContext = createContext()

export const RecipesContextProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  const loadRecipes = async () => {
    setRecipes(recipesData)
  }

  useEffect(() => {
    loadRecipes()
  }, [])

  return (
    <recipesContext.Provider value={{ recipes }}>
      {children}
    </recipesContext.Provider>
  )
}
