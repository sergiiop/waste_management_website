import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

export default function DataTablePaginada({ rows, columns }) {
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={25}
        
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 25 },
          },
        }}
      />
    </div>
  );
}