"use strict";

// JSX

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is Some Info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "one"
        ),
        React.createElement(
            "li",
            null,
            "two"
        )
    )
);

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Matthew Brown"
    ),
    React.createElement(
        "p",
        null,
        "Location: Bristol"
    )
);

var approot = document.getElementById("app");

ReactDOM.render(templateTwo, approot);
