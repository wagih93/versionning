import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import EmployeePage from './components/EmployeePage'
import HomePage from './components/HomePage'

class App extends Component {
  constructor(){
    super()
    this.state={
      clickedEmployee : null,
      searchedText : '',
      employees : [
        {
          id : 1,
          name : 'Anis',
          poste : 'CEO',
          phone : '22323424',
          email : 'anis@itbs.tn',
          img : 'avatarM1.png'
        },
        {
          id : 2,
          name : 'Aymen',
          poste : 'CTO',
          phone : '53525323',
          email : 'aymen@itbs.tn',
          img : 'avatarM1.png'
        },
        {
          id : 3,
          name : 'Ahmed',
          poste : 'CMO',
          phone : '98383484',
          email : 'ahmed@itbs.tn',
          img : 'avatarM1.png'
        }
      ]
    }
  }

  clickedItem = (id=null)=>{
    this.setState({
      ...this.state,
      clickedEmployee : id
    })
  }

  handleSearch = (searchedText) => {
    this.setState({
      ...this.state,
      searchedText
    },()=>{console.log(this.state.searchedText)} )
  }
  render() {
    const filtredEmployees = this.state.employees.filter((employee)=>(
      employee.name.includes(this.state.searchedText) ||
      employee.poste.includes(this.state.searchedText) ||
      employee.phone.includes(this.state.searchedText) || 
      employee.email.includes(this.state.searchedText)
    ))
    return (
        <div className="App"  style={{display : 'flex'}}>
          <HomePage 
            employees={!this.state.searchedText ? this.state.employees : filtredEmployees} 
            clickedItem={this.clickedItem} 
            handleSearch={this.handleSearch}
            clickedEmployee={this.state.clickedEmployee}
          />
          <EmployeePage 
            employee={this.state.employees.find((employee)=>  (employee.id === this.state.clickedEmployee ))} 
            clickedItem={this.clickedItem}
          />
        </div>
    )
  }
}

export default App
