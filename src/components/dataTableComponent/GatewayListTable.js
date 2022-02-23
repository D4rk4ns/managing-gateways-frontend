import React, { useState } from 'react';
//import styled from 'styled-components';
import MaterialTable from 'material-table';
import Test from './Test';


const GatewayListTable = ({ item}) =>{


    return <div>
            <Test />
    </div>
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