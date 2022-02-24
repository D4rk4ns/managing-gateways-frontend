import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';
import MaterialTable from 'material-table';

const GatewayListTable = () =>{

    const [data, setData] = useState([]);
    const [gateway, setGateway] = useState([]);
    const columns= [
        { title: 'Serial Number', field: 'serialNumber'},
        { title: 'Gateway Name', field: 'gatewayName'},
        { title: 'IPv4 Address', field: 'address', initialEditValue: "1.1.1.1"},
        { title: 'Peripheral Devices', field: 'peripheralDevice', lookup:{device1:'46546',device2:'445646'}}                                    
    ];

    useEffect(() => {
        const url = `https://managing-gateways-backend.herokuapp.com/gateway`;
        axios.get(url)
        .then((response) => setData(response.data))
        //.then(results => {setState(results.data.gateways);
        .then((response) => {
            console.log(response);
            console.log(response.gateways);
            console.log(response.data.gateways);
            setGateway(response.gateways.map(function(val) {          
                    return {
                        serialNumber        : val.serialNumber,
                        gatewayName         : val.gatewayName,
                        address             : val.address,
                        peripheralDevice    : val.peripheralDevice,          
                    };
                })
            );
        })
        .catch((error) => {
                console.log(error.message);
        });
    }, []);


    return (
            <MaterialTable
            title="Gateway List"
            options={{exportButton: true, addRowPosition:'first', actionsColumnIndex: -1}}
            columns={columns}
            data={gateway}      
            />
    );
}

export default GatewayListTable;
