import { Text, View } from 'react-native';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from '../SignIn/styles';

export default function SignUp() {
  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
        <Input placeholder='Nome' />
        </AreaInput>
        <AreaInput>
        <Input placeholder='Email' />
        </AreaInput>
        <AreaInput>
        <Input placeholder='Senha' />
        </AreaInput>
        <SubmitButton>
            <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
