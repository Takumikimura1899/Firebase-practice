import React, { useEffect } from 'react';
import { signInWithGoogle } from '../service/firebase';
import { useHistory } from 'react-router';
import { useAuthContext } from '../providers/AuthProvider';
const Login = () => {
  const history = useHistory();
  const handleLogin = () => {
    signInWithGoogle();
    // history.push('/');
  };

  const { currentUser } = useAuthContext();
  console.log(currentUser);
  if (currentUser) {
    history.push('/');
  }
  return (
    <div>
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
};

export default Login;
