console.log(`Running`);

const template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is a Paragraph</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);