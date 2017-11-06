"use strict";

// JSX

var app = {
    title: "Indecision App",
    subtitle: "What Do You Want To Do?"
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    React.createElement(
        "p",
        null,
        app.subtitle
    )
);

var approot = document.getElementById("app");

ReactDOM.render(template, approot);
