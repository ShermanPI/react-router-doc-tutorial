import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import { MainLayout } from './MainLayout.jsx'
import { RecipeInfo } from './components/recipeInfo/recipeInfo.jsx'
import { Recipes } from './components/recipes/recipes.jsx'
import { RecipesContextProvider } from './contexts/recipesContext.jsx'
import { SearchView } from './components/searchView/searchView.jsx'

// NOTEs 📚📚📚📚
// <BrowserRouter>: It is the high-level component that configures the navigation history and provides the routing context to the entire application. It should wrap the rest of your application.

// <Routes>: It is the container component for routes that, within itself, handles route matches and renders the corresponding component for a specific URL.
// <Routes> is where you define the specific routes within the context provided by <BrowserRouter>.

// <Route> define a route and its component to render
// and the <Routes> goal is to manage the routes defined with <Route> and render its component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RecipesContextProvider>

        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Recipes />} />
            <Route path='/search' element={<SearchView />} />
          </Route>

          <Route path='/recipe/:id' element={<RecipeInfo />} />

        </Routes>

      </RecipesContextProvider>
    </BrowserRouter>
  </StrictMode>
)
// Resumen: ¿Por qué React Router usa <Outlet />?
// 1 - Composición: Permite la creación de rutas jerárquicas y modulares, donde los componentes padres gestionan el espacio de las rutas hijas.
// 2 - Reutilización de Layouts: Hace posible tener una estructura común (encabezado, pie, etc.) y solo cargar las vistas correspondientes en el <Outlet />.
// 3 - Rendimiento: Mejora el rendimiento evitando la recarga completa de la página al cambiar de ruta, solo renderizando los componentes relevantes.
// 4 - Modularidad: Facilita la organización del código, permitiendo agregar nuevas rutas sin afectar otras partes de la aplicación.

// <Outlet> also helps in managing layouts where a portion of the page remains the same, such as headers or sidebars, \
// while other parts change based on the route, while saving resources
