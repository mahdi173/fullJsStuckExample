import {useState, useEffect } from 'react';
import AuthContext from '../contexts/AuthContext';
import Header from './Header';

import Footer from './Footer2'; 


import Home from './Home'; 

function Layout () {

           const [user, setUser] = useState(null);

           const [isInitialised, setIIsInitialised]= useState(false);

           const logout= ()=> {
            setUser(null);
            localStorage.setItem("token",null);
           };

        return (
            <div>
            <AuthContext.Provider value={{user,setUser,logout}}>
                <Header />
            </AuthContext.Provider>
 <Home />

<Footer />
</div>

)

    }

export default Layout;