import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.background};
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ThemeToggle = styled.button`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.border};
  }
`;

const MenuToggle = styled.button`
  display: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.5rem;
  padding: 0.5rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Container>
        <Logo to="/">João Santos</Logo>
        <NavLinks isOpen={isOpen}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>Sobre</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projetos</NavLink>
          <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contato</NavLink>
          <ThemeToggle onClick={toggleTheme}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </ThemeToggle>
        </NavLinks>
        <MenuToggle onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>
      </Container>
    </Nav>
  );
};

export default Navbar; 