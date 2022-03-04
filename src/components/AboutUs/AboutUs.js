import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div class="footer-dark" id='aboutus'>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Special Airport Transportation</a></li>
                            <li><a href="#">Special Events</a></li>
                            <li><a href="#">Special Rides</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 item text">
                        <h3>Travel Safe</h3>
                        <p>In Seattle, our company has been giving outstanding service!
                          Make sure to reserve your elegant mode of transportation with us when looking 
                          for Limousine Rentals in Seattle</p>
                    </div>
                    <div class="col-md-4 item text">
                        <h3>Travel Safe</h3>
                        <p>Chauffeur Driven, Safe and Convenient Transportation with Immaculate Vehicles in 
                          Professional Manner. Going to your destination in style and on time , whether is a airport transfer,
                          business trip, family occasion, entertainment and sport events or just a night out</p>
                    </div>
                </div>
               
            </div>
        </footer>
    </div>
  );

}

export default AboutUs;