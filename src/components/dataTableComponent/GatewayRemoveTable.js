import React, { useState } from 'react';
//import styled from 'styled-components';
import MaterialTable from 'material-table';

//{ item }
const GatewayRemoveTable = () =>{
    
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
                title="Remove Gateway"
                columns={columns}
                data={data}
                options={{actionsColumnIndex='-1'}}
                editable={{
                    onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                        const dataDelete = [...data];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setData([...dataDelete]);
                        resolve()
                        }, 1000)
                    }),
                }}
            />
    </>
}

export default GatewayRemoveTable;