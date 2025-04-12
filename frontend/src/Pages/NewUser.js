import React, {Component} from 'react';
import axios from 'axios';

class NewUser extends Component {

    state = {
        firstName: '',
        lastName: '',
        email:'',
        role:''
      }
    
    handleChangeFirstName = event => {
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastName = event => {
        this.setState({ lastName: event.target.value });
    }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangeRole = event => {
        this.setState({ role: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post('https://ulibrary-qp3d.onrender.com/users', { firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            role: this.state.role })
            .then(res => {
                alert("User Added!");
                console.log(res);
                console.log(res.data);
            })
     }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    A librarian can use this to add new users.<br/><br/>
                    <label>
                        First Name:
                        <input type="firstName" id="firstName" name="firstName" onChange={this.handleChangeFirstName} />
                    </label>
                    <br/>
                    <label>
                        Last Name:
                        <input type="lastName" id="lastName" name="lastName" onChange={this.handleChangeLastName} />
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input type="email" id="email" name="email" onChange={this.handleChangeEmail} />
                    </label>
                    <br/>
                    <label>
                        Role:
                        <input type="role" id="role" name="role" onChange={this.handleChangeRole} />
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

export default NewUser;