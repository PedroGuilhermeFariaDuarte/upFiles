import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Pages
import Home from '../../pages/Home'

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
    </Switch>
  </BrowserRouter>
)

export default Router
