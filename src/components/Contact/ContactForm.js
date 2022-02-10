import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import PlaceAutocomplete from "./PlaceAutoComplete";
import './ContactForm.scss'



const ContactForm = () => {
 
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pickupAddress, setPickupAddress] = useState("");
    const [dropOffAddress, setDropOffAddress] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault(); 
        var pickupInput = document.createElement("input");
        pickupInput.type = "text";
        pickupInput.name = "pickupAddress";
        pickupInput.setAttribute('value', pickupAddress);
        var dropoffInput = document.createElement("input");
        dropoffInput.type = "text";
        dropoffInput.name = "dropoffAddress";
        dropoffInput.setAttribute('value', dropOffAddress);
        let target = e.target.cloneNode(true);
        
        target.appendChild(pickupInput);
        target.appendChild(dropoffInput);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                alert("Message Sent, We will get back to you shortly", result.text);
                setFullName("");
                setEmail("");
                setMessage("");
                setPhoneNumber("");
                setPickupAddress("");
                setDropOffAddress("");
                setPickupDate("");
                setPickupTime("");
            },
                (error) => {
                    alert("An error occurred, Please try again", error.text);
                });
               target = undefined;
    }

    const handlePickUpAddressChanges = (address) => {
        setPickupAddress(address);
    }
    const handleDropOffAddressChanges = (address) => {
        setDropOffAddress(address);
    }
    return (
        <div className='contact-wrapper' id='contact'>
            <div className='contact-content'>
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">Seattle, WA</div>
                    </div>
                    <div className="phone details">
                        <a href="tel:+12069090804">
                            <i className="fas fa-phone-alt"></i>
                            <div className="topic">Phone</div>
                            <div className="text-one">+1(206) 909-0804</div>
                        </a>
                    </div>
                    <div className="email details">
                        <a href="mailto:seattle.travelsafe@gmail.com" >
                            <i className="fas fa-envelope"></i>
                            <div className="topic">Email</div>
                            <div className="text-one">seattle.travelsafe@gmail.com</div>
                        </a>
                    </div>
                </div>
                <div className="right-side">
                    <div className="topic-text">Request a ride</div>
                    <p>Book now, and we will be back shortly with a confirmation call!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input type="text" name = "name" required placeholder="Enter your name" value={fullName} onChange={e => setFullName(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input type="email" name = "email" required placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <input type="tel" name = "phoneNumber" required required placeholder="Enter phone number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="input-box">
                            <PlaceAutocomplete address={pickupAddress} name="pickupAddress" placeholder={"Pickup from"} onChange={handlePickUpAddressChanges} />
                        </div>
                        <div className="input-box" >
                            <PlaceAutocomplete address={dropOffAddress} name='dropoffAddress' placeholder={"Drop off at"} onChange={handleDropOffAddressChanges} />
                        </div>
                        <div className="input-box">
                            <input type="date" min="2022-02-01" required name='pickupDate' value={pickupDate} onChange={e => setPickupDate(e.target.value)} />

                        </div>
                        <div className="input-box">
                            <input type="time" name='pickupTime' required value={pickupTime} onChange={e => setPickupTime(e.target.value)} />
                        </div>
                        <div className="input-box message-box">
                            <textarea rows="5" cols="20" type="text" name='message' placeholder='Additional information, You can also write your special requests here.' value={message} onChange={e => setMessage(e.target.value)} />
                        </div>
                        <div className="button">
                            <button type='submit' value="Book Now" >
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactForm;