'use client';

import { Button, Container, Image, Nav, Navbar, NavbarBrand, NavbarCollapse, NavLink } from 'react-bootstrap';
import { CaretDown, Facebook, Instagram, Tiktok, TwitterX } from 'react-bootstrap-icons';

export default function TopMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavbarBrand>
          <Image src="/wod-banyans-logo.png" alt='logo' width={220} />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <NavbarCollapse id="navbarNav" className='justify-content-end'>
          <Nav>
            <NavLink><u>Home</u></NavLink>
            <NavLink>Banyans Menu</NavLink>
            <NavLink>Reservations</NavLink>
            <NavLink>Events</NavLink>
            <NavLink>Gift Cards</NavLink>
            <NavLink><Instagram /></NavLink>
            <NavLink><Facebook /></NavLink>
            <NavLink><TwitterX /></NavLink>
            <NavLink><Tiktok /></NavLink>
            <Button variant='light' >English <CaretDown /></Button>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}