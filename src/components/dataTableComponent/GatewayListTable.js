import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';
import MaterialTable, { Column } from '@material-table/core';

const GatewayListTable = () =>{
    const [data, setData] = useState([]);
    const url = `https://managing-gateways-backend.herokuapp.com/gateway`;
    const columns = [
        { title: 'Serial Number', field: 'serialNumber'},
        { title: 'Gateway Name', field: 'gatewayName'},
        { title: 'IPv4 Address', field: 'address'},
        { title: 'Peripheral Devices', field: 'peripheralDevice'}
    ];

    const getGateways = () =>{
        axios.get(url)
        .then(response => setData(response.data.gateways))
        .catch((error) => {
            console.log(error.message);
        });
    }

    useEffect(() => {
        getGateways();
    },[]);

    

    return <>
            <MaterialTable
                title="Gateway List"
                columns={columns}
                data={data}
                options={{exportButton: true, addRowPosition:'first', actionsColumnIndex: -1}}
                editable={{
                    onRowAdd: (newData) => new Promise((resolve, reject) => {
                            //Backend call
                            console.log(newData);
                            axios.post(url, { body: newData })
                            .then(resp => {
                                console.log(resp.data.message);
                                getGateways()
                                resolve()
                            })
                            .catch((error) => {
                                console.log(error.message);
                            });
                        })
                }}
                />
    </>
}

export default GatewayListTable;