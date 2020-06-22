import React from 'react';
import formatNumber from '../../utils/formatNumber';

export default function Cell(props) {
    const { id, monthValue, valueIncreased, percentageIncreased } = props.month;

    const positive = Math.sign(percentageIncreased);
    const colors = { primary: '#000', secondary: '#111'};
    if (positive === 1) {
        colors.primary = '#0B6E4F';
        colors.secondary = '#0EC289'
    } else if (positive === -1) {
        colors.primary = '#AB0E23';
        colors.secondary = '#E61E38'
    }

    return (
        <div className="card horizontal col hoverable"
            style={{
                margin: 4
            }}
            key={id}>
            <span className="card-content center"
                style={{
                    padding: 16,
                    marginTop: 17,
                    color: `${colors.primary}`,
                    fontSize: '1.5em'
                }}>
                {`${id}`}
            </span>
            <div className="card-stacked">
                <div className="card-content"
                    style={{
                        padding: 12,
                        color: `${colors.primary}`,
                        fontSize: "1.3em"
                    }}>
                    <p>{`${formatNumber(monthValue)}`}</p>
                    <p>{`${formatNumber(valueIncreased)}`}</p>
                    <p style={{ color: `${colors.secondary}` }}>{`${(String(percentageIncreased)).replace('.', ',')}%`}</p>
                </div>
            </div>
        </div>
    )
}
