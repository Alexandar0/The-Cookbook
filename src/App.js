import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Modal from 'react-bootstrap/Modal';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel';


class App extends Component {

  state = {
    recipes: [
      {
        recipeName: 'THE COOKBOOK :', 
        recipeSource: 'https://www.simplyrecipes.com/', 
        ingredients: ['Butter', 'Onion', 'Garlic', 'Flour', 'Tomatoes'], 
        preparationTime: '40 min', 
        instructions: 'In a Dutch oven set over medium heat, add the butter. Once it starts to foam, add the onion, garlic, salt, and pepper. Stir until both have softened and are fragrant, about 7 minutes. Add flour. Stir to make a paste. Continue stirring until the flour has taken on a light brown color. Stir and scrape with wooden spoon, 5-7 minutes. The onion paste should look golden with a little brown caramelization. Add crushed tomatoes, tomato sauce, chicken stock, and sugar. Stir to combine. Cover the pot and bring to a boil over medium high heat, then reduce heat to medium and let simmer uncovered for about 20 minutes.' 
      },
      {
        recipeName: 'Tomato Soup', 
        recipeSource: 'https://www.simplyrecipes.com/recipes/tomato_soup/', 
        ingredients: ['5 tbsp Butter', ' 1 Onion', '4 Garlic cloves', '3 tbsp Flour', '1 can crushed Tomatoes'], 
        preparationTime: '40 min', 
        instructions: 'In a Dutch oven set over medium heat, add the butter. Once it starts to foam, add the onion, garlic, salt, and pepper. Stir until both have softened and are fragrant, about 7 minutes. Add flour. Stir to make a paste. Continue stirring until the flour has taken on a light brown color. Stir and scrape with wooden spoon, 5-7 minutes. The onion paste should look golden with a little brown caramelization. Add crushed tomatoes, tomato sauce, chicken stock, and sugar. Stir to combine. Cover the pot and bring to a boil over medium high heat, then reduce heat to medium and let simmer uncovered for about 20 minutes.' 
      },
      {
        recipeName: 'Chorizo & Mozzarella Gnocchi Bake', 
        recipeSource: 'https://www.bbcgoodfood.com/recipes/chorizo-mozzarella-gnocchi-bake', 
        ingredients: ['1 tbsp Olive oil', '1 Onion', '2 Garlic cloves', '120g diced Chorizo', '2 x 400g cans chopped Tomatoes', '600g fresh Gnocchi', '125g Mozzarella'], 
        preparationTime: '35 min', 
        instructions: 'Heat the oil in a medium pan over a medium heat. Fry the onion and garlic for 8-10 mins until soft. Add the chorizo and fry for 5 mins more. Tip in the tomatoes and sugar, and season. Bring to a simmer, then add the gnocchi and cook for 8 mins, stirring often, until soft. Heat the grill to high. Stir ¾ of the mozzarella and most of the basil through the gnocchi. Divide the mixture between six ovenproof ramekins, or put in one baking dish. Top with the remaining mozzarella, then grill for 3 mins, or until the cheese is melted and golden. Season, scatter over the remaining basil and serve with green salad.' 
      },
      {
        recipeName: 'Creamed Spinach', 
        recipeSource: 'https://www.simplyrecipes.com/recipes/creamed_spinach/', 
        ingredients: ['3 tbsp Butter', ' 1/4 Onion', '25 to 30 oz Spinach Leaves', '1 1/2 tbsp Flour', '1/2 cup Heavy Cream', '1/2 cup Heavy Cream', '1 1/2 tbsp Dijon Mustard'], 
        preparationTime: '25 min', 
        instructions: 'In a small bowl, mix 1 tablespoon of the butter with the flour until blended. In a large (12-inch) skillet over medium heat, melt the remaining 2 tablespoons butter. Add the onions, stir occasionally, and cook for 3 to 4 minutes, or until they soften. Add about 1/3 of the spinach leaves, or as many as you can pile into the skillet without overflowing. Add the salt, pepper, and 2 tablespoons water to the pan. Cook, turning the spinach with tongs, until the leaves have wilted. Transfer them to a bowl, leaving some of their liquid in the pan and repeat with the remaining spinach in batches. Using a large spoon, hold back the spinach in the bowl, tilt the bowl, and drain the juices into the pan.' 
      },
      {
        recipeName: 'Easy Pancakes', 
        recipeSource: 'https://www.bbcgoodfood.com/recipes/easy-pancakes', 
        ingredients: ['100g Flour', '2 Eggs', '300ml Milk', '1 tbsp Sunflower Oil'], 
        preparationTime: '30 min', 
        instructions: 'Put 100g plain flour, 2 large eggs, 300ml milk, 1 tbsp sunflower or vegetable oil and a pinch of salt into a bowl or large jug, then whisk to a smooth batter. Set aside for 30 mins to rest if you have time, or start cooking straight away. Set a medium frying pan or crêpe pan over a medium heat and carefully wipe it with some oiled kitchen paper. When hot, cook your pancakes for 1 min on each side until golden, keeping them warm in a low oven as you go. Serve with lemon wedges and caster sugar, or your favourite filling.' 
      }
    ],
    showAdd: false,
    showEdit: false,
    currentIndex: 0,
    newestRecipe: {recipeName:"", ingredients:[], instructions:"", preparationTime:"", recipeSource:""}
  }

