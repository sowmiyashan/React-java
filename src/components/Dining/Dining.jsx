import React, { Component } from 'react';
import { DINING } from '../../shared/Dining';
import './Dining.css'

class Dining extends Component {
    render() {
        return (
            <div className="container r-p">
                <h1>Unique Dining</h1>
                <h5 className="w3-padding-24" >The fine-dining restaurants in Udaipur at Taj lake Palace, Udaipur are for the exclusive pleasure of resident guests. Whether you're looking for some comfort food or a place to enjoy traditional Indian food, our restaurants in Udaipur, have it all. </h5>
                <br/><br/>

                {
                    DINING.map((d) => {
                        return(
                            <>
                                <div className="card bg-light text-dark" key={d.id}>
                                    <div className="card-body">
                                        <div className="row">
                                            <img src={d.image} alt="dining1" height="317vh" className="col-md-4"/>
                                            <div className="col-md-6 col-12">
                                                <h2 className="w3-padding-16">{d.name}</h2>
                                                <h6><i className="fa fa-map-marker"></i> Google map</h6>
                                                <h6><i className="fa fa-phone"></i> 9876543210</h6>
                                                <p className="w3-padding-16"> {d.description} </p>

                                                <div className="row">
                                                    <div className="col-6">
                                                        <h5><b>Cuisine</b> - {d.cuisine}</h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5><b>Dress code</b> -  {d.dress} </h5>
                                                    </div>
                                                    <div className="col-6">
                                                        <h5><b>Timings</b> -  {d.timings} </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2" id="reserve">
                                                <p>Average Price for 2 people</p>
                                                <h5><i className="fa fa-inr"></i> {d.price} *</h5>
                                                <button  type="button" class="btn btn-warning" >Reserve a Table</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </>
                        );
                    })
                }

                
            </div>
        );
    }
}

export default Dining;