import React, {Component} from 'react';
import axios from 'axios';

class AddBook extends Component {

    state = {
        userId: '',
        bookId: ''
      }
    
    handleChangeUserId = event => {
        this.setState({ userId: event.target.value });
    }

    handleChangeBookId = event => {
        this.setState({ bookId: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('https://ulibrary-qp3d.onrender.com/users/add-book', { userId: this.state.userId,
            bookId: this.state.bookId })
            .then(res => {
                alert("Book added to user! Check the list of users");
                console.log(res);
                console.log(res.data);
            })
     }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    A librarian can use this to assign a book to a user that wants to borrow it.<br/>
                    The idea is to assign a book from the list of available books to prevent assigning a book that is out of stock.<br/> 
                    After the book is assigned the stock is reduced by one.<br/><br/>
                    <label>
                        User ID:
                        <input type="userId" id="userId" name="userId" onChange={this.handleChangeUserId} />
                    </label>
                    <br/>
                    <label>
                        Book ID:
                        <input type="bookId" id="bookId" name="bookId" onChange={this.handleChangeBookId} />
                    </label>
                    <br/>
                    <button type="submit">Add Book</button>
                </form>
                <br/>
                <p align="center"><a href="/">Back</a></p>
            </div>
        );
    }
}

export default AddBook;