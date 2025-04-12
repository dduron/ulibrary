import React, {Component} from 'react';
import axios from 'axios';

class RemoveBook extends Component {

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

        axios.delete('https://ulibrary-qp3d.onrender.com/users', {data: { userId: this.state.userId,
            bookId: this.state.bookId }})
            .then(res => {
                alert("Book removed from user! Check the list of users");
                console.log(res);
                console.log(res.data);
            })
     }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    A librarian can use this to remove a book from a user that wants to return it.<br/>
                    Please make sure that the book you want to return is currently assigned to the user.<br/> 
                    After the book is returned the stock is increased by one.<br/><br/>
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
                    <button type="submit">Return Book</button>
                </form>
                <br/>
                <p align="center"><a href="/">Back</a></p>
            </div>
        );
    }
}

export default RemoveBook;