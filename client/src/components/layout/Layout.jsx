import React from 'react'
import Sidebar, { SidebarItem } from '../Sidebar'
import { Frown, LayoutDashboard, Sparkles } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Layout = ({children}) => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path)
    const { user } = useSelector(state=>state.auth)
    
    return (
    <>
      {
        user && (user?.isAdmin ? (
          <div className='flex'>
          <Sidebar>
              <SidebarItem text="Dashboard"  icon={<LayoutDashboard />} active={path=='/admin-dashboard'} link='/admin-dashboard'/>
              <SidebarItem text="Complaints"  icon={<Frown />} active={path=='/complaint-list'} link='/complaint-list' />
              <SidebarItem text="Students"  icon={<Sparkles />} active={path=='/students'} link='/students' />
          </Sidebar>
          <div className='w-full ml-20 md:ml-[20rem] overflow-x-auto'>{children}</div>
          </div>
        ) : (
          <div className='flex'>
          <Sidebar>
              <SidebarItem text="Home"  icon={<LayoutDashboard />} active={path=='/dashboard'} link='/dashboard'/>
              <SidebarItem text="Complaints"  icon={<Frown />} active={path=='/complaint'} link='/complaint' />
              <SidebarItem text="Suggestions"  icon={<Sparkles />} active={path=='/suggestions'} link='/suggestions' />
              </Sidebar>
          <div className='w-full ml-20 md:ml-72'>{children}</div>
          </div>
        ))
      }
    </>

  )
}

export default Layout