import React, { Component } from "react";
import axios from 'axios';
//import { forwardRef } from 'react';
import MaterialTable from 'material-table';

export default class GatewayListTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {gateways: []};   
    }

    componentDidMount(prevProps) {    
        const url = `https://managing-gateways-backend.herokuapp.com/gateway`;
        axios.get(url)
        .then(results => {
            this.setState({ gateway: results.data.gateways });
        
            var newGateway = results.data.gateways.map(function(val) {          
                return {
                    serialNumber: val.serialNumber,
                    gatewayName: val.gatewayName,
                    address: val.address,
                    peripheralDevice: val.peripheralDevice,          
                };
            });

            this.setState({ GatewayArray: newGateway });

        })
        
        .catch((error) => {
                console.log(error.message);
        });
    };
    
    
    render() {
        return (      
        <div style={{ maxWidth: "50%", marginLeft: "300px", marginTop: "100px" }}>
            <MaterialTable
            title="Gateway List"
            columns={[

                { title: 'Serial Number', field: 'serialNumber'},
                { title: 'Gateway Name', field: 'gatewayName'},
                { title: 'IPv4 Address', field: 'address', initialEditValue: "1.1.1.1"},
                { title: 'Peripheral Devices', field: 'peripheralDevice', lookup:{device1:'46546',device2:'445646'}}                                    
            ]}
            data={this.state.GatewayArray}      
            
            
            />
        </div>
        );
    }
    
}

