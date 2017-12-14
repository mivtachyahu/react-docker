const approot = document.getElementById("app");

const app = {
    visibilityState: true,
}

const toggleVisible = () => {
    app.visibilityState = !app.visibilityState;
    renderVisibilityApp();
};

const renderVisibilityApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisible}>{app.visibilityState ? "Show Details" : "Hide Details"}</button>
            <p hidden={app.visibilityState}>
                Hey, these are totally some details you can now see
            </p>
        </div>
    );
    ReactDOM.render(template, approot);    
};
renderVisibilityApp();