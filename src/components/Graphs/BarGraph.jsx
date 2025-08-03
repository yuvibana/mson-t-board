import React from 'react';
import GraphsCard from './GraphsCard';

const BarGraph = ({ data }) => <GraphsCard data={data} title="Employees per Department" type="bar" />;
export default React.memo(BarGraph);
