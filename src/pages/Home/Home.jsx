import { lazy, Suspense } from 'react'
const CardsWrapper = lazy(() => import('../../components/TopCards/CardsWrapper'))
const GraphContainer = lazy(() => import('../../components/Graphs/graphContainer'))
const EmployeeGridContainer = lazy(() => import('../../components/TableData/EmployeeGridContainer'))


export default function Home() {
    return (
        <>
            <Suspense fallback={<h1>Loading...</h1>}>
                <CardsWrapper />
            </Suspense>
            <Suspense fallback={<h1>Loading...</h1>}>
                <GraphContainer />
            </Suspense>
            <Suspense fallback={<h1>Loading...</h1>}>
                <EmployeeGridContainer />
            </Suspense>

        </>
    )
}
