import React, { useContext, useState, useEffect } from 'react';
import firebase, { auth, signInWithGoogle, logOut } from '../service/firebase';
import { AuthContext } from '../providers/AuthProvider';
import { useHistory } from 'react-router-dom';

const Header = () => {
  // 試しに初期化したfirebaseを出力するとオブジェクトで色々表示される
  // console.log(firebase);
  const [userIcon, setUserIcon] = useState('');
  const [userName, setUserName] = useState('');

  const history = useHistory();
  const logedOut = () => {
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
      });
    }
  }, [currentUser]);

  const buttonRender = () => {
    let buttonDom;
    if (currentUser.currentUser) {
      // setUserIcon(currentUser.currentUser.photoURL);
      buttonDom = (
        <>
          <button onClick={logedOut}>ログアウト</button>
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
