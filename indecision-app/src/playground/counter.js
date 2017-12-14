let count = 0;
const plusOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();    
};
const resetButton = () => {
    count=0;
    renderCounterApp();    
};

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={plusOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetButton}>RESET</button>
        </div>
    );
    ReactDOM.render(template2, approot);    
};
renderCounterApp();