// JSX
const approot = document.getElementById("app");

const app = {
    title: "Indecision App",
    subtitle: "What Do You Want To Do?",
    options: []
};


const addOption = () => {
    
};

const removeAll = () => {
    app.options=[];
    renderIndecisionApp();
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderIndecisionApp();
    }
};

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);
    const appOption = app.options[randNum];
    alert(appOption);
};

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options.length > 0 ? <p>Here are your options:</p> : <p>No options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button> 
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option, index) => {
                    return <li key={index}>{option}</li>;
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, approot); 
};

renderIndecisionApp();