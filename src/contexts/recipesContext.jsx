import { createContext } from 'react'
import { useProducts } from '../hooks/useProducts'

export const recipesContext = createContext()

export const RecipesContextProvider = ({ children }) => {
  const { filteredRecipes, categories, recipes } = useProducts()

  return (
    <recipesContext.Provider value={{ filteredRecipes, categories, recipes }}>
      {children}
    </recipesContext.Provider>
  )
}
