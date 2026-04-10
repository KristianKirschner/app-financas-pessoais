import { createContext, useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setloadingAuth] = useState(false);
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation();

  useEffect(()=>{
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@finToken');

      if (storageUser) {
        const response = await api.get('/me', {
          headers: {
            'Authorization': `Bearer ${storageUser}`
          }
        })
        .catch(() =>{
          setUser(null);
        })
        api.defaults.headers["Authorization"] = `Bearer ${storageUser}`
        setUser(response.data);
        setLoading(false)
      }
      setLoading(false)
    }
    loadStorage();
  },[])

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

      await AsyncStorage.setItem('@finToken', token)

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

  async function logOut() {
    await AsyncStorage.clear()
    .then(()=>{
      setUser(null)
    })
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signUp, loadingAuth, signIn, loading, logOut}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
