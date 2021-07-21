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
                />
            </label>
        )
    }
    else if ( props.elm === 'textarea' ) {
        return (
            <label>
                {props.name}
                <textarea name={props.name} rows="10" required></textarea>
            </label>
        )
    }
    else {
        return null
    }
}

export default Input;
