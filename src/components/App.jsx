import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';

const Content = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? <p>Hello, user!</p> : <p>Please, login!</p>}
      <button onClick={isAuthenticated ? logout : login}>{isAuthenticated ? 'Logout' : 'Login'}</button>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Content />
    </AuthProvider>
  );
};

export default App;