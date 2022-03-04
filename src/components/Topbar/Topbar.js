import React from 'react';
import './Topbar.scss';
import Car from '@mui/icons-material/CarRental';
import Phone from '@mui/icons-material/Phone';
import logo from './logo2.png';
import Email from '@mui/icons-material/Email';


 function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topBar ' +(menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'><img className='logo-image' src={logo}></img></a>
                    <div className='itemContainer'>
                        <Phone className='icon'/>
                        <span ><a href = "tel:+12062760792">+1(206)276-0792</a></span>
                       
                    </div>
                    <div className='itemContainer'>
                        <Email className='icon'/>
                        
                        <span><a href = "mailto:seattle.travelsafe@gmail.com" >seattle.travelsafe@gmail.com</a></span>
                    </div>
                    
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;