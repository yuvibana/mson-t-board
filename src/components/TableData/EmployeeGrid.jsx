import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';


import { AgGridReact } from 'ag-grid-react';

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeGrid = ({
  columnDefs,
  datasource,
  status,
  error
}) => {

  return (
    <div className="ag-theme-alpine pt-10 w-full h-[70vh]">
      {status === 'loading' && <p className="text-gray-600">Loading...</p>}
      {status === 'failed' && <p className="text-red-600">Error: {error}</p>}
      <AgGridReact
        columnDefs={columnDefs}
        rowModelType="infinite"
        pagination={true}
        paginationPageSize={10}
        datasource={datasource}
      />
    </div>
  );
};

export default EmployeeGrid;
