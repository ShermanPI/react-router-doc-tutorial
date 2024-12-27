# Recipe Explorer

## 🌟 **Objective**
Create a web application that allows users to explore, filter, and view detailed recipes. This project will leverage **React Router v7** features for navigation, dynamic routes, and nested layouts.

---

## ✨ **Features**

### 1. **Home Page**
- A landing page introducing the app and featuring popular recipes.
- Includes:
  - A "Search Recipes" bar.
  - A "Browse by Category" section.

---

### 2. **Recipe Categories**
- A page displaying different categories (e.g., Appetizers, Main Courses, Desserts).
- Each category links to a list of recipes.

---

### 3. **Recipe Details Page**
- A dynamic route: `/recipe/:id`.
- Displays:
  - Recipe details (e.g., ingredients, steps, and an image).
  - Fetches data based on the `id` parameter.

---

### 4. **Search Results Page**
- A route: `/search`.
- Lists recipes based on user input.
- Uses URL query parameters for search terms (e.g., `/search?query=pasta`).

---

### 5. **About Page**
- A static page providing information about the app.

---

### 6. **404 Page**
- A custom "Page Not Found" page for undefined routes.

---

### 7. **Nested Layouts**
- Shared **header** and **footer** across pages using nested routes.
- Includes sub-navigation for categories within the Recipe Categories page.

---

## 🎯 **Learning Points**
- **Dynamic Routing:** Use `useParams` for dynamic recipe details.
- **Nested Routes:** Create layouts with `Outlet` for shared UI components.
- **Query Parameters:** Use `useSearchParams` for search functionality.
- **Programmatic Navigation:** Use `useNavigate` for redirects and navigation.
- **Lazy Loading:** Implement `React.lazy` to load pages dynamically for better performance.

---

## 🌟 **Bonus Features**
- Add user authentication (e.g., login to save favorite recipes).
- Include a **dark mode toggle**.
- Integrate animations using **Framer Motion** for route transitions.
