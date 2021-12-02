import React from 'react';
import { Fragment } from 'react';

export default function({title, description}) {
    return (
        <Fragment>
            <li className="Guestbook__List__Item">
                <strong>{title}</strong>
                <p>
                    {description}
                </p>
                <strong></strong>
                <a href=''>삭제</a>   
            </li>
        </Fragment>
    )
}