import React, {Component} from 'react';
import axios from 'axios';

class Books extends Component {

    state = {
        books: []
      }
    
    componentDidMount() {
    axios.get(`https://ulibrary-qp3d.onrender.com/books`)
        .then(res => {
            const books = res.data;
            this.setState({ books });
        })
    }

    render() {
        return (
            <div>
                This is the list of all books so a Librarian can keep track of them even if they are out of stock.<br/><br/>
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
                                    <th scope="row">{book._id}</th>
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
                <p align="center"><a href="/">Back</a></p>
            </div>
        );
    }
}

export default Books;