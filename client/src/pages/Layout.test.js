import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
  test('renders Navbar component', () => {
    render(<Layout />);
    const navbarElement = screen.getByTestId('navbar');
    expect(navbarElement).toBeInTheDocument();
  });

  test('renders Outlet component', () => {
    render(<Layout />);
    const outletElement = screen.getByTestId('outlet');
    expect(outletElement).toBeInTheDocument();
  });

  test('sets loggedin to true if URL is not "http://localhost:3000/"', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com/'
      }
    });
    render(<Layout />);
    expect(console.log).toHaveBeenCalledWith(true);
  });

  test('sets loggedin to false if URL is "http://localhost:3000/"', () => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'http://localhost:3000/'
      }
    });
    render(<Layout />);
    expect(console.log).toHaveBeenCalledWith(false);
  });
});
