import React from 'react'
import FooterBottom from './FooterBottom'



const Footer = () => {
  return (

<footer className=' sticky'>

<div className="  bg-[#232f3d] bg-opacity-100 text-lightText">
  <div className="max-w-screen-xl mx-auto px-4 lg:px-0 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">Get to Know Us</h3>
      <ul className="flex flex-col gap-0.5 font-bodyFont">
        <li className="footerLink">Careers</li>
        <li className="footerLink">Blog</li>
        <li className="footerLink">About Amazon</li>
        <li className="footerLink">Investor Relations</li>
        <li className="footerLink">Amazon Devices</li>
        <li className="footerLink">Amazon Science</li>
      </ul>
    </div>
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">Make Money with Us</h3>
      <ul className="flex flex-col gap-0.5 font-bodyFont">
        <li className="footerLink">Sell products on Amazon</li>
        <li className="footerLink">Sell on Amazon Business</li>
        <li className="footerLink">Sell apps on Amazon</li>
        <li className="footerLink">Become an Affiliate</li>
        <li className="footerLink">Advertise Your Products</li>
        <li className="footerLink">Sell Product with Us</li>
        <li className="footerLink">Host an Amazon Hub</li>
        <li className="footerLink">See More Make Money with Us</li>
      </ul>
    </div>
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">Amazon Payment Products</h3>
      <ul className="flex flex-col gap-0.5 font-bodyFont">
        <li className="footerLink">Amazon Business Card</li>
        <li className="footerLink">Shop with Points</li>
        <li className="footerLink">Reload Your Balance</li>
        <li className="footerLink">Amazon Currency Converter</li>
      </ul>
    </div>
    <div>
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">Let Us Help You</h3>
      <ul className="flex flex-col gap-0.5 font-bodyFont">
        <li className="footerLink">Amazon and COVID-19</li>
        <li className="footerLink">Your Account</li>
        <li className="footerLink">Your Orders</li>
        <li className="footerLink">Shipping Rates &amp; Policies</li>
        <li className="footerLink">Returns &amp; Replacements</li>
        <li className="footerLink">Manage Your Content and Devices</li>
        <li className="footerLink">Amazon Assistant</li>
        <li className="footerLink">FAQ &amp; Help</li>
      </ul>
    </div>
  </div>
  
 
</div>  

<FooterBottom/>

  </footer>


)
}

export default Footer