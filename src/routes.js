import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import RecipePage from './recipes/RecipePage'
import RecipesContainer from './recipes/RecipesContainer'
import { Link } from 'react-router-dom'

export default class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={RecipesContainer} />
        <Route path="/recipes/:recipeId" component={RecipePage} />
        <Link to="/some/path">Click here</Link>
      </div>
    )
  }
}
