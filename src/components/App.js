//import Banner from './Banner'
//import ShoppingList from './ShoppingList'
//import Footer from './Footer'
//import QuestionForm from './QuestionForm'
//import Cart from './Cart'
//import { useState } from 'react'
import Layout from './Layout'
import SignUp from './SignUp'

import { BrowserRouter , Routes , Route, Navigate  } from 'react-router-dom';
import {useState, useEffect } from 'react';

import AuthContext from '../contexts/AuthContext';
import Header from './Header';
import Footer from './Footer2'; 
import Home from './Home'; 
import LogIn from './LogIn';
import Profile from './Profile';

function App() {
    //  const [cart, updateCart] = useState([])

  //<Banner> <img src={logo} alt='La maison jungle' /> <h1 className='lmj-title'>La maison jungle</h1></Banner>
  const [user, setUser] = useState(null);

         //  const [isInitialised, setIIsInitialised]= useState(false);

           const logout= ()=> {
            setUser(null);
            localStorage.setItem("token",null);
           };
  return (
         <div>
           {/*<Banner />*/}
           {/* <QuestionForm/>*/}

            {/*<div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div> 
          <Footer />
          */}
    <AuthContext.Provider value={{user,setUser,logout}}>
        
        <BrowserRouter>
                 <Header />
               <Routes >
                 <Route  path="/" element={<Home />} />
                  <Route  path="/auth/SignUp" element={!user ? <SignUp/> : <Navigate to="/" />} />
                  <Route  path="/auth/LogIn"  element={!user ? <LogIn/> : <Navigate to="/" />}/>
                  <Route  path="/courses"  element={!user ? <Profile/> : <Navigate to="/auth/LogIn" />}/>

              </Routes >
               <Footer />
       </BrowserRouter>
    </AuthContext.Provider>



          </div> 
  )
}

export default App
