import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import StateWiseCases from './components/StateWiseCases'
import Vaccination from './components/Vaccination'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/Vaccination" component={Vaccination} />
    <Route exact path="/StateWiseCases" component={StateWiseCases} />

    <Route component={NotFound} />
  </Switch>
)

export default App
