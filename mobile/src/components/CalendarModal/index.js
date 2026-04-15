import { TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  ModalContent,
  ButtonFilterText,
  ButtonFilter,
} from './styles';
import { View } from 'react-native';
import { useState } from 'react';
import {Calendar, LocaleConfig } from 'react-native-calendars'
import { ptBr } from './localeCalendar';

LocaleConfig.locales['pt-BR'] = ptBr
LocaleConfig.defaultLocale= 'pt-BR'

export default function CalendarModal({ setVisible, handleFilter }) {
  const [dateNow, setDateNow] = useState(new Date());
  const [markedDates, setMarkedDates] = useState({});

  function handleOnDayPress(date){
    setDateNow(new Date(date.dateString))
    let markedDay = {};

    markedDay[date.dateString] = {
        selected : true,
        selectedTextColor: '#FFF',
        selectedColor: '#3b3dbf',
    }

    setMarkedDates(markedDay)
  }

  function handleFilterDate(){
    handleFilter(dateNow);
    setVisible();
  }
  
  return (
    <Container>
      <TouchableWithoutFeedback onPress={setVisible}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>

      <ModalContent>
        <Calendar
            onDayPress={handleOnDayPress}
            markedDates={markedDates}
            enableSwipeMonths={true}
            theme={{
                todayTextColor: '#FF0000',
                selectedDayBackgroundColor: '#00adf6',
                selectedDayTextColor: 'FFF'
            }}
            
        />

        <ButtonFilter onPress={handleFilterDate}>
          <ButtonFilterText>Filtrar</ButtonFilterText>
        </ButtonFilter>
      </ModalContent>
    </Container>
  );
}
