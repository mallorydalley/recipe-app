const savedRecipes = [];
let id = 0;

module.exports = {
    getRecipes: (req, res) => {
        res.status(200).send(savedRecipes)
    }, 
    saveRecipe: (req, res) => {
        // console.log(req.body) 
        const {recipe} = req.body
        recipe.id = id
        id++ 
        savedRecipes.push(recipe)
        res.status(200).send(savedRecipes)
    },
    editRecipe: (req, res) => {
        const {id} = req.params
        const {details} = req.body
        const index = savedRecipes.findIndex(ele => ele.id === +id)

        console.log(savedRecipes)
        console.log(id)
        console.log(index)
        savedRecipes[index].details = details
        console.log(savedRecipes)
        res.status(200).send(savedRecipes)
    },
    deleteRecipe: (req, res) => {
        const {id} = req.params
        const index = savedRecipes.findIndex(ele => ele.id === +id)
        savedRecipes.splice(index, 1)
        res.status(200).send(savedRecipes)
    }
}