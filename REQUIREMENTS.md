# Recipe Explorer Checklist

## 🌟 **Objective**
- [x] Create a web application to explore, filter, and view detailed recipes.
- [x] Leverage **React Router v7** features for navigation, dynamic routes, and nested layouts.

---

## ✨ **Features**

### 1. **Home Page**
- [x] Design a landing page introducing the app.
- [x] Feature popular recipes.
- [x] Include:
  - [x] A "Search Recipes" bar.
  - [x] A "Browse by Category" section.

---

### 2. **Recipe Categories**
- [x] Create a page displaying different categories (e.g., Appetizers, Main Courses, Desserts).
- [x] Link each category to a list of recipes.

---

### 3. **Recipe Details Page**
- [x] Implement a dynamic route: `/recipe/:id`.
- [x] Display:
  - [x] Recipe details (e.g., ingredients, steps, and an image).
  - [x] Fetch data based on the `id` parameter. (here i just used the .find method on the recipes to simulate it)

---

### 4. **Search Results Page**
- [x] Create a route: `/search`.
- [x] List recipes based on user input.
- [x] Use URL query parameters for search terms (e.g., `/search?query=pasta`).

---

### 5. **About Page**
- [x] Design a static page providing information about the app.

---

### 6. **404 Page**
- [x] Build a custom "Page Not Found" page for undefined routes.

---

### 7. **Nested Layouts**
- [x] Add shared **header** and **footer** across pages using nested routes.
- [x] Include sub-navigation for categories within the Recipe Categories page.

---

## 🎯 **Learning Points**
- [x] Use `useParams` for dynamic recipe details.
- [x] Create layouts with `Outlet` for shared UI components.
- [x] Use `useSearchParams` for search functionality.
- [x] Use `useNavigate` for redirects and navigation.
- [ ] Implement `React.lazy` to load pages dynamically for better performance. (https://youtube.com/shorts/yWa8FXDimbw?si=NN0MhjxqImh-JmbL)

---

## 🌟 **Bonus Features**
- [ ] Add user authentication (e.g., login to save favorite recipes).
- [ ] Include a **dark mode toggle**.
- [ ] Integrate animations using **Framer Motion** for route transitions.
