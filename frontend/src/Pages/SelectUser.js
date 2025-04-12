import React, {Component} from 'react';
import axios from 'axios';

class SelectUser extends Component {
    state = {
        users: []
      }
          
    componentDidMount() {
        axios.get(`https://ulibrary-qp3d.onrender.com/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
    }

    handleClick(userId) {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('role') == "librarian") {
            window.location.href = "user?userid=" + userId;
        } else {
            window.location.href = "selectbook?userid=" + userId;
        }
    };

    render() {
        return (
            <div>
                Please select the ID of a user.<br/><br/>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Role</th>
                            <th scope="col">Books</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users
                            .map(user =>
                                <tr>
                                    <th scope="row"><a href="#" onClick={() => { this.handleClick(user._id) }}>{user._id}</a></th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{user.books.map(book => 
                                        <div>
                                            {book.title}<br/>
                                        </div>
                                    )}</td>
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

export default SelectUser;