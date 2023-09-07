import { getAuth, updateProfile } from 'firebase/auth'
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where,onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';
import { FcHome } from "react-icons/fc";
import { Link } from 'react-router-dom';
import ListingItem from '../components/ListingItem';

import 'firebase/firestore';


const Profile = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  const [listings,setListings] = useState(null)
  const [loading,setLoading] = useState(true)
  const [changeDetails,setChangeDetails] = useState(false)

  const [buttonVisible, setButtonVisible] = useState(true);

  
  
  const [formData,setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
   
  })

  const {name,email} = formData
  // console.log(formData)
  function onLogout(){
    auth.signOut();
    navigate('/')
  }

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }


  useEffect(() => {
    // const userId =auth.currentUser.uid;
    // const db = firestore();
    // const userRef =collection(db,'users').doc(userId);
    const docRef = doc(db, "users", auth.currentUser.uid);

    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists) {
        const role = doc.data().role;
        if (role === 'buyer') {
          // The user's role is "buyer"
          // Hide the button
          setButtonVisible(false);
        } else {
          // The user's role is not "buyer"
          // Show the button
          setButtonVisible(true);
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);


  // useEffect(()=>{
  //   async function fetchUser(){
     
  //     const listingRef = collection(db,'users');
  //     const q = query(
  //       listingRef,
  //       where('role','==','buyer'),
      
  //     );
  //     const querySnap = await getDocs(q);
  //     let userlistings = [];
  //     querySnap.forEach((doc)=>{
  //       return userlistings.push({
  //         id: doc.id,
  //         data: doc.data(),
  //       })
  //     })
  //     setUsers(userlistings)
  //     console.log(userlistings)
  //     setLoading(false)
  //   }
  //   fetchUser();
  // },[])

  // console.log(auth.currentUser.)
  // if(users.data.role == 'buyer'){
  //   setShowButton(false)
  // }
  // useEffect(()=>{
  //   async function showButton(){
  //     const collectionRef = collection(db,"users")
  //   const buttonQuery = query(collectionRef,where('role' , '==' , 'owner'))
   
  //   if(buttonQuery){
  //   setShowButton(true)
  //   }
  //   else{
  //     setShowButton(false)
  //   }
  // }
  // showButton();
  // },[])
  // useEffect(()=>{
  //   const allUserRef = collection('users');
  //   const docRef = doc(auth.currentUser())
  
  //   // const q = query(
  //   //   allUserRef,
  //   //   where('role','==',(users?.role   ))
  //   // );
    
  // },[])
  // useEffect(()=>{
  //   async function showSellButton(){
     
  //     const listingRef = collection(db,'users');
  //     const q = query(
  //       listingRef,
  //       where('role','==','buyer')
  //     );
  //     const querySnap = await getDocs(q);
  //     // console.log(querySnap)
  //     // let listings = [];
  //     querySnap.
  //      querySnap.forEach((doc)=>{
  //       // return listings.push({
  //       //   id: doc.id,
  //       //   data: doc.data(),
  //       // })
  //         // return console.log(doc.data().role)
  //       if(doc.data().role='buyer'){
  //         console.log('bsnl')
  //        return setShowButton(true)
  //        }
  //     })
      
   
  //     // setLoading(false)
  //   }
  //   // fetchUserListings();
  //   showSellButton()
  // },[])


  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== name){
        //update display name in firebase auth
        await updateProfile(auth.currentUser,{
          displayName:name,
        })

        // update name in the firestore

        const docRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(docRef, {
          name,
        });
      }
      
      toast.success("Profile details updated");
    } catch (error) {
      toast.error('Could not update the profile details')
    }
  }

  useEffect(()=>{
    async function fetchUserListings(){
     
      const listingRef = collection(db,'listings');
      const q = query(
        listingRef,
        where('userRef','==',auth.currentUser.uid),
        orderBy('timestamp','desc')
      );
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc)=>{
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      })
      setListings(listings)
      // console.log(listings)
      setLoading(false)
    }
    fetchUserListings();
  },[auth.currentUser.uid])

  async function onDelete(listingID){
     if(window.confirm('Are you sure you want to delete?')){
      await deleteDoc(doc(db,'listings',listingID)) 
      const updatedListings= listings.filter(
        (listing)=> listing.id !== listingID
      )
      setListings(updatedListings)
      toast.success('Successfully Deleted The Listings')
     }
  }
   
  function onEdit(listingID){
    navigate(`/edit-listing/${listingID}`)
  }
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] mt-6 px-3">
          <form>
            {/* Name Input */}

            <input
              type="text"
              id="name"
              value={name}
              disabled={!changeDetails}
              onChange={onChange}
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${
                changeDetails && "bg-red-200 focus:bg-red-200"
              }`}
            />

            {/* Email Input */}

            <input
              type="email"
              id="email"
              value={email}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            />

{/* <input
              type="text"
              id="role"
              value={role}
              disabled
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out"
            /> */}

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6">
              <p className="flex items-center ">
                Do you want to change your name?
                <span
                onClick={() => {
                  changeDetails && onSubmit();
                setChangeDetails((prevState) => !prevState)
                }}
                 className="text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer">
                  {changeDetails ? 'Apply Changes' : 'Edit'}
                </span>
              </p>
              <p
                onClick={onLogout}
                className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer"
              >
                Sign out
              </p>
            </div>
          </form>
          
          {buttonVisible && (
          <button type='button' className="w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm 
          font-medium rounded shadow-md hover:bg-blue-700 
          transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800">
            <Link to='/create-listing' className="flex justify-center items-center">
               <FcHome className="mr-2 text-3xl bg-red-200 rounded-full p-1 border-2"/>
                Sell or Rent Your Home
            </Link>
          </button>
          )}
        </div>
      </section>

      <div className="max-w-6xl px-3 mt-6 mx-auto">
      {!loading && listings.length > 0 && (
          <>
            <h2 className="text-2xl text-center font-semibold mb-6">My Listings</h2>
            <ul className='sm:grid sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4
             2xl:grid-cols-5 mt-6 mb-6'>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.data}
                  onDelete={()=>onDelete(listing.id)}
                  onEdit={()=>onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default Profile