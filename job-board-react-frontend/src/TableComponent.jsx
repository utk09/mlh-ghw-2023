import React from "react";
import { AgGridReact } from "ag-grid-react";
import { dataForJobs } from "./dataForJobs";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TableComponent = () => {
  const myColumnDefs = [
    {
      field: "key",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      field: "jobTitle",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      field: "companyName",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      field: "location",
      sortable: true,
      filter: true,
      editable: true,
    },
    {
      field: "jobLink",
      sortable: true,
      filter: true,
      editable: true,
    }
  ];

  return (
    <div className="mx-auto mt-8 mb-20 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="ag-theme-alpine h-96 w-full">
        <AgGridReact
          rowData={dataForJobs}
          columnDefs={myColumnDefs}
          enableSorting={true}
          enableFilter={true}
          pagination={true}
          paginationPageSize={4}
          enableCellTextSelection={true}
          headerHeight={40}
          rowHeight={40}
        />
      </div>
    </div>
  );
};

export default TableComponent;