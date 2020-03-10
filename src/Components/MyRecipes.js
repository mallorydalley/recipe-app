import React from 'react';
import IndividualSavedRecipe from './IndividualSavedRecipe'

class MyRecipes extends React.Component{
    // console.log(props)
    constructor(props){
        super(props)
        this.state = {
            query: ''
        }
    }
    render(){
    const {savedRecipes} = this.props
    return(
        <div>
            
            <div className="my-recipe-container">
                <h2 className="heading">My Recipes</h2>
                <div className='search-box'>
                    {/* <input className='search-label'
                        value={this.state.query}
                        placeholder='Search...'
                        id='search-input'
                        type='text'
                        onChange={e => this.handleInput(e.target.value)}
                    /> */}
                </div>
            </div> 

            <div className='show-recipes'>
                {savedRecipes.map((recipe, idx) => { 
                    return <IndividualSavedRecipe 
                        key={idx}
                        id={recipe.id}
                        recipe={recipe}
                        recipeName={recipe.recipe_name}
                        image={recipe.image}
                        details={recipe.details}
                        editRecipe={this.props.editRecipe}
                        deleteRecipe={this.props.deleteRecipe}
                        
                    />
                    
                })} 
            </div>
        </div>
    )
    }
}

export default MyRecipes;