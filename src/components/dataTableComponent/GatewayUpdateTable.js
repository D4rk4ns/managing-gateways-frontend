import React, { useState } from 'react';
//import styled from 'styled-components';
import MaterialTable from 'material-table';

//{ item }
const GatewayUpdateTable = () =>{
    //const [gatewayUpdateTable, setGatewayUpdateTable] = useState(false);
    //const showGatewayUPdateTable= () => setGatewayTable(!gatewayTable);
    const [columns, setColumns] = useState([
        { title: 'Serial Number', field: 'serialNumber'},
        { title: 'Gateway Name', field: 'gatewayName'},
        { title: 'IPv4 Address', field: 'address'}
    ]);

    const [data, setData] = useState([
        { serialNumber: '894561561', gatewayName: 'Huawei', address: '192.168.0.1'},
        { serialNumber: '894562651', gatewayName: 'Samsung', address: '192.168.0.1'}
    ]);

    return <>
            <MaterialTable
                title="Update Gateway"
                columns={columns}
                data={data}
                options={{actionsColumnIndex=-1}}
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