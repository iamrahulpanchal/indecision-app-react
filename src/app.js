class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteAllOptions = this.deleteAllOptions.bind(this);
        this.state = {
            options: ['11', '2', '3']
        }
    }

    deleteAllOptions() {
        this.setState(() => {
            return {
                options: []
            } 
        });
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put Your Life in the Hands of a Computer!';

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} />
                <Options 
                    options={this.state.options}
                    deleteAllOptions={this.deleteAllOptions}
                />
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
                <button 
                    onClick={this.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What Should I Do?
                </button>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.deleteAllOptions}>Remove All</button>
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