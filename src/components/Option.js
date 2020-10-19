import React from 'react';

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

export default Option;