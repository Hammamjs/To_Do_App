import { Outlet } from 'react-router-dom';
import NavBar from '../global/NavBar';
import SideBar from '../global/sidebar';
import { useState } from 'react';
const Layout = () => {
  const [isSidebar, setIsSidebar] = useState(false);

  const handleIsSideBar = () => {
    setIsSidebar(!isSidebar);
  };

  return (
    <div className={`App text-center ${isSidebar ? 'open-side-bar' : ''}`}>
      <NavBar />
      <SideBar handleIsSideBar={handleIsSideBar} />
      <div className="container max-w m-auto flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
