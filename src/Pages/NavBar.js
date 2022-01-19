import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <Link className="link" to="/" exact >Click Here to Look Through the Telescope Again! Or Choose a Different Date: </Link>
                    <input type="date" id="date-picker" name="trip-start" value="2022-01-19" min="2018-01-01" max="2022-01-31"></input>
            </ul>
        </div>
    )
}