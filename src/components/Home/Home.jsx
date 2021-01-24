import './Home.css';
import React, { Component } from 'react';
import { ROOM } from "../../shared/Room";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const options = {
    margin: 10,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 2,
      },
      700: {
          items: 2,
      },
      1000: {
        items: 3,
      }
  }
}


class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            isNavOpen:false,
            
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.myFunction = this.myFunction.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less"; 
          moreText.style.display = "inline";
        }
      }
    
    render() {


        return (
            <>
                <div className="container h-c card bg-light text-dark">
                    <div className="card-body">
                        <h1 className="tag">SunShine Lake Palace</h1>
                        <br></br>

                        <div className="row safe">
                            <div className="col-lg-4 col-12 ">
                                <h4 className="w3-padding-16 w3-center">Safeness - A Commitment <br></br> Restrengthened</h4>
                            </div>
                            <div className="col-lg-3 col-12 col-sm-6">
                                <p ><i class="fa fa-shield fa-3x s-icon" aria-hidden="true"></i><span className="s-title">Renewed Safety Protocol</span></p>
                            </div>
                            <div className="col-lg-3 col-12 col-sm-6">
                                <p ><i class="fa fa-laptop fa-3x s-icon" aria-hidden="true"></i><span className="s-title">Contactless Technology</span></p>
                            </div>
                            <div className="col-lg-2 col-12 w3-padding-32 w3-center">
                                <h4><a href="/">Learn More...</a></h4>
                            </div>
                            
                        </div>

                        <br></br><br></br>

                        <h3><b>Grand Palace Hotel in Udaipur at Lake Pichola</b></h3>
                        <ul class="fa-ul">
                            <li><i class="fa-li fa fa-map-marker"></i>Google map</li>
                            <li><i class="fa-li fa fa-phone"></i>9876543210</li>
                            <li><i class="fa-li fa fa-envelope-o"></i>SunShine@gmail.com</li>
                        </ul>
                        <br></br>
                        <h5 >
                            The young Prince, Maharana Jagat Singh requested his father, Maharana Sangram Singh II, 
                            if he could reside in the pleasure palace Jagmandir with his ladies. The Maharana did not give permission, 
                            but taunted his son that if he was so keen to stay in an Island Palace, why doesn't he build one for himself. 
                            It is this taunt that led to him building his own pleasure palace on Lake Pichola in the year 1743. 
                            {/* The Maharana (ruler) called this palace which he finished building in 1746, Jag Niwas. 
                            Jag Niwas is today the majestic and magnificent Taj Lake Palace of Udaipur.  Restored to its pristine glory, 
                            this spectacular palace became world renowned when the James Bond film ‘Octopussy’ was filmed at it. 
                            It was the secluded lair of the film’s eponymous Bond Girl. This heritage hotel in Udaipur has 65 luxurious 
                            rooms and 18 grand suites. Its location on an island in the midst of a lake affords every room breathtaking 
                            views of the neighbouring City Palace, Aravalli Hills, Machla Magra Hills and Jag Mandir. 
                            The incomparable location provides the perfect backdrop for the  exquisite cuisines at the elegant 
                            restaurants of Taj Lake Palace. These are open only to resident guests. Signature speciality restaurants 
                            at this palace serves a choice of cuisines. Neel Kamal for authentic Rajasthani and other dishes from India; 
                            and the seasonally open-air Bhairo for contemporary European delicacies. In the evening, indulge in signature martinis, 
                            cocktails and a grand collection of premium international spirits at the bar, Amrit Sagar. 
                            Continue your being pampered as a royal at our Jiva Spa in Udaipur, with a spa boat  experience like no other. 
                            Carefully created treatments draw on the ancient wellness heritage of India, and the fabled lifestyle and savoir 
                            vivre  of Indian royalty. This 5 star palace hotel in Udaipur at Lake Pichola continues the tradition of grand 
                            soirees and formal levees which were hosted here by the royal family of Udaipur. Meetings and Incentives at Taj 
                            Lake Palace are like no where else in the world. Where else can you meet at a palace in the middle of a lake. 
                            And  this most romantic of hotels, is the ideal venue for fairytale weddings and magical honeymoons. 
                            Known as the Venice of the East, the city of Udaipur, with its elaborate palaces, serene lakes, exotic temples
                            and resplendent gardens, has a lot to offer. Our concierge would be happy to assist you in making arrangements, 
                            and plan a special tour of the city of lakes in one of our vintage cars.</span> */}
                        </h5>
                        {/* <button onClick={this.myFunction} id="myBtn">Read more</button> */}
                        <br></br><br></br>
                        <div className="row">
                            <div className="col-lg-6">
                                <h3><b>Hotel Highlights</b></h3>
                                <br></br>
                                <div className="row">
                                    <div className="col-lg-6 col-6 ">
                                        <h5><i className="fa fa-map-marker"></i> 18th Century Historic Palace</h5>
                                    </div>
                                    <div className="col-lg-6 col-6" >
                                        <h5><i className="fa fa-paper-plane-o"></i> Floating in the Middle of the Lake</h5>
                                    </div>
                                </div>
                                <br></br>
                                <div className="row">
                                    <div className="col-lg-6 col-6">
                                        <h5><i className="fa fa-map-marker"></i>Exclusive Palace Butler Service</h5>
                                    </div>
                                    <div className="col-lg-6 col-6">
                                        <h5><i className="fa fa-cutlery"></i> Royal Historic Boat Romantic Dinner</h5>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="col-lg-6">
                                <img src="assets/pic1.jpeg" alt="pic1" height="90%" width="100%"/>
                            </div>
                        </div>

                        <br></br><br></br>

                        <div className="row">

                            <div className="col-lg-6">
                                <img src="assets/pic3.jpeg" alt="pic3" height="100%" width="100%"/>
                            </div>
                            <br></br>
                            <div className="col-lg-6">
                                <h3><b>Hotel Policies</b></h3>

                                <br></br>
                                <h5>Check-in from 2:00 PM</h5>
                                <h5>Check-out till 12:00 PM</h5>
                                <h5>Early check-in and late check-out on request.</h5>
                                <h5>We accept American Express, Diner's Club, Master Card, Visa, JCB International.</h5>
                                <h5>Pets are not allowed.</h5>
                                <h5>The Palace is a Resident only facility and all services and facilities are solely for our in house guests. 
                                    The resident only policy is in place to ensure a tranquil experience for our guests.</h5>
                            </div>
                        </div>

                        <br></br><br></br>
                    </div>
                </div>

                <br></br><br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-7">
                            <h1 className="tag">Guest Rooms</h1>
                        </div>
                        <div className="col-lg-2 col-5 w3-padding-16 ">
                            <h4><a href="/rooms">Learn More...</a></h4>
                        </div>
                    </div>

                    <br></br>

                    <OwlCarousel className="owl-theme"  {...options}>
                        {
                            ROOM.map((room)=>{
                                return(
                                    <div className="item" key={room.id}>
                                        <div class="card bg-light text-dark h-c">
                                            <div class="card-body">
                                                <div>
                                                    <img src={room.image} alt={room.name} width="350" height="250"/>
                                                </div>
                                                <div className="w3-padding">
                                                    <h3><b>{room.name}</b></h3>
                                                    <h5>{room.description}</h5>
                                                    <br></br>
                                                    <h5><i className="fa fa-square-o"></i> {room.square}</h5>
                                                    <h5><i className="fa fa-wifi"></i> {room.wifi}</h5>
                                                    <h5><i className="fa fa-user"></i> {room.person}</h5>
                                                    <h5><i className="fa fa-bed"></i> {room.bed}</h5>

                                                    <div className="w3-display-bottomright">
                                                        <p>Starting Rate/Night</p>
                                                        <h5><i className="fa fa-inr"></i> {room.price} *</h5>
                                                        <button type="button" class="btn btn-warning">View Details</button>
                                                        <br></br>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </OwlCarousel>
                    <br></br>
                    <div className="row">
                         <h5>*Rates Exclusive of taxes</h5>
                    </div>

                </div>

                



                <br></br><br></br><br></br>
            </>

        );
    }
}

export default Home;

