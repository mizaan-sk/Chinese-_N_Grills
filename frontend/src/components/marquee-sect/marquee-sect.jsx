import React from 'react'
import chicken from "../../assets/marquee/chicken.png"
import pizza from "../../assets/marquee/pizza.png"
import taco from "../../assets/marquee/taco.png"
import { Link } from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
const Marquee = () => {
  return (
  <>
{/* <div className="marquee-bg marque-bg-color  marquee_container">
    <div className="marquee">
    <img src={pizza} alt="" className='marquee-text marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Explore Menu</p>
<img src={chicken} alt="" className='marquee-text marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Explore Menu</p>
<img src={taco} alt="" className='marquee-text marquee-img-width' />
    </div>


</div> */}
<div className="marquee_container marque-bg-color  d-flex ">
<div className="marquee">
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link>
<img src={chicken} alt="" className='marquee-img-width' />
<HashLink smooth to="#res"><p className='marquee-text text-font-700 text-white'>Book  A Table</p></HashLink>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={taco} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={pizza} alt="" className=' marquee-img-width' />
<img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={pizza} alt="" className=' marquee-img-width' /><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={pizza} alt="" className=' marquee-img-width' /><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={pizza} alt="" className=' marquee-img-width' /><img src={chicken} alt="" className='marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Book  A Table</p>
<img src={taco} alt="" className=' marquee-img-width' />
<p className='marquee-text text-font-700 text-white'>Our Special Menu</p>
<img src={pizza} alt="" className=' marquee-img-width' />
<Link to={'/menu'}><p className='marquee-text text-font-700 text-white'>Explore Menu</p></Link><img src={pizza} alt="" className=' marquee-img-width' />  </div>
 
</div>
  </>
  )
}

export default Marquee
