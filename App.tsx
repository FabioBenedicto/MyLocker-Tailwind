import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AuthorizationInput } from './src/components/AuthorizationInput';
import Button from './src/components/Button';
import Heading from './src/components/Heading';
import { Logo } from './src/components/Logo';
import { MyLockerText } from './src/components/MyLockerText';

import { styled } from "nativewind";

const TextStyled = styled(Text);

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Logo darkTheme={false}/>
      <Heading value='Alugar armário'>Oi</Heading>
      <TextStyled className='text-white'>OI</TextStyled>
      <MyLockerText color='gray'>Oi</MyLockerText>
      <AuthorizationInput.Input placeholder='teste'/>
      <MyLockerText color='blue'>Oi</MyLockerText>
      <Button loading={false}>Confirmar</Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
