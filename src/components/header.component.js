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
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                return (
                    <div>
                        <li><a href="/api/logout">Logout</a></li>
                    </div>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <NavLink to={this.props.auth ? "/surveys" : "/"} className="left brand-logo">Emaily</NavLink>
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