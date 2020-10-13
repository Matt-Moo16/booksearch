import React, {Component} from 'react'
import BookItem from './BookItem'

class BookList extends Component {
    render() {
        return (
            <ul>
                <BookItem books={this.props.books}/>
            </ul>
        )
    }
}

export default BookList