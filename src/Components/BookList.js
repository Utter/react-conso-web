import React from 'react'
import axios from 'axios'

// set up axios config defaults where possible - now wherever I call axios these defaults will be used
axios.defaults.baseURL = "https://web.consonance.app/api/v4/products.json?"; // test the entire URL with params from Talend
axios.defaults.headers.common["Authorization"] =
  "Token token=7362f689ab0b43de99ebb53a19ade8a9"; // send the authorisation token in the header
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'; // is this one needed or even helpful?

export default class BookList extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        axios.get()
        .then (res => {
            console.log(res);
            this.setState({ books: res.data.products[0]});
        })
    }


render() {
    return (
        <ul>
            {this.state.books.map(book => <li key={book.id}>{book.name}</li>)}
        </ul>
    )
      
    }
}