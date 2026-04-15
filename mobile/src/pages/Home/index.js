import { Area, Background, List, ListBalance, Title } from './styles';
import Header from '../../components/Header';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import { format } from 'date-fns';
import { useIsFocused } from '@react-navigation/native';
import BalanceItem from '../../components/BalanceItem';
import { Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HistoricList from '../../components/HistoricList';
import CalendarModal from '../../components/CalendarModal';

export default function Home() {
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date());
  const isFocused = useIsFocused();
  const [movements, setMovements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function getMovements() {
      let date = new Date(dateMovements)
      let onlyDate = date.valueOf() + date.getTimezoneOffset() * 60 * 1000;
      let dateFormated = format(onlyDate, 'dd/MM/yyyy');

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
  }, [isFocused, dateMovements]);

  async function handleDelete(id) {
    try {
      await api.delete('/receives/delete', {
        params: {
          item_id: id
        }
      })
      setDateMovements(new Date())
    } catch (error) { 
      console.log(error)
    }
  }
  
  function filterDateMovements(dateSelected) {
    setDateMovements(dateSelected)


  }

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
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="event" color="#121212" size={30} />
        </TouchableOpacity>
        <Title>Ultimas movimentações</Title>
      </Area>
        <List
          data={movements}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <HistoricList data={item} deleteItem={handleDelete} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
        />
        <Modal 
        visible={modalVisible}
        animationType='fade'
        transparent={true}
        >
        <CalendarModal 
          setVisible={() => setModalVisible(false)}
          handleFilter={filterDateMovements}
        />
        </Modal>
    </Background>
  );
}
