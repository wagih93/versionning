import React from 'react'
import Header from './Header'

function EmployeePage({employee,clickedItem}) {
    return (
        <div style={{margin : '10px'}}>
            <Header parent={'EmployeePage'} clickedItem={clickedItem}/>
            {employee ? employee.name : "Veillez choisir un employée"}
        </div>
    )
}

export default EmployeePage
