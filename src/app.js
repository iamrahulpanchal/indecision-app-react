console.log(`Running`);

const title = 'Indecision App';
const para = 'This is a Para';

const template = (
    <div>
        <h1>{`${title}`.toUpperCase()}</h1>
        <p>{para}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);