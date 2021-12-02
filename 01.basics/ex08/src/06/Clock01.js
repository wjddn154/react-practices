import React, {Fragment} from 'react';

export default function() {

    const date = new Date();
    
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);

    let session = 'AM';
    if(hours > 12) {
        session = 'PM';
    }

    hours = ('0' + hours).slice(-2);
    
    return (
        <div>
            {hours} : {minutes} : {('0' + seconds).slice(-2)} : {session}
        </div>
    )
    //{hours} : {minutes} : {seconds < 10 ? '0' + seconds : seconds} : {session}
    //{hours} : {minutes} : {('0' + seconds).slice(-2)} : {session}

}