  deleteRecipe(index) {
    let recipes = this.state.recipes.slice();
    recipes.splice(index, 1);
    this.setState({recipes});
  }

  updateNewRecipe(recipeName, ingredients, instructions, preparationTime, recipeSource) {
    this.setState({newestRecipe: {recipeName: recipeName, ingredients: ingredients, instructions: instructions, preparationTime: preparationTime, recipeSource: recipeSource} });
  }

  saveNewRecipe(){
    let recipes = this.state.recipes.slice();
    recipes.push({recipeName: this.state.newestRecipe.recipeName, ingredients: this.state.newestRecipe.ingredients, instructions: this.state.newestRecipe.instructions, preparationTime: this.state.newestRecipe.preparationTime, recipeSource: this.state.newestRecipe.recipeSource});

    this.setState({recipes});
    this.setState({newestRecipe: {recipeName:'', ingredients:[], instructions:'', preparationTime:'', recipeSource:'' }});
    this.close();
  }

  close = () => {
    if(this.state.showAdd) {
      this.setState({showAdd: false})
    }
    if(this.state.showEdit){
      this.setState({showEdit: false});
    }
  }

  open = (state, currentIndex) => {
    this.setState({[state]: true});
    this.setState({currentIndex});
  }

  updateRecipeName(recipeName, currentIndex){
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName: recipeName, ingredients: recipes[currentIndex].ingredients, instructions: recipes[currentIndex].instructions, preparationTime: recipes[currentIndex].preparationTime, recipeSource: recipes[currentIndex].recipeSource};
    this.setState({recipes});
  }

  updateIngredients(ingredients, currentIndex){
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName:recipes[currentIndex].recipeName, ingredients:ingredients, instructions: recipes[currentIndex].instructions, preparationTime: recipes[currentIndex].preparationTime, recipeSource: recipes[currentIndex].recipeSource};
    this.setState({recipes});
  }

  updateInstructions(instructions, currentIndex){
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName:recipes[currentIndex].recipeName, ingredients: recipes[currentIndex].ingredients, instructions:instructions, preparationTime: recipes[currentIndex].preparationTime, recipeSource: recipes[currentIndex].recipeSource};
    this.setState({recipes});
  }

  updatePreparationTime(preparationTime, currentIndex){
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName:recipes[currentIndex].recipeName, ingredients: recipes[currentIndex].ingredients, instructions: recipes[currentIndex].instructions, preparationTime:preparationTime, recipeSource: recipes[currentIndex].recipeSource};
    this.setState({recipes});
  }

  updateRecipeSource(recipeSource, currentIndex){
    let recipes = this.state.recipes.slice();
    recipes[currentIndex] = {recipeName:recipes[currentIndex].recipeName, ingredients: recipes[currentIndex].ingredients, instructions: recipes[currentIndex].instructions, preparationTime: recipes[currentIndex].preparationTime, recipeSource:recipeSource};
    this.setState({recipes});
  }

  render() {

  const {recipes, newestRecipe, currentIndex} = this.state;

  return (
    <div className="App container">
      {recipes.length>0 && (
            <div className="shadow">
              <Accordion className="shadow">
              {recipes.map((recipe, index)=>(

                <Card className="text-light shadow rounded bg-dark">
                      <Card.Header>
                        <Accordion.Toggle className="rounded shadow-sm" as={Card.Header} eventKey={index} key={index}>
                        <h5>{recipe.recipeName}</h5>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey={index} key={index}>
                        <Card.Body>
                          <Button variant="warning" className="shadow" size="lg" href={recipe.recipeSource}>Recipe Source</Button>  
                          <p>Preparation time: {recipe.preparationTime}</p>
                          <h5>Ingredients:</h5>       
                          <ol>{recipe.ingredients.map((ingredient)=>(
                            <li key={ingredient}>{ingredient}</li>
                          ))}
                          </ol>
                          <h5>Cooking Instructions:</h5>
                          <p>{recipe.instructions}</p>
                          <ButtonToolbar>
                            <Button variant="danger" className="shadow" onClick={() => this.deleteRecipe(index)}>Delete Recipe</Button>
                            <Button variant="secondary" className="shadow ml-2" onClick={() => this.open("showEdit", index)}>Edit Recipe</Button>
                          </ButtonToolbar>
                        </Card.Body>
                      </Accordion.Collapse>
      
                </Card>

              ))}
            </Accordion>
      

      <Modal show={this.state.showEdit} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
          <Modal.Body>

            <Form.Group controlId="formBasicText">       
              <FormLabel>Recipe Name:</FormLabel>
              <FormControl 
              type="text" 
              value={recipes[currentIndex].recipeName}
              placeholder="Enter Recipe Name"
              onChange = {(event) => this.updateRecipeName(event.target.value, currentIndex )}
              />
            </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Ingredients:</FormLabel>
                <FormControl 
                componentClass="textarea" 
                onChange = {(event) => this.updateIngredients(event.target.value.split(","), currentIndex)}
                placeholder="Enter Ingredients Separated by Commas"
                value={recipes[currentIndex].ingredients}
                ></FormControl>
              </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Cooking Instructions:</FormLabel>
                <FormControl 
                as="textarea" 
                rows={4}
                onChange = {(event) => this.updateInstructions(event.target.value, currentIndex)}
                placeholder="Enter Cooking Instructions"
                value={recipes[currentIndex].instructions}
                ></FormControl>
              </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Preparation Time:</FormLabel>
                <FormControl 
                componentClass="textarea" 
                onChange = {(event) => this.updatePreparationTime(event.target.value, currentIndex)}
                placeholder="Enter Preparation Time"
                value={recipes[currentIndex].preparationTime}
                ></FormControl>
              </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Recipe Source:</FormLabel>
                <FormControl 
                componentClass="textarea" 
                onChange = {(event) => this.updateRecipeSource(event.target.value, currentIndex)}
                placeholder="Enter URL To Recipe Source"
                value={recipes[currentIndex].recipeSource}
                ></FormControl>
              </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" onClick={() => this.saveNewRecipe()}>Save New Recipe</Button>
          </Modal.Footer>
      </Modal>
    </div>
    )}


      <Modal show={this.state.showAdd} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
          <Modal.Body>

            <Form.Group controlId="formBasicText">
              <FormLabel>Recipe Name:</FormLabel>
              <FormControl 
              type="text" 
              value={newestRecipe.recipeName}
              placeholder="Enter Recipe Name"
              onChange = {(event) => this.updateNewRecipe(event.target.value, newestRecipe.ingredients, newestRecipe.instructions, newestRecipe.preparationTime, newestRecipe.recipeSource)}
              ></FormControl>
            </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Ingredients:</FormLabel>
                <FormControl 
                type="textarea" 
                value={newestRecipe.recipeName}
                placeholder="Enter Ingredients Separated by Commas"
                onChange = {(event) => this.updateNewRecipe(newestRecipe.recipeName, event.target.value.split(","), newestRecipe.instructions, newestRecipe.preparationTime, newestRecipe.recipeSource)}
                value={newestRecipe.ingredients}
                ></FormControl>
              </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Cooking Instructions:</FormLabel>
                <FormControl 
                as="textarea" 
                rows={4}
                value={newestRecipe.ingredients}
                placeholder="Enter Cooking Instructions"
                onChange = {(event) => this.updateNewRecipe(newestRecipe.recipeName, newestRecipe.ingredients, event.target.value, newestRecipe.preparationTime, newestRecipe.recipeSource)}
                value={newestRecipe.instructions}
                ></FormControl>
              </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Preparation Time:</FormLabel>
                <FormControl 
                type="text" 
                value={newestRecipe.instructions}
                placeholder="Enter Preparation Time"
                onChange = {(event) => this.updateNewRecipe(newestRecipe.recipeName, newestRecipe.ingredients, newestRecipe.instructions, event.target.value, newestRecipe.recipeSource)}
                value={newestRecipe.preparationTime}
                ></FormControl>
              </Form.Group>

              <Form.Group controlId="formControlsTextarea">
                <FormLabel>Recipe Source:</FormLabel>
                <FormControl 
                type="text" 
                value={newestRecipe.preparationTime}
                placeholder="Enter URL To Recipe Source"
                onChange = {(event) => this.updateNewRecipe(newestRecipe.recipeName, newestRecipe.ingredients, newestRecipe.instructions, newestRecipe.preparationTime, event.target.value)}
                value={newestRecipe.recipeSource}
                ></FormControl>
              </Form.Group>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="warning" className="shadow" onClick={() => this.saveNewRecipe()}>Save New Recipe</Button>
          </Modal.Footer>
      </Modal>

      <Button variant="warning" className="shadow mt-3 mb-5" onClick={() => this.open("showAdd", currentIndex)}>Add Recipe</Button>
    </div>
  );
}
}

export default App;
