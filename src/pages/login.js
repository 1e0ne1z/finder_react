import React, {useState, useEffect} from "react"
import { navigate } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"


const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res2 = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
      })
    });
    if(res2.status!==200){
      setError('User and password combination not found')
    } else {
      const userInfo = await res2.json();
      localStorage.setItem("tk", userInfo.user.token);
      localStorage.setItem("id", userInfo.user.id); 
      navigate('/');
    }
    
    } catch (error){
      console.error(error);
    }
  }

  return (
    <Layout>
    <Seo title="Home" />
    { error.length>0 && <div className={`alert alert-danger`} role="alert">{error}
    </div>}
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light"> Login </h1>
          <p className="lead text-muted"> Please enter your username and password</p>
          <div >
            <form className="px-4 py-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <br />
              <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  </Layout>
  )
}
  
export default LoginPage
