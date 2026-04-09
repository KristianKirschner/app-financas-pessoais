import { createContext, useState } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setloadingAuth] = useState(false);

  const navigation = useNavigation();

  async function signUp(email, password, nome) {
    setloadingAuth(true);

    try {
      const response = await api.post('/users', {
        name: nome,
        email: email,
        password: password,
      });
      setloadingAuth(false);
      navigation.goBack();
    } catch (err) {
      console.log('Erro ao cadastrar: ', err);
      setloadingAuth(false);
    }
  }

  async function signIn(email, password) {
    setloadingAuth(true);

    try {
      const response = await api.post('/login', {
        email: email,
        password: password,
      });
      const {id, name, token} = response.data
      const data = {
        id,
        name,
        token,
        email
      }
      api.defaults.headers["Authorization"] = `Bearer ${token}`

      setUser({
        id,
        name,
        email
      })
      setloadingAuth(false);
      console.log(response.data);
    } catch (erro) {
      console.log('Erro: ', erro);
      setloadingAuth(false);
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, loadingAuth, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
