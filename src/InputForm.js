import React, {Component} from 'react'

class InputForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            bookType: 'partial',
            printType: 'all'
        }
    }
    render() {
        const {getBooks} = this.props;
        return (
            <form onSubmit={(e) => {getBooks(e, this.state['search'], this.state['printType'], this.state['bookType'])}}>
                <div className='input-form'>
                    <label htmlFor='search'>Search:</label>
                    <input type='text' name='search' onChange={event => {this.setState({
                        'search': event.target.value})}}></input>
                    <input type='submit' value='Search'/>
                    <br/>
                    <label htmlFor='book-type'>
                    Book Type: 
                    <select id='book-type' name='book-type' onChange={event => {this.setState({
                        'bookType': event.target.value})}}>
                        <option value='partial'>Partial</option>
                        <option value='full'>Full</option>
                        <option value='free-ebooks'>Free ebooks</option>
                        <option value='paid-ebooks'>Paid ebooks</option>
                        <option value='ebooks'>All ebooks</option>
                    </select>
                    </label>
                    <br />
                    <label htmlFor='print-type'>Print Type:</label>
                    <select id='print-type'
                    name='print-type' onChange={event => {this.setState({
                        'printType': event.target.value})}}>
                        <option value='all'>All</option>
                        <option value='books'>Books</option>
                        <option value='magazines'>Magazines</option>
                    </select>
                </div>
            </form>
        )
    }
}

export default InputForm