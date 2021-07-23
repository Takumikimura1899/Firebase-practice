import Header from './components/Header';
import './service/firebase';
import { AuthProvider } from './providers/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Header />
      <div className='App'>Test</div>
    </AuthProvider>
  );
}

export default App;
