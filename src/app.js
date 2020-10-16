class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put Your Life in the Hands of a Computer!';
        const options = ['1', '2', '3'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I Do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    removeAll() {
        
    }

    render() {
        return (
            <div>
                <button onClick={this.removeAll}>Remove All</button>
                {
                    this.props.options.map((opt) => {
                        return <Option key={opt} option={opt} />
                    })
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.option}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            alert(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" required />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));