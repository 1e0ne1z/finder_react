import React, {useState, useEffect} from "react";
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Profile = () => {

  const [user, setUser] = useState({});

  const getUserInfo = async () => {
    try {
      const res = await fetch('/api/getInfo', {
        method: 'POST',
        body: JSON.stringify({
          token: localStorage.getItem("tk")
        })
      });
      if(res.status!==200){
        const errorInfo = await res.json();
        console.log("profile: Something went wrong");
      } else {
        const userInfo = await res.json();
        console.log(userInfo);
        setUser(userInfo);
      }
    } catch (error){
      console.error(error);
    }
  }

  useEffect(() => {
    if(localStorage.getItem("tk") === null){
      navigate('/'); 
    } 
    getUserInfo();
  }, [])

  console.log(`user: ${user}`)
  return (
    <Layout>
      <Seo title="Profile" />
      <div className="container text-center my-5">
        <h1>Welcome, {user.firstName} {user.lastName}</h1>
        <h3>This is your profile information</h3>
        <p className="font-weight-bold">ID: {user.id}</p>
        <p className="font-weight-bold">Email: {user.email}</p>
        <p className="font-weight-bold">Enterprise Name: {user.enterpriseName}</p>
        <p className="font-weight-bold">isEnterprise: {user.isEnterprise}</p>
        <Link to="/">Go back to the homepage</Link>
      </div>
    </Layout>
  )
}

export default Profile
