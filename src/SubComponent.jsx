import React, { Component } from 'react';
import "./styleComponent.css"
export default class SubComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { Num1: 0, Num2: 0 };
    }
    handleChange1 = (e) => {
        this.setState({Num1:parseInt(e.target.value)})
    }
    handleChange2 = (e) => {
        this.setState({Num2:parseInt(e.target.value)})
    }
    render() {
        return (
            <div className="mainContainer">
                    <input className="inputStyle" style={{ borderwidth: 1, margin: 10}} placeholder="Num1" onChange={this.handleChange1} />
                    <input className="inputStyle" style={{ borderwidth: 1, margin: 10 }} placeholder="Num2" onChange={this.handleChange2} />
                    <br/>
                    
                <button type="button" className="outStyle">sum</button>
                <label> {this.state.Num1+this.state.Num2}</label>
            </div>
        )
    }
}
