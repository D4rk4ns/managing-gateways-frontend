import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';
import MaterialTable from 'material-table';

//{ item }
const GatewayUpdateTable = () =>{
    const [data, setData] = useState([]);
    const url = `https://managing-gateways-backend.herokuapp.com/gateway`;
    const [columns, setColumns] = useState([
        { title: 'Serial Number', field: 'serialNumber'},
        { title: 'Gateway Name', field: 'gatewayName'},
        { title: 'IPv4 Address', field: 'address'}
    ]);

    useEffect(() => {
        getGateways()
    },[]);

    const getGateways = () =>{
        axios.get(url)
        .then(response => setData(response.data.gateways))
        .catch((error) => {
            console.log(error.message);
        });
    }

    return <>
            <MaterialTable
                title="Update Gateway"
                columns={columns}
                data={data}
                options={{actionsColumnIndex: -1}}
                editable={{
                    onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        const dataUpdate = [...data];
                        const index = oldData.tableData.id;
                        dataUpdate[index] = newData;
                        setData([...dataUpdate]);
                        resolve();
                        }, 1000)
                    })
                }}
                />
    </>
}

export default GatewayUpdateTable;