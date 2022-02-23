import React, { Component } from "react";
import axios from 'axios';
import { forwardRef } from 'react';

export default class FetchDataTable extends Component {
    
    constructor(props) {
        super(props);
        this.state = {gateways: []};   
    }

    componentDidMount(prevProps) {    
        const maxResults = 20;    
        const url = `https://managing-gateways-backend.herokuapp.com/gateway/?results=${maxResults}`;
        axios.get(url)
        .then(results => {
            console.log(results);
            console.log(results.data.results);
            this.setState({ gateway: results.data.results });
    
        var newGateway = results.data.results.map(function(val) {          
            return {
                serialNumber: val.serialNumber,
                gatewayName: val.gatewayName,
                address: val.address,
                peripheralDevice: val.peripheralDevice,          
            };
        });
        
        console.log(results.data.results); 
        
        this.setState({
            GatewayArray: newGateway  //set state of the weather5days
        },()=> {
            console.log(this.state.GatewayArray); 
            console.log('this.tableArray ',this.state.GatewayArray);
        });      
        });
    }
    
    render() {
        return (      
        <div style={{ maxWidth: "50%", marginLeft: "300px", marginTop: "100px" }}>
            <MaterialTable
            
            columns={[
                {
                title: 'Image',
                field: 'image',
                render: rowData => (
                    <img
                    style={{ height: 36, borderRadius: '50%' }}
                    src={rowData.image}
                    />
                ),
                },
                { title: "Name", field: "name", type: "numeric", align: 'left' },            
                { title: "Gender", field: "gender"},            
                { title: "Email", field: "email" },
                { title: "Cell Phone", field: "cell", type: "numeric" }                                     
            ]}
            data={this.state.GatewayArray}      
            
            title="Demo Title"
            />
        </div>
        );
    }
    
}
