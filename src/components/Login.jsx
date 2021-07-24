import React from 'react';
import { signInWithGoogle } from '../service/firebase';
import { useHistory } from 'react-router';

const Login = () => {
  const history = useHistory();
  const Login = () => {
    signInWithGoogle();
    history.push('/');
  };

  return (
    <div>
      <button onClick={Login}>ログイン</button>
    </div>
  );
};

export default Login;
