import { useMemo } from 'react';
import { Container, TipoText, IconView, ValorText, Tipo } from './styles';
import Icon from 'react-native-vector-icons/Feather';

export default function HistoricList({ data }) {
  return (
    <Container>
      <Tipo>
        <IconView tipo={data.type}>
          <Icon 
          name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
          size={20} 
          color="#FFF" 
          />

          <TipoText>{data.type}</TipoText>
        </IconView>
      </Tipo>
      <ValorText>R$ {data.value} {data.description}</ValorText>
    </Container>
  );
}
