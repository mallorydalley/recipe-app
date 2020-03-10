import React from 'react';
import IndividualRecipe from './IndividualRecipe'


class AllRecipes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            allRecipes: this.props.all,
            query: '',
            isSearching: false
        }
    }

    handleInput = (val) => {
        this.setState({query: val})
        val
        ? (
            this.setState({isSearching: true})
        )
        : (
            this.setState({isSearching: false})
        )
    }
    toggleSearching = () => {
        this.setState({isSearching: !this.state.isSearching})
    }

    render(){
        const {allRecipes} = this.state
        
        let showRecipes = allRecipes
            .filter((ele, idx) => {
                return ele.recipe_name.toLowerCase().includes(this.state.query)
            })
            .map((ele, idx) => {
                return <IndividualRecipe
                    key={ele.id}
                    id={ele.id}
                    allOfThem={ele}
                    recipeName={ele.recipe_name}
                    image={ele.image} 
                    details={ele.details}
                    saveRecipe={this.props.saveRecipe}
                />
        })

        return (
            <div>
            {/* Search Bar */}
                {this.state.isSearching
                    ? (
                <div>
                    <div className="container">
                        {/*Heading*/}
                        <h2 className="heading">Find Your Next Favorite Dish</h2>
                        <div className='search-box'>
                            <input className='search-label'
                                value={this.state.query}
                                placeholder='Search...'
                                id='search-input'
                                type='text'
                                onChange={e => this.handleInput(e.target.value)}
                            />
                        </div>
                    </div> 
                    
                     <div className='show-recipes'>
                        {showRecipes}
                    </div>
                </div>
                )
                : (
                        <div className="container">
                            {/*Heading*/}
                            <h2 className="heading">Find Your Next Favorite Dish</h2>
                            <div className='search-box'>
                                <input className='search-label'
                                    value={this.state.query}
                                    placeholder='Search...'
                                    id='search-input'
                                    type='text'
                                    onChange={e => this.handleInput(e.target.value)}
                                />
                            </div>
                        </div> 
                )}
                    
                
            </div>
        )
    }
}

export default AllRecipes;