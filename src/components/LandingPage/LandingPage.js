import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './LandingPage.css';

class LandingPage extends Component {
    state = {
        heading: 'Adventurers Welcome!',
    };

    onLogin = (event) => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.heading}</h1>

                <div className="grid">
                    <div className="grid-col grid-col_8">
                        <h4>
                            Do you have a passion for exploring the great outdoors? 
                            If so you are in the right place!
                        </h4>
                    </div>
                    <div className="grid-col grid-col_4">
                        <h3>Already a Registered Adventurer?</h3>
                        <button
                            className="btn btn_sizeFull"
                            onClick={this.onLogin}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(LandingPage);
