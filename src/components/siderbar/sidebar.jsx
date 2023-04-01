// import React from 'react';
// import '../siderbar/siderbar.css'
// import { Link } from 'react-router-dom';
// // import { SidebarData } from '../Data/Data';
// import './siderbar.css'
// import{
//     UilEstate,
//     // UilBooks,
//     // UilUsersAlt,
//     // Uilpackage,
    
//     UilSignOutAlt,
// } from "@iconscout/react-unicons"
// const Sidebar = () => {
   
//     //  const [selected,setSelected]=useState(0);

//   return (
//    <div className='sidebar'>
//     {/* logo */}
//     <div className='logo'>
//         {/* <img src='/' alt='img'/> */}
//         <span> Dashboard</span>
        
//     </div>
//     {/* menu */}
    
//     <div className='menu '>
    
//         {/* {SidebarData.map((item,index)=>{
//             return(
//                 // <div className={selected===index?'menuItem active':'menuItem'}
//                 // key={index}
//                 // onClick={()=>setSelected(index)}>
//                 //     <item.icon/>
//                 //     <Link to=''>
//                 //     <span>{item.heading}</span>
//                 //     </Link>
//                 // </div>
//            <div>
                
//                 </div>
//             )
//         })} */}
//         {/* <div className='menues'>
//             {/* <div>
//             <UilEstate/>
//                 <Link to='home'>
//                 <span>Home</span>
//                 </Link></div> */}


//                 {/* </div>  */}
                
//                 <div className='menues'>
//                 <UilSignOutAlt/>
//             <Link to='/profile'>
//             <span>Profile</span>
//             </Link>
//             </div>
//         <div className='menuItem'>
           
            
//             <UilEstate/>
// <Link to='/home'>
//     <span>Subject</span>
// </Link></div>
       
    
//         <div className='menuItem'>
           
//            <UilSignOutAlt/>
//            <Link to='/'>
//            <span>Logout</span>
//            </Link>
//        </div>
//     </div>


//     </div>
   
//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import {
    // FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    // FaCommentAlt,
   
}from "react-icons/fa";
import{ UilSignOutAlt,} from '@iconscout/react-unicons'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        // {
        //     path:"/Dash",
        //     name:"Dashboard",
        //     icon:<FaTh/>
        // },
        {
            path:"/profile",
            name:"profile",
            icon:<FaUserAlt/>
        },
        {
            path:"/Table",
            name:"Subjects",
            icon:<FaRegChartBar/>
        },
        {
            path:"/",
            name:"Logout",
            icon:<UilSignOutAlt/>
        },
        // {
        //     path:"/signin",
        //     name:"Login",
        //     icon: <UilSignOutAlt/>
        // },
        // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" >
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           {/* <main>{children}</main> */}
        </div>
    );
};

export default Sidebar;