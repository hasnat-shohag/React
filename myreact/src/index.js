import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.PureComponent {
    render() {
        return (
            <div>
                This is a heading
                <span> {new Date().toLocaleDateString(this.props.local)}</span>
                <h1>hey</h1>
                <p>whtsUp</p>
            </div>
        );
    }
}

ReactDOM.render(<Clock local="bn-BD" />, document.getElementById('root'));

// function Clock({ local }) {
//     return (
//         <div>
//             This is a heading
//             <span> {new Date().toLocaleDateString(local)}</span>
//             <h1>hey</h1>
//             <p>whtsUp</p>
//         </div>
//     );
// }
