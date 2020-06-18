import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
        render() {
            return (
            <div className="callout headcolor" id="Header">
                <div className="row column">
                   <a href="/"><h1 id="tit">{this.props.name}</h1></a>
                   <p style={{color:'white'}}>Font-end : React JS - Back-end : PHP</p>
                </div>
            </div>
         );
        }
    }
export default Header;