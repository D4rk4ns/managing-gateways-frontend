import React from 'react'
import GatewayUpdateTable from '../components/dataTableComponent/GatewayUpdateTable';
import GatewayListTable   from '../components/dataTableComponent/GatewayListTable';
import GatewayRemoveTable from '../components/dataTableComponent/GatewayRemoveTable';

export const GatewayList = ( ) => {
    return (
        <div className='gateway'  style={{ maxWidth: '100%' }}>
            <GatewayListTable /> 
        </div>
    )
}

export const GatewayUpdate = ( ) => {
    return (
        <div className='gateway'  style={{ maxWidth: '100%' }}>
            <GatewayUpdateTable /> 
        </div>
    )
}

export const GatewayRemove = ( ) => {
    return (
        <div className='gateway'  style={{ maxWidth: '100%' }}>
            <GatewayRemoveTable /> 
        </div>
    )
}