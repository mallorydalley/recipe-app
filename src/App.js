import React from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/Header';
import AllRecipes from './Components/AllRecipes';
import MyRecipes from './Components/MyRecipes'
import recipeData from './recipe-data.json'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      savedRecipes: [],
      data: recipeData,
      showThisOrThat: false
    }
  }

  componentDidMount() {
    axios.get(`/api/recipe-data`)
      .then(response => {
        this.setState({ savedRecipes: response.data })
      })
      .catch(error => console.log(error))
  }

  saveRecipe = (recipe) => {
    axios.post(`/api/recipe-data`, { recipe })
      .then(response => {
        toast.success("Saved to My Recipes");
        this.setState({ savedRecipes: response.data })
      })
      .catch(error => console.log(error))
  }

  editRecipe = (id, newDetails) => {
    axios.put(`/api/recipe-data/${id}`, { details: newDetails })
      .then(response => {
        this.setState({ savedRecipes: response.data })
      })
      .catch(error => console.log(error))
  }

  deleteRecipe = (id) => {
    axios.delete(`/api/recipe-data/${id}`)
      .then(response => {
        this.setState({ savedRecipes: response.data })
      })
      .catch(error => console.log(error))
  }
  displayToggle = () => {
    this.setState({ showThisOrThat: !this.state.showThisOrThat })
  }

  render() {
    const { savedRecipes } = this.state

    return (
      <div>
        {this.state.showThisOrThat
          ? (
            <div className='App'>
              <Header displayToggle={this.displayToggle} />
              <MyRecipes
                editRecipe={this.editRecipe}
                deleteRecipe={this.deleteRecipe}
                savedRecipes={savedRecipes}

              />
            </div>
          )
          : (
            <div className="App">
              <Header displayToggle={this.displayToggle} />

              <AllRecipes
                all={this.state.data}
                saveRecipe={this.saveRecipe}
              />
            </div >
          )
        }
        <ToastContainer />
      </div>
    
    );
  }
}

export default App;
