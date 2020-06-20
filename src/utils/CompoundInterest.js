import React from 'react'

export default function CompoundInterest(initialValue, monthlyInterest, monthQuantity) {

    let monthlyPercentage = monthlyInterest / 100;

    let valueIncreased = 0;
    let monthValue = 0;
    let percentageIncreased = 0;

    const jsonMonthValues = [];

    for (let month = 1; month <= monthQuantity; month++) {
        let id = month;

        monthValue = Math.ceil(initialValue * Math.pow((1 + monthlyPercentage), month) * 100) / 100;

        valueIncreased = Math.ceil((monthValue - initialValue) * 100) / 100;

        console.log((valueIncreased / initialValue));

        percentageIncreased = Math.ceil((valueIncreased / initialValue) * 10000) / 100;
        console.log(percentageIncreased);

        jsonMonthValues.push({ id, monthValue, valueIncreased, percentageIncreased });
    }
    return jsonMonthValues;
}
