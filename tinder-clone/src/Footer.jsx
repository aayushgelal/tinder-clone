import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';
import './Footer.css';
function Footer() {
    return (
        <div className="footer">
            <IconButton><ReplayIcon className="replay" fontSize="large"/></IconButton>
            <IconButton><ClearIcon className="clear" fontSize="large" /></IconButton>
            <IconButton><FavoriteIcon className="favourite " fontSize="large" /></IconButton>
            <IconButton><StarIcon className="star " fontSize="large" /></IconButton>

        </div>
    )
}

export default Footer
