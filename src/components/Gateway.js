import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const url="https://managing-gateways-backend.herokuapp.com/gateway";

class Gateway extends Component {

    state = { 
        data: [],
        modalInsert: false,
        modalDelete: false,
        form: {
            _id: '',
            serialNumber: '',
            gatewayName: '',
            address: '',
            peripheralDevice,
            modalType: ''
        }
    };

    getGateway = () => {
        axios.get(url)
            .then(response => {
                this.setState({data: response.data.gateways});
            })
            .catch(error =>{
                if(error.response){
                    console.log(error.response.data.errors);
                }
                else{
                console.log(error.message);
                }
            });
    }

    postGateway = async () =>{
        delete this.state.form._id;
        if(this.state.peripheralDevice === undefined){
            delete this.state.form.peripheralDevice;
        }
        await axios.post(url, this.state.form)
            .then(response => {
                this.modalInsert();
                this.getGateway();
            })
            .catch(error =>{
                if(error.response){
                    console.log(error.response.data.errors);
                }
                else{
                console.log(error.message);
                }
            });
    }

    putGateway = async () => {
        
        await axios.put(url+"/"+this.state.form._id, this.state.form)
        .then(response => {
            console.log(response.peripheralDevice);
            this.modalInsert();
            this.getGateway();
        })
        .catch(error =>{
            if(error.response){
                console.log(error.response.data.errors);
            }
            else{
            console.log(error.message);
            }
        });
    }

    deleteGateway = async () => {
        await axios.delete(url+"/"+this.state.form._id)
        .then(response => {
            this.setState({modalDelete: false});
            this.getGateway();
        })
        .catch(error =>{
            if(error.response){
                console.log(error.response.data.errors);
            }
            else{
            console.log(error.message);
            }
        });
    }



    selectGateway = (gateway) =>{
        
        this.setState({
            modalType: 'update',
            form: {
                _id:    gateway._id,
                serialNumber: gateway.serialNumber,
                gatewayName: gateway.gatewayName,
                address: gateway.address,
                peripheralDevice: gateway.peripheralDevice
            }
        })
    }

    modalInsert = () => {
        this.setState({modalInsert: !this.state.modalInsert});
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    componentDidMount() {
        this.getGateway();
    }

    render(){
        const {form} = this.state;
        return (
            <div className="Gateway">
                <br/>
                <button className="btn btn-success" onClick={() => {this.setState({form:null, modalType: 'insert'}); this.modalInsert()}}>Add Gateway</button>
                <br/><br/>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Serial Number</th>
                            <th>Gateway Name</th>
                            <th>IPv4 Address</th>
                            <th>Peripheral Devices</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data.map(gateway =>{
                            return (
                                <tr key={gateway._id}>
                                    <td>{gateway._id}</td>
                                    <td>{gateway.serialNumber}</td>
                                    <td>{gateway.gatewayName}</td>
                                    <td>{gateway.address}</td>
                                    <td>{gateway.peripheralDevice}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => {this.selectGateway(gateway); this.modalInsert()}}><FontAwesomeIcon icon={faEdit} /></button>
                                        {" "}
                                        <button className="btn btn-primary" onClick={() => {this.selectGateway(gateway); this.setState({modalDelete: true})}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


                <Modal isOpen={this.state.modalInsert}>
                    <ModalHeader style={{display:'block'}}>
                        {this.state.modalType ==='insert'?
                        <span style={{float:'center'}}>Adding a Gateway</span> :
                        <span style={{float:'center'}}>Updating a Gateway</span>
                        }
                    </ModalHeader>
                    <ModalBody>
                        <div className='form-group'>
                            <label htmlFor='_id'>ID</label>
                            <input className='form-control' type='text' name="_id" id="_id" readOnly onChange={this.handleChange} />
                            <br />
                            <label htmlFor='serialNumber'>Serial Number</label>
                            <input className='form-control' type='text' name="serialNumber" id="serialNumber" onChange={this.handleChange} value={form?form.serialNumber : ''} />
                            <br />
                            <label htmlFor='gatewayName'>Gateway Name</label>
                            <input className='form-control' type='text' name="gatewayName" id="gatewayName" onChange={this.handleChange} value={form?form.gatewayName : ''} />
                            <br />
                            <label htmlFor='address'>Ipv4 Address</label>
                            <input className='form-control' type='text' name="address" id="address" onChange={this.handleChange} value={form?form.address : ''} />
                            <br />
                            <label htmlFor='peripheralDevice'>Peripheral Devices</label>
                            <input className='form-control' type='text' name="peripheralDevice" id="peripheralDevice" onChange={this.handleChange} value={form.peripheralDevice} />
                            <br />
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.modalType ==='insert'?
                            <button className="btn btn-success"onClick={() => this.postGateway()}>Insert</button>:
                            <button className="btn btn-primary"onClick={() => this.putGateway()}>Update</button>
                        }
                        <button className="btn btn-danger" onClick={() => this.modalInsert()} >Cancel</button>
                    </ModalFooter>

                </Modal>
                <Modal isOpen={this.state.modalDelete}>
                    <ModalBody>
                    Are you sure you want to remove the gateway {form && form.gatewayName}
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-danger' onClick={() => this.deleteGateway()}>Yes</button>
                        <button className='btn btn-danger'onClick={() => this.setState({modalDelete: false})}>No</button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }

}

export default Gateway;