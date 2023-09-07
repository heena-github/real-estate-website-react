import { getAuth,onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useLocation,useNavigate} from 'react-router-dom';
import { useState,useEffect } from 'react';
// import {motion} from 'framer-motion';
import pillarlogo from '../assets/pillarlogoblack.png'

const Header = () => {
    const [pageState, setPageState] = useState("Owner Sign in");
   
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




const [shouldShowActions,setShouldShowActions]= useState(true)
const [lastYPos, setLastYPos] = useState(0);
useEffect(() => {

    function handleScroll() {
        const yPos = window.scrollY;
        const isScrolling = yPos === 0;
        setShouldShowActions(isScrolling)
        setLastYPos(yPos)
    }
    window.addEventListener('scroll', handleScroll,false)


    return () => {
        window.removeEventListener('scroll', handleScroll, false)
    }

}, [lastYPos])
    
  return (
    <div className='bg-[#cd853f] border-b shadow-sm sticky top-0 z-40 '>
        <header className='flex justify-between items-center px-3 max-w-6xl'>
        <div>
            {/* <img src='https://t4.ftcdn.net/jpg/03/26/88/47/360_F_326884774_GjqQJF9yI0PhzQaGbxWIOYAv3k7oSW8Y.jpg'
            alt='logo' className="h-16 cursor-pointer" onClick={()=>navigate("/")}/> */}
            <img src={pillarlogo}
            alt='logo' className="lg:ml-14 sm:ml-10 h-12 w-15 cursor-pointer" onClick={()=>navigate("/")}/>
        </div>
        <div>
            <ul className='flex space-x-10'>
           
                <li 
                className={`cursor-pointer py-3 font-semibold text-black
                ${pathMatchRoute("/") && "text-white border-b-[3px] border-b-black"}`}
                onClick={()=>navigate("/")}>
                Home
                </li>

                <li className={`cursor-pointer py-3 font-semibold text-black
                ${pathMatchRoute("/offers") && "text-white border-b-[3px]  border-b-black"}`}
                onClick={()=>navigate("/offers")}>
                Offers
                </li>
             
              <li className={`cursor-pointer py-3 font-semibold text-black ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) && 'border-b-[3px]  border-b-black text-white'
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




