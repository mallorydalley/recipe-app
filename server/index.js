const express = require('express');
const cors = require('cors');
const recipeCtrl = require('./controllers/recipeController')

const app = express()

app.use(cors())
app.use(express.json())

app.get(`/api/recipe-data`, recipeCtrl.getRecipes)
app.post(`/api/recipe-data`, recipeCtrl.saveRecipe)
app.put(`/api/recipe-data/:id`, recipeCtrl.editRecipe)
app.delete(`/api/recipe-data/:id`, recipeCtrl.deleteRecipe)

const port = 8000;
app.listen(port, () => console.log(`Server running on ${port}`))