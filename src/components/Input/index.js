import React from 'react';

const Input = (props) => {
    
    if( props.elm === 'input' ) {
        return (
            <label>
                {props.name}
                <input 
                    type={props.type} 
                    name={props.name}
                    required
                    value={props?.value}
                    onChange={props?.func}
                />
            </label>
        )
    }
    else if ( props.elm === 'textarea' ) {
        return (
            <label>
                {props.name}
                <textarea 
                    onChange={props?.func}
                    name={props.name} 
                    rows="10" 
                    value={props?.value}
                    required></textarea>
            </label>
        )
    }
    else {
        return null
    }
}

export default Input;
