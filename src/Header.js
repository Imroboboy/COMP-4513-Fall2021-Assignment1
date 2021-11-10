import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

import Modal from 'react-modal'; 

class Header extends React.Component {
    render() {
        console.log("Header props: ");
        console.log(this.props);
        console.log("Header props Done");
        return (
            <header className="App-header tc1">
                <div>
                    <Link className="logo" to="/COMP-4513-Fall2021-Assignment1/" name="home" onClick={this.props.update}>
                        <img src={this.props.logo} alt="Logo" />
                    </Link>
                    <button className="button" name="aboutOpen" onClick={this.props.updateDisplay}>
                        About
                    </button> 
                </div>
                <Modal isOpen={this.props.isAboutOpen}>
                    <button className="button" name="aboutClose" onClick={this.props.updateDisplay}>Close About</button>
                    <h1>Built with React!</h1>
                    <h2>React Components Used:</h2>
                    <ul>
                        <li>react-modal: <a href="https://www.npmjs.com/package/react-modal">https://www.npmjs.com/package/react-modal</a></li>
                        <li>react-router-dom: <a href="https://www.npmjs.com/package/react-router">https://www.npmjs.com/package/react-router</a></li>
                    </ul>
                    <h2>Play Data from Randy's Server.</h2>
                </Modal>
            </header>
        );
    }
}

export default Header;