import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

    render() {
        return (
            <>
                <h1>University Library Endpoints</h1>
                <Link to="/books">Books<br/></Link>
                <Link to="/availablebooks">Available Books<br/></Link>
                <Link to="/users">Users<br/></Link>
                <Link to="/newuser">New User<br/></Link>
                <Link to="/newbook">New Book<br/></Link>
                <Link to="/addbook">Add Book<br/></Link>
                <Link to="/removebook">Remove Book<br/></Link>
                <Link to="/selectuser">Reserve a Book for a student flow<br/></Link>
                <Link to="/selectuser?role=librarian">Return a Book from a student flow<br/></Link>
            </>
        );
    }

}

export default Home;