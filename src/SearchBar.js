import React, {Component} from 'react'

class SearchBar extends Component {
    render() {
        return (
            <div className='search-bar'>
                <label htmlFor='search'>Search:</label>
                <input type='text' name='search'></input>
                <input type='submit' value='Search'/>
            </div>
        )
    }
}

export default SearchBar 