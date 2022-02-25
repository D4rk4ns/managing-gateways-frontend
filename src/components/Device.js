import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Datepicker from 'react-datepicker';
require('react-datepicker/dist/react-datepicker.css');

const url="https://managing-gateways-backend.herokuapp.com/device";

class Device extends Component {

    state = { 
        data: [],
        modalInsert: false,
        modalDelete: false,
        modalSearch: '',
        form: {
            _id: '',
            uid: '',
            vendor: '',
            date: '',
            statusd: '',
            modalType: ''
        },
        statusInfo: false,
        datepick: ''
    };

    
    getDevice = () => {
        axios.get(url)
            .then(response => {
                this.setState({data: response.data.peripheral});
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

    postDevice = async () =>{
        delete this.state.form._id;
        if(this.state.datepick != undefined){
            this.setState({date: this.state.datepick});
        }
        await axios.post(url, this.state.form)
            .then(response => {
                this.modalInsert();
                this.getDevice();
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

    putDevice = async () => {
        if(this.state.datepick != undefined){
            this.setState({date: this.state.datepick});
        }
        await axios.put(url+"/"+this.state.form._id, this.state.form)
        .then(response => {
            this.modalInsert();
            this.getDevice();
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

    deleteDevice = async () => {
        await axios.delete(url+"/"+this.state.form._id)
        .then(response => {
            this.setState({modalDelete: false});
            this.getDevice();
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



    selectDevice = (peripheral) =>{
        
        this.setState({
            modalType: 'update',
            form: {
                _id:    peripheral._id,
                uid:    peripheral.uid,
                vendor: peripheral.vendor,
                date: peripheral.date,
                statusd: peripheral.statusd,
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
        });
    }

    selectDatepick = e => {
        this.setState({datepick: e});
    }

    componentDidMount() {
        this.getDevice();
    }

    render(){
        const {form} = this.state;
        return (
            <div className="Device">
                <br/>
                <button className="btn btn-success" onClick={() => {this.setState({form:null, modalType: 'insert'}); this.modalInsert()}}>Add Device</button>
                <br/><br/>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>UID</th>
                            <th>Vendor</th>
                            <th>Created at</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.state.data.map(peripheral =>{
                            return (
                                <tr key={peripheral._id}>
                                    <td>{peripheral._id}</td>
                                    <td>{peripheral.uid}</td>
                                    <td>{peripheral.vendor}</td>
                                    <td>{peripheral.date}</td>
                                    <td>{peripheral.statusd? 'Online': 'Offline'}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => {this.selectDevice(peripheral); this.modalInsert()}}><FontAwesomeIcon icon={faEdit} /></button>
                                        {" "}
                                        <button className="btn btn-primary" onClick={() => {this.selectDevice(peripheral); this.setState({modalDelete: true})}}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>


                <Modal isOpen={this.state.modalInsert}>
                    <ModalHeader style={{display:'block'}}>
                        {this.state.modalType ==='insert'?
                        <span style={{float:'center'}}>Adding a Peripheral Device</span> :
                        <span style={{float:'center'}}>Updating a Peripheral Device</span>
                        }
                        
                    </ModalHeader>
                    <ModalBody>
                        <div className='form-group'>
                            <label htmlFor='_id'>ID</label>
                            <input className='form-control' type='text' name="_id" id="_id" readOnly onChange={this.handleChange} />
                            <br />
                            <label htmlFor='uid'>UID</label>
                            <input className='form-control' type='text' name="uid" id="uid" onChange={this.handleChange} value={form?form.uid : ''} />
                            <br />
                            <label htmlFor='vendor'>Vendor</label>
                            <input className='form-control' type='text' name="vendor" id="vendor" onChange={this.handleChange} value={form?form.vendor : ''} />
                            <br />
                            <label htmlFor='date'>Created at</label>
                            <Datepicker name="date" id="date"  selected={this.state.datepick} onChange={this.selectDatepick} dateformat='dd-mmm-yyyy' value={form?form.date : ''}/>
                            <br />
                            <label htmlFor='statusd'>Status</label>
                                <br/>
                            <label>Online <input  name="statusd" id="statusd" type='radio' value='true' checked={this.statusInfo} onClick={(e) => {this.setState({statusInfo: true}); this.handleChange(e)}}/></label>
                            {" "}
                            <label>Offline <input  name="statusd" id="statusd" type='radio' value='false' checked={this.statusInfo} onClick={(e) => {this.setState({statusInfo: false}); this.handleChange(e)}}/></label>
                            <br />

                        </div>
                    </ModalBody>

                    <ModalFooter>
                        {this.state.modalType ==='insert'?
                            <button className="btn btn-success"onClick={() => this.postDevice()}>Insert</button>:
                            <button className="btn btn-primary"onClick={() => this.putDevice()}>Update</button>
                        }
                        <button className="btn btn-danger" onClick={() => this.modalInsert()} >Cancel</button>
                    </ModalFooter>

                </Modal>

                <Modal isOpen={this.state.modalDelete}>
                    <ModalBody>
                    Are you sure you want to remove the peripheral {form && form.date}
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-danger' onClick={() => this.deleteDevice()}>Yes</button>
                        <button className='btn btn-danger'onClick={() => this.setState({modalDelete: false})}>No</button>
                    </ModalFooter>
                </Modal>
                
            </div>
        );
    }

}

export default Device;


//<input className='form-control' type='text' name="statusd" id="statusd" onChange={this.handleChange} value={form?form.statusd : ''} />
//<input className='form-control' type='text' name="date" id="date" onChange={this.handleChange} value={form?form.date : ''} />