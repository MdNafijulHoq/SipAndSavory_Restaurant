import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { DNA } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <div className='mt-12 flex justify-center mx-auto'>
            <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
        </div>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={{ from: location}} replace></Navigate>
};

export default PrivateRoute;