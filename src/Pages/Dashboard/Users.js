
import { useQuery } from 'react-query';
import Loading from '../Share/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UserData from './UserData';


const Users = () => {
    const [user] = useAuthState(auth);
  
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://jekula-manufacturing-server-production.up.railway.app/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading/>
    }



    // const makeAdmin = () => {

    //     fetch(`https://jekula-manufacturing-server-production.up.railway.app/user/admin/${user}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })

    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }











    return (
        <div>
         <div>
        <div class="navbar background-2 text-black">
   <div class="flex-1">
     <a class="normal-case text-3xl">Orders</a>
   </div>
   <div class="flex-none">
     <ul>
         <h1 className='font-normal text-2xl '>Total User:{users.length}</h1>
     </ul>
   </div>
 </div>
 <section class="text-gray-600 body-font mt-5">
   <div class="container  bg-white  mx-auto">
     <div class=" w-full mx-auto overflow-auto">
       <table class="table-auto w-full text-left whitespace-no-wrap">
         <thead>
           <tr>

             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase bg-gray-100">Uer Email</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase bg-gray-100">Make Admin</th>
             <th class="px-4 py-3 title-font tracking-wider bg-gray-900 font-medium text-white text-sm uppercase bg-gray-100">Remove  user</th>

             
           </tr>
         </thead>
         <tbody>
 
             {
                users.map(user => 
                   <UserData
                   key={user._id}
                   user={user}
                   refetch={refetch}
                   >
                   </UserData>

                )
             }
 
 
 
         </tbody>
       </table>
     </div>
 
   </div>
 </section>
 
 
         </div>
        </div>
    );
};

export default Users;