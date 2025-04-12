import React, {Component} from 'react';
import axios from 'axios';

class Users extends Component {

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

    render() {
        return (
            <div>
                This is the list of all users and the books they have checked out.<br/><br/>
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
                                    <th scope="row">{user._id}</th>
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
                <p align="center"><a href="/">Back</a></p>
            </div>
        );
    }
}

export default Users;