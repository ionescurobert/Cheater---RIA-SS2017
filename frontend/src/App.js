import React, {Component} from 'react';
// Todo create new app logo
import hashDefuselogo from './Images/hashDefuse_logo.svg';

import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from 'react-bootstrap';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">CH3ATER</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavDropdown eventKey={2} title="MySnippets" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/createsnippet">Create Snippet</MenuItem>
                            <MenuItem eventKey={2.2} href="/viewsnippets">View Snippets</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={2.3}>More</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} href="/about">Support</NavItem>
                    </Nav>
                </Navbar>
                <header className="App-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <img src={hashDefuselogo} className="App-logo" alt="app_logo" />
                            </div>
                            <div className="col-xs-6">

                            </div>
                        </div>
                    </div>
                </header>
                <p className="App-intro">
                    {this.props.children}
                </p>
            </div>
        );
    }
}

export default App;
