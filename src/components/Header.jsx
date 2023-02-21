import { getAuth,onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';

const Header = () => {
    const [pageState, setPageState] = useState("Sign in");
    const location = useLocation()
    const navigate=useNavigate()

    const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);


function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
}
    
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-40'>
        <header className='flex justify-between items-center px-3 max-w-6xl'>
        <div>
            <img src='https://t4.ftcdn.net/jpg/03/26/88/47/360_F_326884774_GjqQJF9yI0PhzQaGbxWIOYAv3k7oSW8Y.jpg'
            alt='logo' className="h-16 cursor-pointer" onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className='flex space-x-10'>
           
                <li 
                className={`cursor-pointer py-3 font-semibold text-gray-400 
                ${pathMatchRoute("/") && "text-gray-900 border-b-[3px] border-b-blue-700"}`}
                onClick={()=>navigate("/")}>
                Home
                </li>

                <li className={`cursor-pointer py-3 font-semibold text-gray-400
                ${pathMatchRoute("/offers") && "text-gray-900 border-b-[3px] border-b-blue-700"}`}
                onClick={()=>navigate("/offers")}>
                Offers
                </li>
             
                <li className={`cursor-pointer py-3 font-semibold text-gray-400 ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && 'border-b-[3px] border-b-blue-700 text-gray-900'
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
            </ul>
        </div>
        </header>
    </div>
  )
}

export default Header




