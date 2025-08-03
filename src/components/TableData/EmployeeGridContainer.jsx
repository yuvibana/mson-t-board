import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../features/EmployeeGridSclice';
import EmployeeGrid from './EmployeeGrid';

export default function EmployeeGridContainer() {
    const dispatch = useDispatch();
    const { items, total, status, error } = useSelector(state => state.employees);

    const [columnDefs] = useState([
        { field: 'id', sortable: true, filter: true },
        { field: 'title', sortable: true, filter: true, editable: true },
        { field: 'category', sortable: true, filter: true, editable: true },
        {
            field: 'rating', sortable: true, filter: true, editable: true,
            cellClass: params => params.value > 3 ? 'text-green-500' : 'text-red-500'
        },
        { field: 'price', sortable: true, filter: true, editable: true },
        { field: 'stock', sortable: true, filter: true, editable: true },
    ]);


    const datasource = {
        getRows: async ({ startRow, endRow, successCallback, failCallback }) => {
            const cachedRows = [];
            let allCached = true;

            for (let i = startRow; i < endRow; i++) {
                if (items[i]) {
                    cachedRows.push(items[i]);
                } else {
                    allCached = false;
                    break;
                }
            }

            if (allCached) {
                successCallback(cachedRows, total);
            } else {
                const limit = endRow - startRow;
                const skip = startRow;

                try {
                    const resultAction = dispatch(fetchEmployees({ limit, skip }));
                    const data = resultAction.payload;

                    if (data?.products) {
                        successCallback(data.products, data.total);
                    } else {
                        failCallback();
                    }
                } catch (err) {
                    console.error('Redux fetch error:', err);
                    failCallback();
                }
            }
        },
    };
    return (
        <EmployeeGrid
            columnDefs={columnDefs}
            datasource={datasource}
            status={status}
            error={error}
        />
    )
}
