import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from '../SignIn/styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export default function SignUp() {
  const { user } = useContext(AuthContext);
  return (
    <Background>
      <Container behavior={Platform.OS === 'ios' ? 'padding' : ''} enabled>
        <AreaInput>
          <Input placeholder="Nome" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Senha" />
        </AreaInput>
        <SubmitButton>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
