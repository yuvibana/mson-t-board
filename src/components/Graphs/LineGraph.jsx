import React from 'react';
import GraphsCard from './GraphsCard';

const LineGraph = ({ data }) => <GraphsCard data={data} title="Weekly Productivity" type="line" />;
export default React.memo(LineGraph);
