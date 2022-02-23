import axios from 'axios';
import { useState, useEffect } from 'react';
import axios from 'axios';

const GatewayList = () => {

    const [data, setData] = useState([]);
    const [gateway, setGateway] = useState([]);

    useEffect(() => {
        const url = `https://managing-gateways-backend.herokuapp.com/gateway`;
        axios.get(url)
        .then((response) => setData(response.data))
        //.then(results => {setState(results.data.gateways);
        .then((response) => {

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
        <div style={{ maxWidth: "50%", marginLeft: "300px", marginTop: "100px" }}>
            <MaterialTable
            title="Gateway List"
            columns={[
                { title: 'Serial Number', field: 'serialNumber'},
                { title: 'Gateway Name', field: 'gatewayName'},
                { title: 'IPv4 Address', field: 'address', initialEditValue: "1.1.1.1"},
                { title: 'Peripheral Devices', field: 'peripheralDevice', lookup:{device1:'46546',device2:'445646'}}                                    
            ]}
            data={gateway}      
            />
        </div>
    );
}

export default test;