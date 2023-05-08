import {DataGrid, GridColDef} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import Raid from "./types/Raid";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const {apiUrl} = require("../../../config.json");

const columns: GridColDef[] = [
    {
        field: 'serverName',
        headerName: 'Server Name',
        description: "The raided guild name.",
        width: 200
    },
    {
        field: 'userName',
        headerName: 'User Name',
        description: "The user name that executed the raid",
        width: 200
    },
    {
        field: 'serverMembers',
        headerName: 'Server Members',
        type: "number",
        description: "The number of guild members",
        width: 200
    },
    {
        field: 'date',
        headerName: 'Date Time',
        description: 'The Date the raid has been executed.',
        width: 200
    },
];

function RaidList() {
    const [rows, setRows] = useState<Raid[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${apiUrl}/raids`, {
            headers: {
                "Authorization": localStorage.getItem("token") ?? ""
            }
        })
            .then(res => {
                if (res.status === 401) navigate("/login");
                if (res.status !== 200 || !res.data.raids) return;
                let id = 0;
                const raids: Raid[] = [];

                for (const raid of res.data.raids) {
                    const raidObject: Raid = {
                        id: id++,
                        date: new Date(raid.date).toLocaleString(),
                        userName: raid.authorName,
                        serverName: raid.guildName,
                        serverMembers: raid.guildUsers
                    }
                    raids.push(raidObject);
                }

                setRows(raids);
            });

    }, [navigate]);

    return (
        <section>
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
            />
        </section>
    )
}

export default RaidList;