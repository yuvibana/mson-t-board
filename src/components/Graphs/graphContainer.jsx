
import BarGraph from './BarGraph';
import PieGraph from './PieGraph';
import LineGraph from './LineGraph';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGraphData } from '../../features/graphSlice';

export default function GraphContainer() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.graphs.loading);

    const BarData = useSelector((state) => state.graphs.barData);
    const PieData = useSelector((state) => state.graphs.pieData);
    const lineData = useSelector((state) => state.graphs.lineData);

    useEffect(() => {
        dispatch(fetchGraphData())
    }, [])

    if (loading) return <p>Loading charts...</p>;

    return (
        <div className='charts__devider pt-10'>
            <div className='flex justify-between flex-wrap gap-y-8'>
                <div className='lg:w-[67%] w-ull'>
                    <BarGraph data={BarData} />
                </div>
                <div className='lg:w-[30%] w-ull'>
                    <PieGraph data={PieData} />
                </div>
                <div className='lg:w-[100%] w-ull'>
                    <LineGraph data={lineData} />
                </div>
            </div>
        </div>
    )
}
