import React, { Component } from 'react';
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import Register from '../../Component/Register/register';
import Login from '../../Component/Login/login';
import './navbar.css';
//import '../../styles/semantic.min.css'

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div class="ui small menu">
                    <a class="item" href='/news'>News</a>
                    <a class="item" href='/sender'>Sender</a>
                    <a class="item" href='/receiver'>Receiver</a>
                    <a class="item" href='/manage'>Manage</a>
                    <div class="right menu">
                        <button class="ui button item"><a href='/login'>Sign In</a></button>
                        <button class="ui button item"><a href='/register'>Sign Up</a></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;