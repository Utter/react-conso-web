import React from 'react'
import axios from 'axios'
import autoComplete from 'primereact/autocomplete';

// set up axios config defaults where possible - now wherever I call axios these defaults will be used
axios.defaults.baseURL = "https://cors-anywhere.herokuapp.com/https://web.consonance.app/api/v4/products.json?"; // test the entire URL with params from Talend
axios.defaults.headers.common["Authorization"] =
  "Token token=7362f689ab0b43de99ebb53a19ade8a9"; // send the authorisation token in the header

export default class BookList extends React.Component {
    state = {
        books: [],
        pages: []
    }

    componentDidMount() {
        axios.get()
        .then (res => {
            console.log(res);
            this.setState({ books: res.data.products});
        })
        .catch(err => {
            console.log('Error getting data from API', err)
        })
    }


render() {
    return (
        <div className="books">

        <ul>
            {this.state.books.map(book => (
            <li key={book.id}><p>{book.id} | {book.full_title} | {book.isbn}</p></li>
            ))};
        </ul>
        </div>
    )
      
    }
}