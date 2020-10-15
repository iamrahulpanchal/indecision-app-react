console.log(`Running`);

const app = {
    title: 'Indecision App',
    subtitle: 'Test',
    options: ['One', 'Two', 'Three']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle && app.subtitle}</p>
        <p>{app.options.length > 0 ? 'Here Are Your Options' : 'No Options'}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
);

let count = 0;

const addOne = () => {
    console.log(`Add One`);
}

const subOne = () => {
    console.log(`Sub One`);
}

const reset = () => {
    console.log(`Reset`);
}

const templateTwo = (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={subOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(templateTwo, appRoot);