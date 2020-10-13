import React, {Component} from 'react'

class BookItem extends Component {
    render() {
        return (
            <li>
                <h2>{this.props.title}</h2>
                <h3>{this.props.authors}
                <br />
                    {'$' + this.props.price}
                </h3>
                <p>{this.props.description}</p>
                <img src={this.props.image} />
            </li>
        )
    }
}

export default BookItem