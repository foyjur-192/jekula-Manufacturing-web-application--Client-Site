import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hook/useAdmin';

const Dashboard = () => {
  const [user] = useAuthState (auth);
  const [admin] = useAdmin(user); 




    return (
       <div>
        <div class="drawer drawer-mobile container mx-auto">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content text-left ml-6">
          {/* Page content here */}
          <h1 className='text-4xl font-medium'>Dashboard</h1>
          <Outlet/>
          <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-gray-900 text-white">
         {/* Sidebar content here */}
            <li><Link to='/dashboard'> Orders </Link></li>
            <li><Link to='/dashboard/addProduct' > Add Product</Link></li>
            <li><Link to='/dashboard/cartProduct' > Cart Product</Link></li>
            {admin && <li><Link to='/dashboard/users' >Users</Link></li>}
         
            
       
          </ul>
        
        </div>
      </div>
      </div>
    );
};

export default Dashboard;