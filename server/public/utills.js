const Meal = require('../models/meal');
const socket = require('socket.io');

require('../db/mongoose');

const $meal = document.querySelector('#meal');
const $name  = $meal.querySelector('#name');
const $description  = $meal.querySelector('#description');

//template
const mealTemplate = document.querySelector('#meal-template').innerHTML
// To return all of the meals from db
const getAllMeals = async () => {
  const meals = await Meal.find({});
  return meals;
};
// To post the meal to index js
socket.on('message',(meal)=>{

  console.log(meal);
  //render template from server to html template in script messages

  const html = Mustache.render(mealTemplate,{
    name: meal.name,
    description : meal.description,
  });
  $meal.insertAdjacentHTML('beforeend',html)
});
