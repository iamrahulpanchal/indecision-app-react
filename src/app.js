console.log(`Running`);

const app = {
    title: 'Indecision App',
    subtitle: 'Put Your Life in the Hands of a Computer!',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAllOptions = () => {
    app.options = [];
    renderApp();
}

const appRoot = document.querySelector('#app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle && app.subtitle}</p>
            <p>{app.options.length > 0 ? 'Here Are Your Options' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map((opt) => {
                        return <li key={opt}>{opt}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();



