import { Background, Input, SubmitButton, SubmitText } from './styles';
import Header from '../../components/Header';
import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { useState } from 'react';

export default function New() {
  const [labelInput, setLabelInput] = useState('');

  const [valueInput, setValueInput] = useState('');

  const [type, setType] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Header title="Registrando" />

        <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
          <Input
            placeholder="Descrição desse registro"
            value={labelInput}
            onChange={text => setLabelInput(text)}
          />

          <Input
            placeholder="Valor desejado"
            keyboardType="numeric"
            value={valueInput}
            onChange={text => setValueInput(text)}
          />

          <SubmitButton>
            <SubmitText>Registrar</SubmitText>
          </SubmitButton>
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
