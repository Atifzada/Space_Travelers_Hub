/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import NavStyle from '../styles/Navbar.module.css';

const Navbarmenu = () => (
  <>
    <Navbar bg="light" variant="light">
      <Container className={NavStyle.navContainer}>
        <Navbar.Brand className={NavStyle.navTitle}>
          <img alt="Logo" src={logo} width="70" height="70" className="d-flex align-top" />
          Space Travelers&apos; Hub
        </Navbar.Brand>

        <Nav className={NavStyle.navlinks} id="links">
          <NavLink
            to="/rockets"
            style={({ isActive, isPending }) => ({
              textDecoration: isActive ? 'underline' : '', paddingRight: isActive ? '1rem' : '', fontSize: isActive ? '2rem' : '1.5rem', color: isPending ? '#00b7ff' : '',
            })}>
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            style={({ isActive, isPending }) => ({
              textDecoration: isActive ? 'underline' : '', paddingRight: isActive ? '1rem' : '', fontSize: isActive ? '2rem' : '1.5rem', color: isPending ? '#00b7ff' : '',
            })}>
            Missions
          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive, isPending }) => ({
              textDecoration: isActive ? 'underline' : '', paddingRight: isActive ? '1rem' : '', fontSize: isActive ? '2rem' : '1.5rem', color: isPending ? '#00b7ff' : '',
            })}>
            My Profile
          </NavLink>
        </Nav>

      </Container>
    </Navbar>
  </>
);

export default Navbarmenu;
