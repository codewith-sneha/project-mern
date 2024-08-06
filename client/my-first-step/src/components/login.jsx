import './Login.css'; 
import signinImage from '../assets/signin.svg'
import logo from '../assets/logo.jpeg'; 
import { useState } from 'react';


  const Login = () => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
   
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };return (
      <>
        <div className='img'>
          <img src={logo} alt="Logo" />
        </div>
        
        <div className="container">
        <h2 className="heading">LOGIN</h2>
          <div className="signin-signup">

            <form className="signin" method="post" onSubmit={handleSubmit}>
              
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input 
                  type="text" 
                  name="username" 
                  placeholder="Username" 
                  value={username} 
                  onChange={handleUsernameChange} 
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input 
                  type="password" 
                  name="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={handlePasswordChange} 
                />
              </div>
              <button type="submit" className='btn'>Login</button>
            </form>
          </div>
  
          <div className="photo-container">
            <div className="photos left-photos">
              <img src={signinImage} alt="Sign in" className="image" />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Login;