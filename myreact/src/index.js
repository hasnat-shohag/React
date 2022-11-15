import React from 'react';
import ReactDOM from 'react-dom';

function Clock({ local }) {
    return (
        <div>
            This is a heading
            <span> {new Date().toLocaleDateString(local)}</span>
            <h1>hey</h1>
            <p>whtsUp</p>
        </div>
    );
}

ReactDOM.render(<Clock local="ur-IN" />, document.getElementById('root'));
