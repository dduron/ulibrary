import React, {Component} from 'react';
import axios from 'axios';

class NewBook extends Component {

    state = {
        title: '',
        author: '',
        year:'',
        genre:'',
        stock:''
      }
    
    handleChangeTitle = event => {
        this.setState({ title: event.target.value });
    }

    handleChangeAuthor = event => {
        this.setState({ author: event.target.value });
    }

    handleChangeYear = event => {
        this.setState({ year: event.target.value });
    }

    handleChangeGenre = event => {
        this.setState({ genre: event.target.value });
    }

    handleChangeStock = event => {
        this.setState({ stock: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('https://ulibrary-qp3d.onrender.com/books', { title: this.state.title,
            author: this.state.author,
            year: this.state.year,
            genre: this.state.genre,
            stock: this.state.stock })
            .then(res => {
                alert("Book Added!");
                console.log(res);
                console.log(res.data);
            })
     }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    A librarian can use this to add new books.<br/><br/>
                    <label>
                        Title:
                        <input type="title" id="title" name="title" onChange={this.handleChangeTitle} />
                    </label>
                    <br/>
                    <label>
                        Author:
                        <input type="author" id="author" name="author" onChange={this.handleChangeAuthor} />
                    </label>
                    <br/>
                    <label>
                        Year:
                        <input type="year" id="year" name="year" onChange={this.handleChangeYear} />
                    </label>
                    <br/>
                    <label>
                        Genre:
                        <input type="genre" id="genre" name="genre" onChange={this.handleChangeGenre} />
                    </label>
                    <br/>
                    <label>
                        Stock:
                        <input type="stock" id="stock" name="stock" onChange={this.handleChangeStock} />
                    </label>
                    <br/>
                    <button type="submit">Add</button>
                </form>
                <br/>
                <p align="center"><a href="/">Back</a></p>
            </div>
        );
    }
}

export default NewBook;