import React from 'react';
import ChartBarStyled from './style';

const ChartBar = (props) => {
    let barFillHeight = '0%';
    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <ChartBarStyled>
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </ChartBarStyled>
    );
};

export default ChartBar;
