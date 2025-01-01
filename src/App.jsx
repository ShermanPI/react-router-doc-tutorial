import './App.css'

function App () {
  return (
    <div>
      <h1>HOME - GRANDMA RECIPES</h1>

      <input type='text' name='search-bar' id='search-input' placeholder='Search Recipes' />

      <div className='recipes-container'>
        <div className='recipe-card'>
          <img src='https://picsum.photos/200/300' alt='recipe image' />
          Mac And Cheese
        </div>

        <div className='recipe-card'>
          <img src='https://picsum.photos/200/300' alt='recipe image' />
          Mac And Cheese
        </div>

        <div className='recipe-card'>
          <img src='https://picsum.photos/200/300' alt='recipe image' />
          Mac And Cheese
        </div>
      </div>
    </div>
  )
}

export default App
