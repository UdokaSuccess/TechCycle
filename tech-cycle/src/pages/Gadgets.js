import { Link } from 'react-router-dom'
import {useContext } from "react";
import { UserContext } from '../App';

  
 
function LaptopItems() {  
const user = useContext(UserContext);

const laptop = user.map(function(item){
  // ------------------return of map function---------------------------
  return(
     <div className= "card" key={item.id}>
      <img src={item.image} width={320} className="img" alt="laptops-to-be-requested"/>
     <h3 className='name'>{item.name}</h3>
      <p style={{overflow: 'hidden'}}>Specification: {item.specs}</p>
      <Link to='/receiver'><button className='request-button'>Request</button></Link>
     </div>
  )
})


// ----------------------return of function component--------------------
    return (
      <section className='gadgets-sec'>
      <div className='filter-btns'>
          <div>
          <button className='filter-btn' disabled>Gadgets available</button>
          </div>
          <div className='search'>
          <input type='search' placeholder='Search for Gadgets'/>
          <button className='search-btn'>Search</button>
          </div>
      </div>
      <div className='gadgets-row'>
        {laptop}
      </div>
      </section>
    )
  }

  

export default LaptopItems;