import React from 'react';
import List from './List';

export default function({lists}) {
    return (
        <ul className="Guestbook__List">
                {lists.map((list) => <List
                                        key={list.no}
                                        title={list.title}
                                        description={list.description} /> )}
        </ul>

    )
}