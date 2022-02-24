import React, { useState } from 'react';
//import styled from 'styled-components';
import MaterialTable from 'material-table';
import FetchDataTable from './FetchDataTable';


const GatewayListTable = ({ item}) =>{
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
                title="Gateway List"
                columns={columns}
                data={data}
                options={{exportButton: true, addRowPosition:'first', actionsColumnIndex: -1}}
                />
    </>
}

export default GatewayListTable;


/*
<MaterialTable
                title="Gateway List"
                columns={columns}
                data={data}
                options={{exportButton: true, addRowPosition:'first', actionsColumnIndex=-1}}
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