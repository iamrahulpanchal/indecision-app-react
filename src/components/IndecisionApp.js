import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';

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

export default IndecisionApp;