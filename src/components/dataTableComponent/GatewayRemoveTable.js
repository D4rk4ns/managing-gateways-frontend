import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';
import MaterialTable from 'material-table';

const GatewayRemoveTable = () =>{
    const [data, setData] = useState([]);
    const url = `https://managing-gateways-backend.herokuapp.com/gateway`;
    const columns = [
        { title: 'Serial Number', field: 'serialNumber'},
        { title: 'Gateway Name', field: 'gatewayName'},
        { title: 'IPv4 Address', field: 'address'},
        { title: 'Peripheral Devices', field: 'peripheralDevice'}
    ];

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
                title="Remove Gateway"
                columns={columns}
                data={data}
                options={{actionsColumnIndex: -1}}
                editable={{
                    onRowDelete: (newData, oldData) => new Promise((resolve, reject) => {
                        //Backend call
                        axios.delete(url+"/"+oldData.id)
                        .then(resp => {
                            getGateways()
                            resolve()
                        })
                    })
                }}
            />
    </>
}

export default GatewayRemoveTable;