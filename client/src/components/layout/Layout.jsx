import React from 'react'
import Sidebar, { SidebarItem } from '../Sidebar'
import { ChevronFirst, ChevronLast, Frown, LayoutDashboard, Sparkles } from 'lucide-react';
import { MoreVertical } from 'lucide-react';
import { useLocation } from 'react-router-dom';


const Layout = ({children}) => {
    const location = useLocation();
    const path = location.pathname;
    console.log(path)
    
    return (
    <div className='flex'>
      <Sidebar>
        <SidebarItem text="Home"  icon={<LayoutDashboard />} active={path=='/dashboard'} link='/dashboard'/>
        <SidebarItem text="Complaints"  icon={<Frown />} active={path=='/complaint'} link='/complaint' />
        <SidebarItem text="Suggestions"  icon={<Sparkles />} active={path=='/suggestions'} link='/suggestions' />
      </Sidebar>
      <div>{children}</div>
    </div>
  )
}

export default Layout