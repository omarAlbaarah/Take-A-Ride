 import './Menu.scss'

 function Menu({menuOpen, setMenuOpen}) {
     return (
         <div className={'menu ' +(menuOpen && 'active')}>
             <ul>
                 <li onClick={()=> setMenuOpen(false)}>
                     <a href='#intro'>Home</a>
                 </li>
                 <li onClick={()=> setMenuOpen(false)}>
                     <a href='#ourCars'>Our Cars</a>
                 </li>
                 <li onClick={()=> setMenuOpen(false)}>
                     <a href='#contact'>Book Now</a>
                 </li>
                 {/* <li onClick={()=> setMenuOpen(false)}>
                     <a href='#aboutUs'>AboutUs</a>
                 </li> */}
                 <li onClick={()=> setMenuOpen(false)}>
                     <a href='#aboutus'>About us</a>
                 </li>
             </ul>
         </div>
     );
 }
 export default Menu;