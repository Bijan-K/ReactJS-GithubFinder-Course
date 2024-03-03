import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const NavBar = ({ title }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none mx-2 px-2">
          <FaGithub className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-sm btn-ghost">
              Home
            </Link>
            <Link to="/about" className="btn btn-sm btn-ghost">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

NavBar.defaultProps = {
  title: 'Github Finder',
};
export default NavBar;
