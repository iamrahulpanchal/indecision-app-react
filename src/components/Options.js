import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className='widget-header'> 
                <h3 className='widget-header__title'>Your Options</h3>
                <button
                    className='button button--link' 
                    onClick={props.deleteAllOptions}
                >
                    Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className='widget__message'>Please Add an Option to Get Started!</p>}
            {
                props.options.map((opt, index) => {
                    return (
                        <Option
                            count={index+1} 
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