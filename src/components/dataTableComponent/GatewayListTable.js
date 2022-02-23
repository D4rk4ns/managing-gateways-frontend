import React, { useState } from 'react';
//import styled from 'styled-components';
import MaterialTable from 'material-table';


const GatewayListTable = ({ item}) =>{
    //const [gatewayUpdateTable, setGatewayUpdateTable] = useState(false);
    //const showGatewayUPdateTable= () => setGatewayTable(!gatewayTable);
    const [columns, setColumns] = useState([
        { title: 'Serial Number', field: 'serialNumber'},
        { title: 'Gateway Name', field: 'gatewayName'},
        { title: 'IPv4 Address', field: 'address', initialEditValue: "1.1.1.1"},
        { title: 'Peripheral Devices', field: 'peripheralDevice', lookup:{device1:'46546',device2:'445646'}}
    ]);

    const [data, setData] = useState([
        { serialNumber: '894561561', gatewayName: 'Huawei', address: '192.168.0.1'},
        { serialNumber: '894562651', gatewayName: 'Samsung', address: '192.168.0.1'},
        { serialNumber: '872562651', gatewayName: 'Samsung', address: '192.168.0.1',peripheralDevice: '456465456' }
    ]);

    return <>
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
    </>
}

export default GatewayListTable;