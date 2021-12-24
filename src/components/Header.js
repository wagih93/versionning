import React from 'react'


function Header(props) {
    return (
        <div id="headerContainer">
            { props.parent==='HomePage' ? 
                <div className='headerTitle'>Employee Directory</div> 
                : 
                <> 
                    <div className="backBtn" onClick={()=>{props.clickedItem(null)}} > &laquo; </div>
                    <div className='headerTitle'>Emplopyee</div> 
                </>
            }
                
        </div>
    )
}

export default Header
