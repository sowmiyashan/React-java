import React, { Component } from 'react';
import './Room.css'
import { ROOM } from '../../shared/Room'

class Room extends Component {
    render() {
        return (
            <div className="container r-p">
                <h1>Guest Rooms</h1>
                <h5 className="w3-padding-24">Our suites & rooms in Udaipur have it all worked out for you. Smart and elegant, these beautifully designed, our suites & rooms are spacious and well equipped with the best amenities that offer picturesque view of the gardens or city or the hills.</h5>
                <br/><br/>
                <div className="row safe">
                    <div className="col-lg-4 col-12 ">
                        <h3 className="w3-center">Safeness - A Commitment <br></br> Restrengthened</h3>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <h6 ><i class="fa fa-shield fa-3x s-icon" aria-hidden="true"></i><span className="s-title">Renewed Safety Protocol</span></h6>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <h6 ><i class="fa fa-laptop fa-3x s-icon" aria-hidden="true"></i><span className="s-title">Contactless Technology</span></h6>
                    </div>
                    <div className="col-lg-2 col-12 w3-padding-32 w3-center">
                        <h4><a>Learn More...</a></h4>
                    </div>
                </div>
                <br/><br/>

                {
                    ROOM.map((room) =>{
                        return(
                            <>
                                <div className="card bg-light text-dark">
                                    <div className="card-body">
                                        <div className="row">
                                            <img src={room.image} alt="room1" height="300vh" className="col-md-4"/>
                                            <div className="col-md-6 col-12">
                                                <h2 className="w3-padding-16">{room.name}</h2>
                                                <h5>{room.description}</h5>
                                                <div className="row w3-padding-16">
                                                    <div className="col-6">
                                                        <h5><i className="fa fa-square-o"></i> {room.square}</h5>
                                                        <h5><i className="fa fa-user"></i> {room.person} </h5>                              
                                                    </div>
                                                    <div className="col-6">
                                                        <h5><i className="fa fa-wifi"></i> {room.wifi}</h5>
                                                        <h5><i className="fa fa-bed"></i> {room.bed}</h5>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-md-2 col-12">
                                                <div className="bot-part">
                                                    <p>Starting Rate/Night</p>
                                                    <h5><i className="fa fa-inr"></i> {room.price} *</h5>
                                                    <button type="button" class="btn btn-warning">View Rates</button>
                                                    <br></br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </>
                        );
                    })
                }
                <br/><br/><br/>
            </div>
        );
    }
}

export default Room;