import { Platform } from 'react-native';
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
} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {

  const navigation = useNavigation();

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <Logo source={require('../../assets/Logo.png')} />

        <AreaInput>
          <Input placeholder="Seu Email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Sua senha" secureTextEntry={true} />
        </AreaInput>

        <SubmitButton activeOpacity={0.7}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link>
          <LinkText
            onPress={() => navigation.navigate('SignUp')}
          >Criar uma conta</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
