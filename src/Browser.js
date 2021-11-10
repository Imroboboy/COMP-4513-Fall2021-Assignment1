
import './Browser.css';
import React from 'react';
import {Link} from 'react-router-dom';

class Browser extends React.Component {
    /*
    constructor(props) {
        super(props);

    }
    */

    render() {
        return (
            <div id="Browser">
                <img className="hero" src={this.props.logo} alt="Background" />
                <div id="browserSearch">
                    <h1>Play Browser</h1>
                    <label className="textInput" >Title:
                        <input type="text" name="title" value={this.props.text} onChange={this.props.update}/>  
                    </label> 
                    <button className="button">
                        <Link to="/COMP-4513-Fall2021-Assignment1/home" name="search" onClick={this.props.update}>Show Matching Plays</Link>
                    </button> 
                    <button className="button">
                        <Link to="/COMP-4513-Fall2021-Assignment1/home" name="clear" onClick={this.props.update}>Show All Plays</Link>
                    </button> 
                </div>
            </div>
          );
    }
}

export default Browser;