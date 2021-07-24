import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import './service/firebase';
import { AuthProvider } from './providers/AuthProvider';
import { BrowserRouter, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <PrivateRoute exact path='/' component={Home} />
        <Route path='/login' component={Login} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
