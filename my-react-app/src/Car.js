import React from "react";

function Cars(props) {
    return <li>My Car Brand is {props.brand}</li>;
}

function Car(props) {
    // const cars = props.cars;
    const cars = [
        { id: 1, brand: "Ford" },
        { id: 2, brand: "BMW" },
        { id: 3, brand: "Audi" },
    ];
    return (
        <div>
            <ul>
                {cars.map((car) => (
                    <Cars Key = {car.id} brand={car.brand} />
                ))}
            </ul>
        </div>
    );
}

export default Car;
