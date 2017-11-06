// JSX

const app = {
    title: "Indecision App",
    subtitle: "What Do You Want To Do?"
};

let template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>

    </div>
);


var approot = document.getElementById("app");

ReactDOM.render(template, approot);