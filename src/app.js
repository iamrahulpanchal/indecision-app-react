class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteAllOptions = this.deleteAllOptions.bind(this);
        this.pickOption = this.pickOption.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOption = this.deleteOption.bind(this);
        this.state = {
            options: []
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('indecision');
            const options = JSON.parse(json);
    
            if(options){
                this.setState(() => {
                    return {
                        options: options
                    }
                })
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('indecision', json);
            console.log(`Saving Data...`);
        }
    }

    deleteAllOptions() {
        this.setState(() => {
            return {
                options: []
            } 
        });
    }

    deleteOption(option) {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((opt) => {
                    return option.toLowerCase() !== opt.toLowerCase();
                })
            }
        })
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
        const subtitle = 'Put Your Life in the Hands of a Computer!';

        return (
            <div>
                <Header 
                    subtitle={subtitle} 
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickOption={this.pickOption}
                />
                <Options 
                    options={this.state.options}
                    deleteAllOptions={this.deleteAllOptions}
                    deleteOption={this.deleteOption}
                />
                <AddOption
                    addOption={this.addOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision App'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.pickOption}
                disabled={!props.hasOptions}
            >
                What Should I Do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please Add an Option to Get Started!</p>}
            {
                props.options.map((opt) => {
                    return (
                        <Option 
                            key={opt} 
                            option={opt}
                            deleteOption={props.deleteOption}
                        />
                    );
                })
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            <p>{props.option}</p>
            <button 
                onClick={() => {
                    props.deleteOption(props.option)
                }}
            >
                Remove</button>
        </div>
    )
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

        if(!error) {
            e.target.elements.option.value = '';
        }
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