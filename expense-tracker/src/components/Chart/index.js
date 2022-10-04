import React from 'react';
import ChartStyled from './style';
import ChartBar from '../ChartBar';

const Chart = (props) => {
    const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...valueArray);
    return (
        <ChartStyled>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </ChartStyled>
    );
};

export default Chart;
