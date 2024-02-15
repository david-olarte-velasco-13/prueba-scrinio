import { StackScreenProps } from '@react-navigation/stack'
import { Button, Flex, Input, Text, VStack } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const LoginScreen = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} justifyContent={'space-evenly'} padding={2}>
      <Text>
        Login 
      </Text>
      <VStack flex={1} space={2}>
        <Input placeholder='usuario'></Input>
        <Input placeholder='contraseña'></Input>
      </VStack>
      <VStack flex={1} space={2}>
        <Text>
            Aun no tienes cuenta.
        </Text>
        <Text onPress={() => navigation.navigate('Register1')} fontWeight={'bold'}>
            Registrate
        </Text>
      </VStack>
      <VStack>
        <Button onPress={() => navigation.navigate('IsDone')}>Iniciar Sesion</Button>
      </VStack>
    </Flex>
  )
}

export default LoginScreen
