import React from 'react';

const App = function() {
    // const app = React.createElement('h1', null, 'Hello World');
    // return app;

    const message = 'Hello World';

    //JSX
    return (
        <div>
            <h1>{message}</h1>
        </div>
        // <h2>example</h2> -> 2개를 return 할 수 없음
    );
}


export { App }