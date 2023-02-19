import React from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {

    // const location = useLocation()
    const navigate=useNavigate()
//    function pathMatchRoute(route){
//     if(route === location.pathname){
//         return true;
//     }
//    }

   const navLinkStyles = ({isActive})=> {
    return{
    //   fontWeight:isActive ? 'bold' : 'normal',
    //   textDecoration: isActive ? "none" : "underline"
    color:isActive?'black':'grey',
    borderBottom:isActive?' 3px solid blue':'grey'
    }
  }
    
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl'>
        <div>
            <img src='https://t4.ftcdn.net/jpg/03/26/88/47/360_F_326884774_GjqQJF9yI0PhzQaGbxWIOYAv3k7oSW8Y.jpg'
            alt='logo' className="h-16 cursor-pointer" onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className='flex space-x-10'>
            <NavLink to={'/'} style={navLinkStyles}>
            <li className={`cursor-pointer py-3 font-semibold`}>
            Home
            </li></NavLink>

                {/* <li 
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMatchRoute("/") && "text-black border-b-red-500"}`}
                onClick={()=>navigate("/")}>
                Home
                </li> */}

            <NavLink to={'/offers'} style={navLinkStyles}>
            <li className={`cursor-pointer py-3 font-semibold`} >
            offers
            </li></NavLink>
                {/* <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
                onClick={()=>navigate("/offers")}>
                Offers
                </li> */}

            <NavLink to={'/sign-in'} style={navLinkStyles}>
            <li className={`cursor-pointer py-3 font-semibold`}>
            sign-in
            </li></NavLink>
                {/* <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent
                ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}
                onClick={()=>navigate("/sign-in")}>
                Sign in
                </li> */}
            </ul>
        </div>
        </header>
    </div>
  )
}

export default Header




