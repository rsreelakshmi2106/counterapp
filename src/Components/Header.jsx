import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar dark bgColor='dark'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://weblium.com/blog/wp-content/uploads/2017/09/counter.gif'
          height='30'
          alt=''
          loading='lazy'
        />
        Counter
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header