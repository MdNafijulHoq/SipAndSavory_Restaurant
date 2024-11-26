import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { useNavigate } from "react-router-dom";
 
const axiosSecure = axios.create({
    baseURL: 'https://restaurant-server-lime.vercel.app'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    axiosSecure.interceptors.request.use(function (config) {
        // request interceptors to add authorization header for every secure call to the API
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

    //   Interceptors 401 and 403 status
      axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async (error) => {
        // for 401 or 403 logout the user and move the user to the login page
        const status = error.response.status
        console.log('leora etto kiser error', status)
        if(status === 401 || status === 403){
            await logOut();
            navigate('/loginRegTabs')
        }
        return Promise.reject(error);
      });
    return axiosSecure;
   
};

export default useAxiosSecure;