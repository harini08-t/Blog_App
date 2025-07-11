import { Avatar, Button, ButtonGroup, Dropdown, DropdownDivider, DropdownHeader, DropdownItem, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { useSelector } from 'react-redux';
import { AiOutlineMoon, AiOutlineSearch } from "react-icons/ai";
import { FaSun } from "react-icons/fa";
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Myheader() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector(state => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Navbar className='border-b-2'>
      <Link to="/" className='self-center whitespace-nowrap text-sm
        sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 rounded-lg text-white'>Harini's</span>
        Blog

      </Link>
      <form onSubmit={handleSubmit}>
        <TextInput type='text' 
        placeholder='Search Blogs'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>

      <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={() => dispatch(toggleTheme())}>
          {theme === 'light' ? <FaSun /> : <AiOutlineMoon />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt='user'
                img={currentUser.profilePicture}
                rounded
              />

            }
          >
            <DropdownHeader>
              <span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>{currentUser.email}</span>
            </DropdownHeader>
            <Link to='/dashboard?tab=profile'>
              <DropdownItem>Profile</DropdownItem>

            </Link>
            <DropdownDivider />
            <DropdownItem onClick={handleSignout} >Sign Out</DropdownItem>

          </Dropdown>


        ) :
          (<Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>Sign In</Button>
          </Link>)
        }

        <Navbar.Toggle />

      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={path === '/'}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about" active={path === '/about'}>About</Navbar.Link>
        <Navbar.Link href="/projects" active={path === '/projects'}>Projects</Navbar.Link>

      </Navbar.Collapse>


    </Navbar>

  )
}
