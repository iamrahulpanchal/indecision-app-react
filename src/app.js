class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteAllOptions = this.deleteAllOptions.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: []
        }
    }

    deleteAllOptions() {
        this.setState(() => {
            return {
                options: []
            } 
        });
    }

    pickOption() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    addOption(option) {
        if(!option) {
            return 'Enter Valid Option'
        } else if (this.state.options.indexOf(option) > -1) {
            return `Option Already Added!`
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        });
    }

    render() {
        const title = 'Indecision App';
        const subtitle = 'Put Your Life in the Hands of a Computer!';

        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle} 
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickOption={this.pickOption}
                />
                <Options 
                    options={this.state.options}
                    deleteAllOptions={this.deleteAllOptions}
                />
                <AddOption
                    addOption={this.addOption}
                />
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
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.pickOption}
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
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    addOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(() => {
            return {
                error: error
            }
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" required />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));