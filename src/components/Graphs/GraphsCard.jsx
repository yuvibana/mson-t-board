import React, { useMemo } from 'react';
import { Chart } from 'react-google-charts';

const chartTypeMap = {
    bar: 'BarChart',
    line: 'LineChart',
    pie: 'PieChart',
};

const GraphsCard = React.memo(({ data = [], title = 'Chart Title', type = 'bar' }) => {

    if (!Array.isArray(data) || data.length === 0) return null;

    const chartData = useMemo(() => {
        const formatted = [['Name', 'Value']];
        data.forEach(item => formatted.push([item.name, item.value]));
        return formatted;
    }, [data]);

    const chartOptions = useMemo(() => ({
        title,
        legend: { position: 'bottom' },
        chartArea: { width: '80%', height: '70%' },
        borderRadius: "15px",
        backgroundColor: '#ffffff',
    }), [title]);


    return (
        <>
            <div style={{
                backgroundColor: '#ffffff',
                padding: '20px',
                borderRadius: '0.75rem',
            }}>

                <Chart
                    chartType={chartTypeMap[type]}
                    data={chartData}
                    options={chartOptions}
                    width="100%"
                    height="380px"
                    loader={<div>Loading {title}...</div>}
                />
            </div>
        </>
    );
});

export default GraphsCard;
