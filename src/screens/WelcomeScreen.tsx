import { Button, Center, Flex, Text, VStack } from 'native-base'
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const WelcomeScreen = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} justifyContent={'space-evenly'} padding={2}>
      <VStack>
        <Center>
          <Text>WECUP</Text>
        </Center>
      </VStack>
      <VStack space={2}>
        <Button onPress={() => navigation.navigate('Login')}>Iniciar Sesion</Button>
        <Button onPress={() => navigation.navigate('Register2')}>Registrarse</Button>
      </VStack>
    </Flex>
  )
}

export default WelcomeScreen
