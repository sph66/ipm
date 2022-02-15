import { Divider, Stack } from '@mui/material';
import  { DataGrid } from '@mui/x-data-grid';

import './inventoryListStyle.css'

export default function InventoryListView() {
    return (
        <Stack spacing={2} className="list-style" divider={<Divider orientation="horizontal" flexItem />}>
            <DataGrid
                columns={[{ field: 'Nume' }, { field: 'Data' }]}
                rows={[
                {
                    { id: 1, Nume: 'Inventar', Data: '2020' }
                },
                ]}
            />
        </Stack>
    )
}