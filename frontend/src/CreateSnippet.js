import React, { Component } from 'react';
import './App.css';
import * as ReactBootstrap from 'react-bootstrap';


class SubmitHash extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit() {
        // Todo
        let hash = this.state.value;

        if (!hash) {
            alert("No hash value entered!");
            this.refs.hashTextField.focus();
        }

        if (hash.length === 32) {
            console.log("DEBUG");
        }

        else {
            this.refs.textarea.focus();
        }

    }

    render() {
        return (
            <div className='submitContainer'>
                    <div className='panel panel-default'>
                        <div align="center" className='panel-heading'>Here you can create your new snippet</div>
                        <div className='panel-body'>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label className='control-label'>Give your snippet a name:</label>
                                    <input type='text' className='form-control' ref='hashTextField'
                                           placeholder="Name" value={this.state.value} onChange={this.handleChange} autoFocus/>
                                    <br/>
                                    <label className='control-label'>Select the programming language you want to use:</label>
                                    <ReactBootstrap.ButtonGroup justified>
                                        <ReactBootstrap.FormGroup controlId="formControlsSelect">
                                            <ReactBootstrap.FormControl componentClass="select" placeholder="select">
                                                <option value="js">JavaScript</option>
                                                <option value="py">Python</option>
                                                <option value="java">Java</option>
                                                <option value="c">C</option>
                                                <option value="cpp">C++</option>
                                            </ReactBootstrap.FormControl>
                                        </ReactBootstrap.FormGroup>
                                    </ReactBootstrap.ButtonGroup>
                                    <br/>
                                    <textarea className="form-control" style={{height: 400}} placeholder="Place your snippet here..." />
                                    <span className='help-block'>{}</span>
                                </div>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <button type='submit' className='btn btn-primary'>Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>

        );
    }
}

export default SubmitHash;