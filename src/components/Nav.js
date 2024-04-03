import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return() => {
      window.removeEventListener('scroll', () => {});
    }
  }, [])

  return (
    <div>
      <NavWrapper show={show}>
        <Logo>
          <img 
            src="/images/logo.svg"
            alt="Disney Plus Logo"
            onClick={() => (window.location.href = '/')}
          />
        </Logo>
      </NavWrapper>
    </div>
  )
}

export default Nav;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  background-color: ${props => props.show ? "#090b13": "transparent"};
`

const Logo = styled.a`
  display: inline-block;
  max-height: 70px;
  width: 80px;
  padding: 0;
  margin-top: 4px;
  font-size: 0;

  img {
    display: block;
    width: 100%;
  }
`
