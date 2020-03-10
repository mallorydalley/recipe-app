import React from 'react';
import '../App.css';

function IndividualRecipe(props){
    
    const {id, recipeName, image, details, allOfThem} = props
    
    return (
       <div className='masonry'>
            <div className='individual-recipe' key={id}>
                <div className='image-sizing'>
                    <img className='images' src={image} alt={recipeName}/>
                </div>
                <h2>{recipeName}</h2>
                <ol className='ingredients'>
                    {details.map((ele, i) => (
                        <li 
                            className='ingredient'
                            key={i}>{ele}</li>
                    ))}
                </ol>
                <button onClick={() => props.saveRecipe(allOfThem)}>Save Recipe</button>
            </div>
        </div>
            
       
    )
}

export default IndividualRecipe