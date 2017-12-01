import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="/" className="navbar-brand">Chatty</a>
                <div id="totalUsers">{this.props.totalUsers} total users</div>
            </nav>
        );
    }
}

export default Nav;