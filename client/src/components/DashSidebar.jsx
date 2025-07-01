import React, { useEffect, useState } from 'react'
import {Link, useLocation} from 'react-router-dom';
import {Sidebar, SidebarItem, SidebarItemGroup, SidebarItems} from 'flowbite-react';
import {HiAnnotation, HiArrowCircleRight, HiDocumentText, HiOutlineUserGroup, HiUser} from 'react-icons/hi';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
export default function DashSidebar() {
   const {currentUser}= useSelector((state) => state.user);
    const location=useLocation();
    const dispatch = useDispatch();
    const [tab,setTab]= useState('');
    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
    },[location.search]);
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
    <Sidebar className='w-full md:w-56'>
        <SidebarItems>
            <SidebarItemGroup className='flex flex-col gap-1'>
                
                <SidebarItem as={Link} to='/dashboard?tab=profile'active={tab==='profile'} icon={HiUser} label={ currentUser.isAdmin ? 'Admin':'User'} labelColor='dark'>
                    Profile

                </SidebarItem>
                {currentUser.isAdmin && (

                <SidebarItem as={Link} to='/dashboard?tab=posts' active={tab==='posts'} icon={HiDocumentText}>
                Posts 
                </SidebarItem>

                

                )}
                {currentUser.isAdmin && (
                  <>

                <SidebarItem as={Link} to='/dashboard?tab=users' active={tab==='users'} icon={HiOutlineUserGroup}>
                Users 
                </SidebarItem>

                <SidebarItem as={Link} to='/dashboard?tab=comments' active={tab==='comments'} icon={HiAnnotation}>
                Comments 
                </SidebarItem>
                </>
                

                

                )}
                
                <SidebarItem className='cursor-pointer' icon={HiArrowCircleRight}  onClick={handleSignout}>
                    Sign Out

                </SidebarItem>
                
            </SidebarItemGroup>
        </SidebarItems>

    </Sidebar>
  )
}
