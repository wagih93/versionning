import React from 'react'
import EmployeeItem from './EmployeeItem'

function EmployeeList({employees,clickedEmployee,clickedItem}) {
    //const activeItem = () => (clickedEmployee ? active : null)
    return (
        <div>
            {employees.map((employee)=>( 
                <div
                active={employee.id === clickedEmployee}
                > 
                    <EmployeeItem 
                        key={employee.id} 
                        employee={employee} 
                        clickedItem={clickedItem}  
                        clickedEmployee={clickedEmployee} 
                    />
                </div> 
            ))}
        </div>
    )
}

export default EmployeeList
