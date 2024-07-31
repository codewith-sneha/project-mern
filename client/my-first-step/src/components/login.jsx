import React from 'react';
import './App.css'; 
import signinImage from './components/signin.svg'
import logo from './components/logo.jpg'; 
import { useState } from 'react';


  const App = () => {
  
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
 
      console.log('Username:', username);
      console.log('Password:', password);
      
    };return (
      <>
        <div className='img'>
          <img src={logo} alt="Logo" />
          {/* <p>MY FIRST STEP</p> */}
        </div>
        
        <div className="container">
          <div className="signin-signup">
            <form className="signin" method="post" onSubmit={handleSubmit}>
              <h2 className="heading">LOGIN</h2>
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
              <button type="submit">Login</button>
            </form>
          </div>
  
          <div className="photo-container">
            <div className="photos left-photos">
              <div className="content">
                <h2>This is the Sign in form for you...</h2>
              </div>s
              <img src={signinImage} alt="Sign in" className="image" />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default App;
