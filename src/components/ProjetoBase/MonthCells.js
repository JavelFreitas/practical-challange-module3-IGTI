import React, { useState, useEffect } from 'react'
import CompoundInterest from '../../utils/CompoundInterest';

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
                const { id, monthValue, valueIncreased, percentageIncreased } = month;
                return (
                    <div className="card horizontal col hoverable" style={{margin: 4}} key={id}>
                        <span class="card-content center" style={{padding: 16, marginTop: 17}}>
                            {`${id}`}
                        </span>
                        <div class="card-stacked">
                            <div class="card-content" style={{padding: 12}}>
                                <p>{`${monthValue}`}</p>
                                <p>{`${valueIncreased}`}</p>
                                <p>{`${percentageIncreased}`}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
