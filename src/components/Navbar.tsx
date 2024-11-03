import type React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row gap-2 p-2">
      <a href="/" className="bg-red-100 px-4 py-2">
        _
      </a>
      <a href="/about">Music</a>
      <a href="/contact">Video</a>
    </nav>
  );
};

export default Navbar;
