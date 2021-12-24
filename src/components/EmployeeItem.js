import React from 'react'

function EmployeeListItem({employee,clickedItem}) {
    return (
        <div className="employeeItemContainer"  onClick={()=>{clickedItem(employee.id)}}>
            <img className="itemAvatar" src={`${process.env.PUBLIC_URL}/assets/img/${employee.img}`} />
            <div className="itemTextContainer">
                <div className="itemName">{employee.name}</div>
                <div className="itemPoste">{employee.poste}</div> 
            </div>
            
            
        </div>
    )
}

export default EmployeeListItem
