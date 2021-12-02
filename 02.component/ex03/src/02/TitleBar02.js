import React from 'react';

export default function TitelBar02() {
    //이 rendering을 하는 component의 state를 관리하는 함수 ?
    // useState()

    const onClickHandler = (e) => {
        console.log('TitleBar02 clicked');
    }

    return (
        <h1 
            onClick = { onClickHandler }
            style={{cursor: 'pointer'}}>
            ex03 - Functional Event Handler(Functional Component)
        </h1>
    )
}