import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    renderLinks() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><NavLink to="/auth/google">Login with Google</NavLink></li>
                );
            default:
                return (
                    <div>
                        <li><NavLink to="/api/logout">Logout</NavLink></li>
                    </div>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/">Logo</NavLink>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderLinks()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapSateToProps({ auth }) {
    return { auth };
}

export default connect(mapSateToProps)(Header);