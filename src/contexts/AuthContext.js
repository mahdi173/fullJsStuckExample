import {createContext} from  'react';
const AuthContext = createContext( {
	user: null,
	setUser: ()=> {},
	logout: ()=> {}
});

export default AuthContext;