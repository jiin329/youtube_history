
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import axios from 'axios';
import React from 'react';
import { procPostAxios } from '../component/axios/Axios';

export default function Login() {
  return (
  <GoogleOAuthProvider clientId='582238636896-c4v4r8k374qh753ac5p7ugd5bp71fcui.apps.googleusercontent.com'>
    
    <GoogleLogin
      onSuccess={async (credentialResponse) => {

        const token = credentialResponse.credential;
        const resp = await axios.post('http://localhost:3000/auth/login', {
          token: token
        })

        const data = resp.data;
        console.log(data)
        localStorage.setItem('authData', data);

      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  </GoogleOAuthProvider>
  )
}