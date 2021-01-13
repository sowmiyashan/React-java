import React, { Component } from 'react';
import './Search.css'
import { InputBase } from '@material-ui/core';
import  moment  from 'moment'

const fd = new Date();
const td = new Date();
td.setDate(td.getDate()+1);

class Search extends Component {

    constructor(props){
        super(props);
        this.state={
            from:fd,
            to:td,
            Room:[
                {
                    'room':1,
                    'adult':1,
                    'children':0
                },
            ],
            guest:1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addRoom = this.addRoom.bind(this);
        this.removeRoom = this.removeRoom.bind(this);
    }

    handleChange(event) {
        const target = event.target;

        const value = target.value;
        const name = target.name;

        this.setState({
			[name]: value,
        });
    }

    handleSubmit(event) {
		console.log(this.state);
		event.preventDefault();
    }

    addRoom(){
        if(this.state.Room.length<4)
        {
            const room = {
                room:this.state.Room.length+1,
                adult:1,
                children:0
            }
            this.setState({
                Room:[...this.state.Room,room],
                guest: this.state.guest+1
            }) 
        }
   
    }

    removeRoom(id){
        var array = [...this.state.Room];
        if(this.state.Room.length>1){
            var g = array[id-1].adult+array[id-1].children
            array.splice(id-1,1);
            var i;
            for(i=id-1;i<array.length;i++)
            {
                array[i].room = i+1;
            }
            this.setState({
                Room:array,
                guest: this.state.guest - g
            })
        }
    }

    addCount(id,person){
        var array = [...this.state.Room];
        if(array[id-1][person]<2)
        {
            array[id-1][person] = array[id-1][person]+1;
            this.setState({
                Room:array,
                guest:this.state.guest+1
            })
        }
    }

    removeCount(id,person){
        var array = [...this.state.Room];
        if(array[id-1][person]>0)
        {
            array[id-1][person] = array[id-1][person]-1;
            this.setState({
                Room:array,
                guest:this.state.guest-1
            })
        }

    }

    render() {
        return (
            <>
                <div className="container search">
                    <div className="row">
                        <div className="col-4">
                            <h4>Check-In & Check-Out</h4>
                            <a data-toggle="modal" href="#search" className="modal-s">
                                <h4> {moment(this.state.from).format("D MMM YYYY")} - {moment(this.state.to).format("D MMM YYYY")}
                                    <i className="fa fa-calendar icon"></i> 
                                </h4>
                            </a>
                        </div>
                        <div className="col-5">
                            <h4>Rooms & Guests</h4>
                            <a data-toggle="modal" href="#search" className="modal-s"><h4>Room 1-1 Guest,0 Child</h4></a>
                        </div>
                        <div className="col-3">
                            <button type="button" class="btn-bar btn btn-warning">Check Availability</button>
                        </div>
                    </div>        
                </div>
                <div className="modal" id="search">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <img src="assets/logo.png" alt="logo" className="navbar-brand" width="50px" height="50px"/>
                                <button type="button" className="close"  data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body">
                                <br></br><br></br>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="card bg-light text-dark">
                                        <div className="card-body ">
                                            <div className="row part1">
                                                <div className="col-sm-6">
                                                    <h4 id="from-date"> From  <span> 
                                                    <InputBase
                                                        value={this.state.from}
                                                        name="from"
                                                        onChange={this.handleChange}
                                                        type="date"
                                                        inputProps={{ 'aria-label': 'naked' }}
                                                    />
                                                    </span> </h4>
                                                </div>
                                                <div className="col-sm-6">
                                                    <h4 id="from-date"> To  <span> 
                                                    <InputBase
                                                        value={this.state.to}
                                                        name="to"
                                                        onChange={this.handleChange}
                                                        type="date"
                                                        inputProps={{ 'aria-label': 'naked' }}
                                                    />
                                                    </span></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br><br></br>
                                    <div className="card bg-light text-dark">
                                        <div className="card-body">
                                            <ul className="nav nav-tabs " role="tablist"> 
                                                <li className="nav-item modal-l a-r  col-4">
                                                    <button className="add" data-toggle="tab" onClick={this.addRoom} > 
                                                        <span className="icon"> 
                                                            <i className="fa fa-plus" ></i> 
                                                        </span>ADD ROOM
                                                    </button>
                                                </li>

                                                {
                                                    this.state.Room.map((r) => {
                                                        return(
                                                            <li className="nav-item modal-l col-2" key={r.room}>
                                                                <a className="nav-link " data-toggle="tab" href={'#room'+r.room}>ROOM {r.room}
                                                                    <span><i onClick={() => this.removeRoom(r.room)} className="fa fa-times fa-lg close r"></i></span>
                                                                </a>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>

                                            <div className="tab-content">

                                                {
                                                    this.state.Room.map((r) =>{
                                                        return(
                                                            <div id={'room'+r.room} key={r.room} className="container tab-pane">
                                                                <br></br><br></br>
                                                                <div className="row">
                                                                    <div className="col-6">
                                                                    <div className="row">
                                                                        <div className="col-8">
                                                                                <h3>Adults</h3>
                                                                        </div>
                                                                        <div className="col-4">
                                                                                <span>
                                                                                    <i onClick={() => this.removeCount(r.room,"adult")} className="fa fa-minus"></i>
                                                                                    <span>
                                                                                        <InputBase
                                                                                        name="adult"
                                                                                        className="guest"
                                                                                        type="text"
                                                                                        value={r.adult}
                                                                                        inputProps={{ 'aria-label': 'naked' }}
                                                                                        />
                                                                                    </span>
                                                                                    <i onClick={() => this.addCount(r.room,"adult")} className="fa fa-plus"></i>
                                                                                </span>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                    <div className="col-6">
                                                                        <div className="row">
                                                                            <div className="col-8">
                                                                            <h3>Children</h3>
                                                                            <h6>(Age : 0 - 12)</h6>
                                                                            </div>
                                                                            <div className='col-4'>
                                                                                    <span>
                                                                                        <i onClick={() => this.removeCount(r.room,"children")} className="fa fa-minus"></i>
                                                                                        <span>
                                                                                            <InputBase
                                                                                            name="children"
                                                                                            value={r.children}
                                                                                            className="guest"
                                                                                            type="text"
                                                                                            inputProps={{ 'aria-label': 'naked' }}
                                                                                            />
                                                                                        </span>
                                                                                        <i onClick={() => this.addCount(r.room,"children")} className="fa fa-plus"></i>
                                                                                    </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>    
                                                            </div>
                                                        );
                                                    })
                                                }
                                                <br></br><br></br><br></br><br></br><br></br>
                                                <br></br><br></br><br></br><br></br><br></br>
                                            </div>

                                            <div className="container modal-f">
                                                <div className="row">
                                                    <div className="col-sm-8 ">
                                                        <h5 className="final-stag">
                                                            {moment(this.state.from).format("D MMM YYYY")} - {moment(this.state.to).format("D MMM YYYY")} | {this.state.Room.length} Room | {this.state.guest} Guests
                                                        </h5>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <button type="submit" class="button btn btn-warning">Check Availability</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Search;