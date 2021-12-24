import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar';

function HomePage(props) {
    const {employees,clickedItem} = props;
    return (
        <div style={{margin : '10px'}}>
            <Header parent={'HomePage'} />
            <SearchBar handleSearch={props.handleSearch} />
            <EmployeeList 
                employees={employees}  
                clickedItem={clickedItem} 
                clickedEmployee={props.clickedEmployee}  
            />
        </div>
    )
}

export default HomePage
