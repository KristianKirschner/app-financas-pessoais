import { Area, Background, List, ListBalance, Title } from './styles';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoricList from '../../components/HistoricList';

export default function Home() {
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const isFocused = useIsFocused();
  const [movements, setMovements] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let dateFormated = format(dateMovements, 'dd/MM/yyyy');

      const receives = await api.get('/receives', {
        params: {
          date: dateFormated,
        },
      });

      const balance = await api.get('/balance', {
        params: {
          date: dateFormated,
        },
      });
      if (isActive) {
        setListBalance(balance.data);
        setMovements(receives.data);
      }
    }
    getMovements();
    return () => (isActive = false);
  }, [isFocused]);

  return (
    <Background>
      <Header title="Minhas movimentações"></Header>
      <ListBalance
        data={listBalance}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.tag}
        renderItem={({ item }) => <BalanceItem data={item} />}
      />

      <Area>
        <TouchableOpacity>
          <Icon name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>
        <List
          data={movements}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <HistoricList data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
        />
    </Background>
  );
}
