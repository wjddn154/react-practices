import React from 'react';
import AddForm from './AddForm';
import GuestbookList from './GuestbookList';
import guestbook from './assets/json/data.json';

import './assets/css/styles.css';

export default function() {
    return (
        <div id='Guestbook'>
          <h1>방명록</h1>
            <AddForm />
            <GuestbookList lists={guestbook}/>
        </div>

    )
}