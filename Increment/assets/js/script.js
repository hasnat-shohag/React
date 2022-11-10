const domContainer = document.querySelector("#root");

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    return (
        <div id="mc">
            <h1 id="display">{counter}</h1>
            <button
                id="button"
                onClick={() => {
                    setCounter(counter + 1);
                }}
            >
                Increment +
            </button>
        </div>
    );
};

ReactDOM.render(
    <div>
        <Increment />, <Increment />, <Increment/>
    </div>,
    domContainer
);
