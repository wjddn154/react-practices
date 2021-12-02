import React from 'react';

export default function({ info }) {
    const divStyle = {
        display:none
    }


    return (
        <div id="dialog-message" className="Guestbook_MessageBox" title="" style={divStyle}>
            <p>{info}</p>
        </div>
    )
}