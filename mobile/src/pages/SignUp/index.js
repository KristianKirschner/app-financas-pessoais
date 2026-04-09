import { useContext, useState } from 'react';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';
import { AuthContext } from '../../contexts/auth';
import { Platform } from 'react-native';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input
            placeholder="Nome"
            value={nome}
            onChangeText={text => setNome(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </AreaInput>
        <AreaInput>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            />
        </AreaInput>
        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
