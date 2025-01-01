import { createContext } from 'react'
import { useProducts } from '../hooks/useProducts'

export const recipesContext = createContext()

export const RecipesContextProvider = ({ children }) => {
  const { filterRecipes, recipes } = useProducts()

  return (
    <recipesContext.Provider value={{ recipes, filterRecipes }}>
      {children}
    </recipesContext.Provider>
  )
}
