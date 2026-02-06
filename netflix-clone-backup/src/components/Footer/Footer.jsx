import React from 'react';
import './Footer.css';
import youtube__icon from '../../assets/youtube_icon.png';
import twitter__icon from '../../assets/twitter_icon.png';
import instagram__icon from '../../assets/instagram_icon.png';
import facebook__icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
   <div className="footer">
    <div className="footer__icons">
      <img src={facebook__icon} alt="" />
      <img src={instagram__icon} alt="" />
      <img src={twitter__icon} alt="" />
      <img src={youtube__icon} alt="" />
    </div>
    <ul>
      <li>Audio Description</li>
      <li>Help Center</li>
      <li>Gift Cards</li>
      <li>Media Center</li>
      <li>Investor Relations</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Preferences</li>
      <li>Corporate Information</li>
      <li>Contact Us</li>
    </ul>
    <p className="copyright__text">
      © 1997-2023 Netflix, Inc.
    </p>
   </div>
  )
}

export default Footer