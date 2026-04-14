import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import {
  Container,
  LogoutButton,
  LogoutText,
  Message,
  Name,
  NewLink,
  NewText,
} from './style';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';


export default function Profile() {

    const { user, logOut } = useContext(AuthContext)

    const navigation = useNavigation();

  return (
    <Container>
      <Header title="Meu perfil"></Header>

      <Message>Bem vindo de volta !</Message>
      <Name numberOfLines={1}>{user && user.name}</Name>

      <NewLink onPress={() => navigation.navigate('Registrar')}>
        <NewText>Fazer registro</NewText>
      </NewLink>

      <LogoutButton>
        <LogoutText onPress={logOut} >Sair</LogoutText>
      </LogoutButton>
    </Container>
  );
}
