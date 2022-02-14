import { Stack } from "@mui/material";
import './inventoryListStyle.css'


export default function InventoryListView() {
    return (
        <Stack spacing={2} className="list-style">
            <ol className="row-style">
                <li>Inventar 2021</li>
                <li>Inventar 2022</li>
            </ol>
        </Stack>
    )
}