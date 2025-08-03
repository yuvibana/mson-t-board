import React from 'react';
import GraphsCard from './GraphsCard';

const PieGraph = ({ data }) => <GraphsCard data={data} title="Employee Distribution" type="pie" />;
export default React.memo(PieGraph);
