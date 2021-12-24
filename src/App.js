import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EmployeePage from './components/EmployeePage'
import HomePage from './components/HomePage'
import { Card } from 'react-bootstrap';
import {Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './js/store'


class App extends Component {
  constructor(){
    super()
    this.state={
      searchedText : ''
    }
  }

  
  handleSearch = (searchedText) => {
    this.setState({
      ...this.state,
      searchedText
    })
  }

  render() {
    
    return (
      <Provider store={store}>
        <Router>
          <Card className="App borderless">
            <Switch>
              <Route  path="/employee/:idEmployee">
                <EmployeePage />
              </Route>
              <Route exact path="/">
                <HomePage handleSearch={this.handleSearch} />
              </Route>
            </Switch>
          </Card>
        </Router>
      </Provider>
     
    )
  }
}

export default App
