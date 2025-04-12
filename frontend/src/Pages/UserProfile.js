import React, {Component} from 'react';
import axios from 'axios';

class UserProfile extends Component {

    state = {
        user: []
      }

    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        if(urlParams.get('userid') == null || urlParams.get('userid') == undefined || urlParams.get('userid').trim() == "") {
            window.location.href = "selectuser";
        } else {
            axios.get('https://ulibrary-qp3d.onrender.com/users/'+urlParams.get('userid'))
            .then(res => {
                const user = res.data;
                this.setState({ user });
            })
        }
    }

    render() {
        return (
            <div>
                <b>ID: </b>{this.state.user._id}<br/>
                <b>First Name: </b>{this.state.user.firstName}<br/>
                <b>Last Name: </b>{this.state.user.lastName}<br/>
                <b>Email: </b>{this.state.user.email}<br/>
                <b>Books: </b><br/>
                {
                    this.state.user.books?.map(book =>
                        <ul>
                            <li>{book.title}</li>   
                        </ul>                       
                    )
                }
                <p align="center"><a href="/">Return to homepage</a></p>
            </div>
        );
    }
}

export default UserProfile;