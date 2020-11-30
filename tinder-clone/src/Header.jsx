import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import Tinder from "./Tinder-Emblem.png";
import './Header.css';
import { IconButton } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header(props) {
    const history = useHistory();
    return (
        <div className="header">
            {!props.backbutton ? <IconButton><PersonIcon fontSize="large" /></IconButton> : <IconButton onClick={() => history.push(props.backbutton)}><ArrowBackIosIcon fontSize="large" /></IconButton>}
            <img src={Tinder} alt="tinder" className="tinder-logo" />
            <Link to="/chat"><IconButton><ChatIcon fontSize="large" /></IconButton></Link>
        </div>
    )
}

export default Header