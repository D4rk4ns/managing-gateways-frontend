import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import styled from 'styled-components';
import MaterialTable from 'material-table';
import getGateways from './GatewayInfo';

const GatewayListTable = () =>{

    const columns= [
        { title: 'Serial Number', field: 'serialNumber'},
        { title: 'Gateway Name', field: 'gatewayName'},
        { title: 'IPv4 Address', field: 'address', initialEditValue: "1.1.1.1"},
        { title: 'Peripheral Devices', field: 'peripheralDevice', lookup:{device1:'46546',device2:'445646'}}                                    
    ];


    return (
            <MaterialTable
            title="Gateway List"
            options={{exportButton: true, addRowPosition:'first', actionsColumnIndex: -1}}
            columns={columns}
            data={getGateways}      
            />
    );
}

export default GatewayListTable;


/*
<MaterialTable
                title="Gateway List"
                columns={columns}
                data={data}
                options={{exportButton: true, addRowPosition='first', actionsColumnIndex=-1}}
                editable={{
                    onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        setData([...data, newData]);
                        resolve();
                        }, 1000)
                    }),
                }}
            />
            */