import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={footerStyle}>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/About">About</Link>
    </div>
  )
}


const footerStyle= {
  background: '#a3d8f4',
  color: '#fff',
  textAlign: 'center',
  padding: '10px',
  marginTop: '115px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
 }

const linkStyle= {
  color: '#000',
  textDecoration: 'none',
} 


  
export default Footer;