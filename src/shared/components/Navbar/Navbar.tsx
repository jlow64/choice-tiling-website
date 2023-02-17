import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  NavbarContainer,
  NavbarTitle,
  NavbarList,
  NavbarListItem,
} from './Navbar.theme';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <NavbarContainer>
      <NavbarTitle>
        <Link href="/">
          <Image src="/favicon.ico" width={40} height={40} />
        </Link>
        Choice Tiling
      </NavbarTitle>
      <NavbarList>
        <Link href="/">
          <NavbarListItem
            onClick={() => setActiveIndex(0)}
            isActive={activeIndex === 0}
          >
            Home
          </NavbarListItem>
        </Link>
        <Link href="/about">
          <NavbarListItem
            onClick={() => setActiveIndex(1)}
            isActive={activeIndex === 1}
          >
            About us
          </NavbarListItem>
        </Link>
        <Link href="/projects">
          <NavbarListItem
            onClick={() => setActiveIndex(2)}
            isActive={activeIndex === 2}
          >
            Projects
          </NavbarListItem>
        </Link>
        <Link href="/contact">
          <NavbarListItem
            onClick={() => setActiveIndex(3)}
            isActive={activeIndex === 3}
          >
            Contact us
          </NavbarListItem>
        </Link>
      </NavbarList>
    </NavbarContainer>
  );
};

export default Navbar;
