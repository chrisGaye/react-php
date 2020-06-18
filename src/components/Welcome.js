import React, {Component} from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';


    class Welcome extends Component {
        render() {
            return (
                <div className="row " id="Body">
                    <div className="medium-12 columns">
                        <h2 id="welcomeText">PHP, MySQL and ReactJS Authentication App</h2>
                        <Link to="/login" className="button">Se connecter</Link>
                        <Link to="/signup" className="button success">Inscription</Link>
                    </div>
                </div>
            );
        }
    }
export default Welcome;