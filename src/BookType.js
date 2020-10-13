import React, {Component} from 'react'

class BookType extends Component {
    render() {
        return (
            <div className='book-type'>
                <label htmlFor='book-type'>
                    Book Type: 
                    <select id='book-type' name='book-type'>
                        <option value='partial'>Partial</option>
                        <option value='full'>Full</option>
                        <option value='free-ebooks'>Free ebooks</option>
                        <option value='paid-ebooks'>Paid ebooks</option>
                        <option value='ebooks'>All ebooks</option>
                    </select>
                </label>
            </div>
        )
    }
}

export default BookType