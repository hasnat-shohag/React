import React from 'react';

class Clock extends React.PureComponent {
    // constructor(props) {
    //     super(props);
    //     this.state = { date: new Date() };
    // }
    state = { date: new Date() };


    componentDidMount() {
        this.clockTimer = setInterval(() => 
            this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1> {new Date().toLocaleTimeString(this.state.date.local)}</h1>
            </div>
        );
    }
}

export default Clock;
