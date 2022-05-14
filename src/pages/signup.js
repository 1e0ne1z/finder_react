import React, {useState, useEffect} from "react"
import { navigate } from 'gatsby';
import Layout from "../components/layout"
import Seo from "../components/seo"


const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isEnterprise, setIsEnterprise] = useState(false);
  const [enterpriseName, setEnterpriseName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password === passwordValidation){
      // if (password.length == 0 || password.length < 6 ){
      //   setError("password minimum length is 6");
      // } else {
        try {
          const res2 = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({
              name,
              lastName,
              email,
              password,
              isEnterprise,
              enterpriseName
          })
        });
        if(res2.status!==200){
          const errorInfo = await res2.json();
          setError(errorInfo.error);
        } else {
          const userInfo = await res2.json();
          console.log(`authenticated = ${JSON.stringify(userInfo)}`);
          localStorage.setItem("tk", userInfo.user.token);
          localStorage.setItem("id", userInfo.user.id); 
          navigate('/profile');
        }
        
        } catch (error){
          console.error(error);
        }
      // }
    } else {
      setError("passwords do not match");
    }
  }

  return (
    <Layout>
    <Seo title="Home" />
    { error.length>0 && <div className={`alert alert-danger`} role="alert">{error}
    </div>}
    <section className="py-5 container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <div className="text-center">
            <h1 className="fw-light"> Signup </h1>
            <p className="lead text-muted"> Welcome. Please enter the request data</p>
          </div>
          <div >
            <form className="px-4 py-3" onSubmit={handleSubmit}>
              <div className="form-group">
                <label >Name</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label >Last Name</label>
                <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
              </div>
              <div className="form-group">
                <label >Email address</label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label >Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <label >Enter Password Again</label>
                <input type="password" className="form-control" value={passwordValidation} onChange={(e) => setPasswordValidation(e.target.value)} />
              </div>
              <br />
              <div className="form-check">
                <input type="checkbox" className="form-check-input" checked={isEnterprise} onChange={(e) => setIsEnterprise(!isEnterprise)} />
                <label className="form-check-label" >Is Enterprise</label>
              </div>
              <br />
              {isEnterprise && <div className="form-group">
                <label >Enterprise Name</label>
                <input type="text" className="form-control" value={enterpriseName} onChange={(e) => setEnterpriseName(e.target.value)} />
              </div>}
              <br />
              <button type="submit" className="btn btn-primary">Sign up</button>
            </form>
            
          </div>
        </div>
      </div>
    </section>
  </Layout>
  )
}
  
export default LoginPage
