import React from 'react';

import { Navbar } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import SearchBox from '../SearchBox';

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom border-custom-gray">
      <Navbar.Brand>
        <Link href="/restaurants">
          <a>
            <Image
              src="/logo.png"
              alt="OneBitFood"
              width={200}
              height={44}
              className='clickable-efect'
            />
          </a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id= "responsive-navbar-nav" className="justitfy-content-end">
        <SearchBox />
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;