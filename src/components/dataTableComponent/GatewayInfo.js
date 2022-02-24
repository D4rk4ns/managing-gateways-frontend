import React, { useState, useEffect } from 'react';
import axios from 'axios';

const getGateways = () =>{

    const [data, setData] = useState([]);
    const [gateway, setGateway] = useState([]);


    useEffect(() => {
        const url = `https://managing-gateways-backend.herokuapp.com/gateway`;
        axios.get(url)
        .then((response) => setData(response.data))
        //.then(results => {setState(results.data.gateways);
        .then((response) => {
            console.log(response.gateway);
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

        console.log('Hello There!');
    }, []);

    return gateway;
}

export default getGateways;