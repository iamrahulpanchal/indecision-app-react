console.log(`Running`);

const title = 'Indecision App';

const user = {
    name: 'Rahul',
    age: 24,
    location: 'Bhayandar'
}

const template = (
    <div>
        <h1>{`${title}`.toUpperCase()}</h1>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <p>{user.location}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ol>
    </div>
);

const appRoot = document.querySelector('#app');

ReactDOM.render(template, appRoot);