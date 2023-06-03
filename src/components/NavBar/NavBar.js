import React, { Component } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 'Home',
            clicked: false
        };
    }

    handleLinkClick = (link) => {
        this.setState({ activeLink: link });
    };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    render() {
        const { activeLink, clicked } = this.state;

        return (
            <>
                <nav>
                    <a to="/" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}><img src="https://i.ibb.co/LvHJhZn/image.png" style={{
                        width: '60px',
                        left: '15px',
                        backgroundSize: 'contain',
                    }} alt="Logo" /> </a>
                    <div>
                        <ul id="navitem" className={this.state.clicked ? "#navitem active" : "#navitem"}>
                            <li><Link className={activeLink === 'Home' ? 'active' : ''} to="/" onClick={() => this.handleLinkClick('Home')}>Home</Link></li>
                            <li><Link className={activeLink === 'About' ? 'active' : ''} to="/about" onClick={() => this.handleLinkClick('About')}>About</Link></li>
                            <li><Link className={activeLink === 'Services' ? 'active' : ''} to="/services" onClick={() => this.handleLinkClick('Services')}>Services</Link></li>
                            <li><Link className={activeLink === 'Contact' ? 'active' : ''} to="/contact" onClick={() => this.handleLinkClick('Contact')}>Contact</Link></li>
                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="mobile"
                            className={clicked ? 'fas fa-times' : 'fas fa-bars'}
                        ></i>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;
