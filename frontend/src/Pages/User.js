import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {

    state = {
        user: []
      }

    handleClick(bookid) {
        const urlParams = new URLSearchParams(window.location.search);
        window.location.href ="returnbook?userid=" + urlParams.get('userid') + "&bookid=" + bookid;
    };
    
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('userid') == null || urlParams.get('userid') == undefined || urlParams.get('userid').trim() == "") {
            window.location.href = "selectuser?role=librarian";
        } else {
            axios.get('/api/users/'+urlParams.get('userid'))
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
        }
    }

    render() {
        return (
            <div>
                Select a book to be returned from this user. The stock will be increased by one after returning.<br/>
                <br/>
                <b>ID: </b>{this.state.user._id}<br/>
                <b>First Name: </b>{this.state.user.firstName}<br/>
                <b>Last Name: </b>{this.state.user.lastName}<br/>
                <b>Books: </b><br/>
                {
                    this.state.user.books?.map(book =>
                        <ul>
                            <li><a href="#" onClick={() => { this.handleClick(book._id) }}>{book.title}</a></li>   
                        </ul>                       
                    )
                }
                <p align="center"><a href="/">Return to homepage</a></p>
            </div>
        );
    }
}

export default User;