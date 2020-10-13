import React, {Component} from 'react'

class PrintType extends Component {
    render() {
        return (
            <div className='print-type'>
                <label htmlFor='print-type'>Print Type:</label>
                <select id='print-type'
                name='print-type'>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
            </div>
        )
    }
}

export default PrintType
