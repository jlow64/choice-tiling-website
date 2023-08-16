import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavbarContainer,
  NavbarTitle,
  NavbarList,
  NavbarListItem,
} from './Navbar.theme';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarTitle>
        {/* <Image
            alt="choice-tiling logo"
            src="/favicon.ico"
            width={40}
            height={40}
          />
          Choice Tiling */}
        <Image
          priority
          alt="test-choice-tiling"
          src="/images/choice-logo.png"
          width={250}
          height={40}
        />
      </NavbarTitle>
      <NavbarList>
        <Link href="#home-section">
          <NavbarListItem>Home</NavbarListItem>
        </Link>
        <Link href="#about-section">
          <NavbarListItem>About us</NavbarListItem>
        </Link>
        <Link href="#services-section">
          <NavbarListItem>Services</NavbarListItem>
        </Link>
        <Link href="#project-section">
          <NavbarListItem>Projects</NavbarListItem>
        </Link>
        <Link href="#contact-section">
          <NavbarListItem>Contact us</NavbarListItem>
        </Link>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
