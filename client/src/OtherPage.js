import React, { Component } from 'react';
import{Link} from 'react-router-dom';

class OtherPage extends Component {
    render() {
        return (
            <div>
                I am Some other page!
                <Link to='/'>Go back to Home</Link>
            </div>
        );
    }
}

export default OtherPage;