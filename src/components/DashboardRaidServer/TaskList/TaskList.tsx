import {DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
    {
        field: "id",
        headerName: "id",
        description: "The ID of the action.",
        width: 100
    },
    {
        field: 'action',
        headerName: 'Action',
        description: "Action types: Ban, Kick, DeleteChannel, CreateChannel...",
        width: 200
    },
    {
        field: 'targetName',
        headerName: 'Target Name',
        description: "The channel or user name an action has been applied to.",
        width: 200
    },
    {
        field: 'status',
        headerName: 'Status',
        description: "If the action has been successful or not.",
        width: 200
    },
    {
        field: 'date',
        headerName: 'Date Time',
        description: 'The Date the action has been executed.',
        width: 150
    },
];

const rows = [
    {
        id: 1,
        action: "Ban",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "Taxalo#8998"
    },
    {
        id: 2,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 3,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 4,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: false ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 5,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 6,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 7,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 8,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: false ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 9,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 10,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 1,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 12,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: false ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 13,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
    {
        id: 14,
        action: "ChannelDelete",
        date: new Date().toLocaleString(),
        status: true ? "Successful action" : "Failed action",
        targetName: "raid-by-fast-destroyers"
    },
];

function TaskList() {
    return (
        <section className="task-list">
            <DataGrid
                style={{backgroundColor: "var(--dash-main-bg)"}}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnMenu
                getCellClassName={(params: GridCellParams<any, any, number>) => {
                    if (params.field !== 'status' || params.value == null) {
                        return '';
                    }

                    return params.value.includes("Failed") ? "success-status" : "error-status"
                }}

            />
        </section>
    )
}

export default TaskList;