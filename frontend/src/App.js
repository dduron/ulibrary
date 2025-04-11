import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Books from './Pages/Books';
import AvailableBooks from './Pages/AvailableBooks';
import Users from './Pages/Users';
import NewUser from './Pages/NewUser';
import NewBook from './Pages/NewBook';
import AddBook from './Pages/AddBook';
import RemoveBook from './Pages/RemoveBook';
import SelectUser from './Pages/SelectUser';
import User from './Pages/User';
import ReturnBook from './Pages/ReturnBook';
import ReserveBook from './Pages/ReserveBook';
import UserProfile from './Pages/UserProfile';
import SelectBook from './Pages/SelectBook';

function App() {

    return (
        <BrowserRouter basename={document.baseURI.substring(document.baseURI.indexOf(window.location.origin) + window.location.origin.length, document.baseURI.lastIndexOf('/'))}>
            <Routes>
                <Route path="/" element ={<Home/>}/>                     
                <Route path="/books" element ={<Books/>}/>
                <Route path="/availablebooks" element ={<AvailableBooks/>}/>
                <Route path="/users" element ={<Users/>}/>
                <Route path="/newuser" element ={<NewUser/>}/>
                <Route path="/newbook" element ={<NewBook/>}/>
                <Route path="/addbook" element ={<AddBook/>}/>
                <Route path="/removebook" element ={<RemoveBook/>}/>
                <Route path="/selectuser" element ={<SelectUser/>}/>
                <Route path="/user" element ={<User/>}/>
                <Route path="/returnbook" element ={<ReturnBook/>}/>
                <Route path="/selectbook" element ={<SelectBook/>}/>
                <Route path="/reservebook" element ={<ReserveBook/>}/>
                <Route path="/userprofile" element ={<UserProfile/>}/>
            </Routes>
        </BrowserRouter>
    );
    
}

export default App;
