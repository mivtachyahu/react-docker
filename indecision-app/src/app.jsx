// JSX

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is Some Info</p>
        <ol>
            <li>one</li>
            <li>two</li>
        </ol>
    </div>
);

let templateTwo = (
    <div>
        <h1>Matthew Brown</h1>
        <p>Location: Bristol</p>
    </div>
);

var approot = document.getElementById("app");

ReactDOM.render(templateTwo, approot);