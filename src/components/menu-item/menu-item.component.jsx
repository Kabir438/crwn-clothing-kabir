import React from 'react';
import { withRouter } from 'react-router';
import './menu-item.style.scss';

function MenuItem({size, imageUrl, title, linkUrl, history, match}) {
    console.log(match)
    return (
        <div className="menu-item" style={{height: `${size ? '380px' : ''}`}} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{
                backgroundImage: `url('${imageUrl})`
            }}/>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)