import React from 'react';

class Clock extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    // state = { date: new Date() };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date } = this.state;
        const { local } = this.props;

        return (
            <div>
                <h1> {date.toLocaleTimeString(local)}</h1>
            </div>
        );
    }
}

export default Clock;
