import React from 'react';
import './Form.css'
export default class Form extends React.Component {
    state = {
        name: '',
        password: ''
    }
    onChange = (keyValue) => {
        return (e) => {
            const stateObj = {};
            stateObj[keyValue] = e.target.value;
            this.setState(stateObj);
        }
    }

    render() {
        return (
            <div>
                <div className="input">
                    <p>Name: </p>
                    <input onChange={this.onChange('name')}/>
                </div>
                <div className="input">
                    <p>Password: </p>
                    <input onChange={this.onChange('password')}/>
                </div>
                <div className="input">
                    <button>Submit</button>
                </div>
            </div>
        )
    }
}