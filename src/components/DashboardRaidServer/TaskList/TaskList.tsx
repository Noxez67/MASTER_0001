import {DataGrid, GridCellParams, GridColDef} from '@mui/x-data-grid';
import {useEffect, useState} from "react";
import Task from "./types/Task";
import {useServers} from "../../../pages/Dashboard/Dashboard/Dashboard";

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

function TaskList({serverId}: { serverId: string }) {
    const {socket} = useServers();
    const [rows, setRows] = useState<Task[]>([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        if (socket == null) return;

        socket.on("task", (guildId: string, action: string, targetName: string, status: string, date: Date) => {
            if (guildId !== serverId) return;

            const newTask: Task = {
                id,
                action,
                targetName,
                status,
                date: new Date(date).toLocaleString()
            }

            setId(id + 1);
            setRows([newTask, ...rows]);
        });
    }, [id, rows, serverId, socket]);

    if (socket == null) return null;

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