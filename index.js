import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];

const fullName = {
    fName: "Harry",
    lName: "Potter"
}

const user = {
    ...fullName,
    id: 1,
    username:"thechosen1"
};

console.log(user);