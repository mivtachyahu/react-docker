// JSX

const app = {
    title: "Indecision App",
    subtitle: "What Do You Want To Do?",
    options: ['One','Two']
};



let template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var approot = document.getElementById("app");

ReactDOM.render(template, approot);