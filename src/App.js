import React, {Component} from 'react'
import InputForm from './InputForm'
import BookItem from './BookItem'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null
    }
    this.getBooks = this.getBooks.bind(this)
  }


  getBooks(e, q, printType, filter) {
    e.preventDefault()
    console.log('function is called')
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + q + '&printType=' + printType + '&filter=' + filter
    const apiKey = '&key=AIzaSyCsymxATHXKU7B8Ou1lCaEuymQUTzfWTk0'
    const options = {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    };
    console.log(url+apiKey);
    fetch(url+apiKey, options)
    .then(response => {
      if(!response.ok) {
        alert('Please try again')
      }
      return response.json()
      })
    .then(result => 
      this.setState({
        books: result.items.map((book, id) => ({
          key: id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors ? book.volumeInfo.authors.toString() : 'Unknown Author',
          price: ('retailPrice' in book.saleInfo) ? book.saleInfo.retailPrice.amount : '0.00',
          description: book.description,
          image: book.volumeInfo.imageLinks.thumbnail,
        }))
      })
    )
    .catch(err => {
      console.log(err)
    });

  }

  render() {
    return (
      <div>
        <div className='input-form'>
          <InputForm getBooks={this.getBooks}/>
        </div>
        <div className='book-list'>
          <ul>
        {this.state.books.map(book => {
              return (
                <BookItem 
                key={book.key}
                title={book.title} 
                authors={book.authors}
                price={book.price}
                description={book.description}
                image={book.image}/>
              )
            }
          )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
