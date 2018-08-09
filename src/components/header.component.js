import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Payments from './payments.component';

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
                    [
                        <li key="1"><Payments /></li>,
                        <li key="2" style={{ margin: '0 10px' }}>
                            Credits: {this.props.auth.credits}
                        </li>,
                        <li key="3"><a href="/api/logout">Logout</a></li>
                    ]
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