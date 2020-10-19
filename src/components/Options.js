import React from 'react';
import Option from './Option';

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

export default Options;