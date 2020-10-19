import React from 'react';

class AddOption extends React.Component {
    state = {
        error: undefined
    };

    addOption = (e) => {
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

export default AddOption;