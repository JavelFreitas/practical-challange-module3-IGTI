import React, { useState, useEffect } from 'react'
import CompoundInterest from '../../utils/CompoundInterest';
import Cell from './Cell'

export default function MonthCells(props) {
    const { initialValue, monthlyInterest, monthQuantity } = props;
    const [jsonMonthValues, setJsonMonthValues] = useState([]);

    useEffect(() => {
        const jsonValues = CompoundInterest(initialValue, monthlyInterest, monthQuantity);
        setJsonMonthValues(jsonValues);
    }, [initialValue, monthlyInterest, monthQuantity])

    return (
        <div className="row">
            {jsonMonthValues.map(month => {
                return (
                    <Cell key={month.id} month={month}/>
                )
            })}
        </div>
    )
}
