import React from 'react';
import '../App.css';

class IndividualSavedRecipe extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isEditing: false,
            editDetails: this.props.details
        }
    }
    toggleEdit = () => {
        this.setState({isEditing: !this.state.isEditing})
    }
    handleEditDetails = (val, i) => {
        this.state.editDetails[i] = val
    }
    render(){
        const { id, recipeName, image, details, recipe, editRecipe, deleteRecipe } = this.props

        // const listedIngredients = Array.from(details)

        // <ol className='ingredients'>
        //     {details.map((ele, i) => (
        //         <li
        //             className='ingredient'
        //             key={i}>{ele}
        //         </li>
        //     ))}
        // </ol>
        
        console.log(this.state.editDetails)
        return (
            
            <div className='masonry'>

                <div className='individual-recipe' key={id}>
                    <div className='image-sizing'>
                        <img className='images' src={image} alt={recipeName} />
                    </div>
                    <h2>{recipeName}</h2>
                
                    {this.state.isEditing
                    ? (
                    <div>
                        {/* <textarea
                            defaultValue={details}
                            onChange={e => this.handleEditDetails(e.target.value)} 
                        >
                        </textarea> */}
                                <ol className='ingredients'>
                                    {details.map((ele, i) => {
                                        // console.log(ele)
                                        return (<input
                                            className='edit-input'
                                            key={i}
                                            onChange={e => this.handleEditDetails(e.target.value, i)} 
                                            defaultValue={ele}
                                        />)
                                    })}
                                </ol> 
                    
                        <button 
                            onClick={() => { 
                                // console.log(recipe.id) 
                                // console.log(recipe)
                                editRecipe(recipe.id, this.state.editDetails)
                                this.toggleEdit()
                                        console.log(details)
                        }}
                        >
                            Save
                        </button>
                    </div>
                    )
                    : (
                        <div>
                                <ol className='ingredients'>
                                    {details.map((ele, i) => {
                                        // console.log(ele)

                                        return (<li
                                            className='ingredient'
                                            key={i}
                                        >
                                            {ele}
                                        </li>)
                                    })}                         
                                </ol>  
                                {/* <p>{details}</p> */}
                            <div className='buttons'>
                                <button 
                                    className='delete-button'
                                    onClick={() => deleteRecipe(recipe.id)}>
                                        Delete
                                </button>
                                <button onClick={this.toggleEdit}>Edit</button>
                            </div>
                        </div>
                    )
                    }
                    
                    
                </div> 
            </div>
            
        )
    }
}

export default IndividualSavedRecipe