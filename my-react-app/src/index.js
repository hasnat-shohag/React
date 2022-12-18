import React, { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
    const [inputs, setInputs] = useState( "The content of a textarea goes in the value attribute");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setInputs((values)=> {[...values, value]});
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={inputs} onChange={handleChange}></textarea>
            <input type="submit" />
        </form>
    );
}

ReactDOM.render(<MyForm />, document.getElementById("root"));