import React, {Component} from 'react';
import axios from 'axios';

class SelectBook extends Component {

    state = {
        books: []
      }
    
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('userid') == null || urlParams.get('userid') == undefined || urlParams.get('userid').trim() == "") {
            window.location.href = "selectuser";
        } else {
            axios.get(`/api/books/available`)
            .then(res => {
                const books = res.data;
                this.setState({ books });
            })
        }
    }

    handleClick(bookid) {
        const urlParams = new URLSearchParams(window.location.search);
        window.location.href ="reservebook?userid=" + urlParams.get('userid') + "&bookid=" + bookid;
    };

    render() {
        return (
            <div>
                Select the ID of a book to be added to your user ID. Books with zero stock are not shown
                to prevent reserving a book that is out of stock. The stock is reduced by one after being added to a user.<br/><br/>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Year</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.books
                            .map(book =>
                                <tr>
                                    <th scope="row"><a href="#" onClick={() => { this.handleClick(book._id) }}>{book._id}</a></th>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>{book.year}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.stock}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <p align="center"><a href="/">Return to homepage</a></p>
            </div>
        );
    }
}

export default SelectBook;