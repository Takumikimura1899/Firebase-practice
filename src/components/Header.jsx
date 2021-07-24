import React, { useContext, useState, useEffect } from 'react';
import { auth, signInWithGoogle, logOut } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [userIcon, setUserIcon] = useState('');
  const [userName, setUserName] = useState('');

  const history = useHistory();
  const handleLogOut = () => {
    logOut();
    history.push('/login');
  };

  const currentUser = useContext(AuthContext);
  console.log(currentUser.currentUser);

  useEffect(() => {
    if (currentUser.currentUser) {
      auth.onAuthStateChanged((user) => {
        console.log(user);
        const icon = user.photoURL;
        const displayName = user.displayName;
        console.log(icon);
        setUserIcon(icon);
        setUserName(displayName);
        console.log('hello');
      });
    }
  }, [currentUser]);

  const buttonRender = () => {
    let buttonDom;
    if (currentUser.currentUser) {
      // setUserIcon(currentUser.currentUser.photoURL);
      buttonDom = (
        <>
          <button onClick={handleLogOut}>ログアウト</button>
          <br />
          <img src={userIcon} alt='' />
          <br />
          <p>{userName}</p>
        </>
      );
    } else {
      buttonDom = <button onClick={signInWithGoogle}>ログイン</button>;
    }
    return buttonDom;
  };

  return (
    <div>
      {/* ボタンを押した時にグーグルにサインインする関数が走る */}
      {buttonRender()}
    </div>
  );
};

export default Header;
