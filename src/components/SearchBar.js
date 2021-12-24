import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText : ''
        }
    }

    handleInput(event){
        this.setState({
            ...this.state,
            searchText : event.target.value
        },()=>{this.props.handleSearch(this.state.searchText)})
        
    }

    render() {
        return (
            <form id="searchInputContainer">
                <input
                    typr='text'
                    placeholder="Search key words"  
                    id="searchInput" 
                    value={this.state.searchText}
                    onChange={(event)=>{this.handleInput(event)}} />
            </form>
        )
    }
}

export default SearchBar
