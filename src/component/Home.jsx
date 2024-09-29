import React from 'react'
import Product from './Product'
import Catagory from './Catagory'
import Services from './Services'

import { Link, Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <div>
       <div className="home">
            {/* <h1>I am A Home</h1>
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, voluptates. Nemo deserunt earum vitae magnam ipsum, veritatis nulla nam recusandae iste ut, dolores sit asperiores facilis culpa nostrum. Odit, natus?</h1> */}

              <ul className='pcs '>
                <li><Link to="product/">Product</Link></li>
                <li><Link to="catagory/">Catagory</Link></li>
                <li><Link to="services/">Services</Link></li>
              </ul>

              <Outlet/>
              


            {/* <div className="center">
              <a  href="about/">AboutUs</a>
              <br />
              <a href="contact/">ContactUs</a>
            </div>  */}

        </div>
        
    </div>
  )
}
