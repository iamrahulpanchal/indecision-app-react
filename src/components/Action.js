import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
                className='big-button'
                onClick={props.pickOption}
                disabled={!props.hasOptions}
            >
                What Should I Do?
            </button>
        </div>
    )
}

export default Action;