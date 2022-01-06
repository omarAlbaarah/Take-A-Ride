import React from 'react';
import './Topbar.scss';
import Car from '@mui/icons-material/CarRental';
import Person from '@mui/icons-material/Person';
import Email from '@mui/icons-material/Email';


 function TopBar({menuOpen, setMenuOpen}) {
    return (
        <div className={'topBar ' +(menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href='#intro' className='logo'>Take A Ride <Car className='icon'/></a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>206-240-1832</span>
                       
                    </div>
                    <div className='itemContainer'>
                        <Email className='icon'/>
                        <span>email@gmail.com</span>
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