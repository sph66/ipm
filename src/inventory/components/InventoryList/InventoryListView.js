import { Divider, Stack } from '@mui/material';
import  { DataGrid } from '@mui/x-data-grid';

import './inventoryListStyle.css';

export default function InventoryListView() {
    const formatCurrency = (params) => {
        return Intl
            .NumberFormat('ro-RO', { style: 'currency', currency: 'RON' })
            .format(params.row.total);
    }

    return (
        <div className="list-style">
            <DataGrid
                className="item-style"
                columns={[
                    { field: 'inventar', headerName: 'NUME', width: 400, }, 
                    { field: 'data', headerName: 'DATA', width: 350, }, 
                    { valueGetter: formatCurrency, headerName: 'TOTAL', width: 350 },
                ]}
                rows={[
                    { 
                        id: 1, 
                        inventar: 'Inventar pentru anul 2020', 
                        data: '26.12.2020',
                        total: 3456345,
                    },
                    { 
                        id: 2, 
                        inventar: 'Inventar pentru anul 2021', 
                        data: '27.12.2021',
                        total: 5789234,
                    },
                    { 
                        id: 3, 
                        inventar: 'Inventar pentru anul 2019', 
                        data: '27.12.2021',
                        total: 7345234,
                    },
                ]}
                sx={{m: 2}}
            />
        </div>   
    );
}