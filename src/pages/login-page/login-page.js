import React, { useState } from "react";
import { Header, Image, Form, Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import logo from "../../assets/logo.png";

const LoginPage = ({ history, onLogin }) => {
  const [isLoggedIn, setIsloggedIn] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const doLogin = () => {
    if(userName === 'user12345' && password === 'pass12345') {
      localStorage.setItem('isLoggedIn', 'true');
      onLogin();
      history.push('/home');
    } else {
      localStorage.setItem('isLoggedIn', 'false');
      setIsloggedIn('false');
    }
  };

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', width: '100%', margin: '10% 35%' }}>
      <Header as='h1' style={{ fontSize: "2.2em", textAlign: 'center' }} >
        <Image circular src={logo}/>
        Welcome to Denarius
      </Header>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Enter username' onChange={e => setUserName(e.target.value)}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type='password' placeholder='Enter password' onChange={e => setPassword(e.target.value)}/>
        </Form.Field>
        {isLoggedIn === 'false' && 
          <div style={{ color: 'red', height: '30px', visibility: isLoggedIn === 'false' ? 'visible' : 'hidden' }}>
            Error: Wrong username or password
          </div>
        }
        <Button inverted color='red' className='main-button' onClick={doLogin} type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default withRouter(LoginPage);