import React, {useEffect, useState} from "react";
import { navigate } from 'gatsby';

const LogoutPage = (props) => {

  const logoutUser = async () => {
    localStorage.removeItem("tk");
    
    navigate('/');

    
  };


  useEffect(() => {
    const tk = localStorage.getItem("tk")
    if(tk !== null){
        logoutUser();
    } else {
      navigate('/');
    }
  }, [] );
  
  return (
    <></>
  )
}

export default LogoutPage