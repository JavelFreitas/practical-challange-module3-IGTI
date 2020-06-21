import React, { useState } from 'react'

export default function NumberInput(props) {

    const {name, currentValue, stepValue} = props;
    
    const handleInputChange = ({target}) => {
        const {value} = target;
        props.getInputValue(value);
    }

    return (
        <div className="input-field col s2 l4">
            <input
                placeholder="Placeholder"
                onChange={handleInputChange}
                value={currentValue}
                id="first_name"
                type="number"
                className="validate"
                step={stepValue}
            />
            <label htmlFor="first_name">{`${name}`}</label>
        </div>
    )
}
