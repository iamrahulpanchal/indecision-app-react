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

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);