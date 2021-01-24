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
                        <h4 className="w3-padding-24 w3-center">Safeness - A Commitment <br></br> Restrengthened</h4>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <h6 ><i class="fa fa-shield fa-3x s-icon" aria-hidden="true"></i><span className="s-title">Renewed Safety Protocol</span></h6>
                    </div>
                    <div className="col-lg-3 col-12 col-sm-6">
                        <h6 ><i class="fa fa-laptop fa-3x s-icon" aria-hidden="true"></i><span className="s-title">Contactless Technology</span></h6>
                    </div>
                    <div className="col-lg-2 col-12 w3-padding-32 w3-center">
                        <h4><a href="/">Learn More...</a></h4>
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
                                            <img src={room.image} alt="room1" height="317vh" className="col-md-4"/>
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
                                                {(window.screen.width < 993 ? <></> : 
                                                    <div className="w3-padding-16 col-12">
                                                        <button type="button" class="btn btn-warning" data-toggle="collapse" data-target={'#'+room.id}>Room Details</button>
                                                    </div>
                                                )}
                                               
                                                
                                            </div>
                                            <div className="col-md-2 col-12">

                                                {(window.screen.width > 993 ? <></> :
                                                    <button type="button" class="w3-display-bottomleft btn btn-warning" data-toggle="collapse" data-target={'#'+room.id}>Room Details</button>
                                                )}
                                               
                                                <div className="bot-part">
                                                    <p>Starting Rate/Night</p>
                                                    <h5><i className="fa fa-inr"></i> {room.price} *</h5>
                                                    <button type="button" class="btn btn-warning" data-toggle="collapse" data-target={'#'+room.name}>View Rates</button>
                                                    <br></br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={room.id} className="collapse">
                                    <br/>
                                    <div className="card bg-light text-dark">
                                        <div className="card-body">
                                            <div className="row w3-padding-large">
                                                <div className="col-md-4">
                                                    <h4><b>Room Details</b></h4>
                                                    <h6>{room.description}</h6><br/>
                                                    <h4><b>Size</b></h4><br/>
                                                    <h6>{room.square}</h6><br/>
                                                    <h4><b>Occupancy Details</b></h4>
                                                    <h6>{room.person}</h6>
                                                </div>
                                                <div className="col-md-4 ph">
                                                    <h4><b>Bed And Bath</b></h4>
                                                    <h5>{room.description}</h5>
                                                </div>
                                                <div className="col-md-4 ph">
                                                    <h4><b>Other Conveniences</b></h4>
                                                    <h5>{room.description}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id={room.name} className="collapse">
                                    <br/>
                                    <div className="card bg-light text-dark">
                                        <div className="card-body">
                                            <div className="row w3-padding-large">
                                                <div className="col-md-4 ">
                                                    <h4><b>Best Available Rate</b></h4>
                                                </div>
                                                <div className="col-md-6">
                                                    <h4><b>Rate description:</b></h4>
                                                    <br/>
                                                    <h6>Rate includes basic WiFi upto 4 devices. Applicable taxes Extra.</h6>
                                                </div>
                                                <div className="col-md-2">
                                                    <p>Starting Rate/Night</p>
                                                    <h5><i className="fa fa-inr"></i> {room.price} *</h5>
                                                    <button type="button" class="btn btn-warning" >Select Room</button>
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