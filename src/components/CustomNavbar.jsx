// CustomNavbar.jsx
import React from 'react';
import { Button, Navbar } from "flowbite-react";
import { IoSearch } from 'react-icons/io5';

const CustomNavbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault(); // Prevents the form from submitting the traditional way
    onSearch(searchQuery);
  };

  return (
    <Navbar fluid rounded className='container mx-auto px-4 py-3 sticky top-0 z-10'>
      <Navbar.Brand href="/">
        <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>

      <Navbar.Toggle className="md:hidden ml-3" />

      <div className="flex items-center md:order-2 w-full md:w-auto mt-3 md:mt-0">
        <form onSubmit={handleSearch} className="relative flex-grow flex">
            <div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IoSearch />
          </div>
          </div>
          <Button type="submit" className="ml-3">Search</Button>
        </form>
      </div>

      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
