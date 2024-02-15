import { Button, Center, Flex, Text, VStack, Container } from 'native-base'
import { Image, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const WelcomeScreen = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} justifyContent={'center'} padding={'70px'} backgroundColor={'#2D0046'}>
      <VStack>
        <VStack>
          <Center>
            <Text bold color={'white'}>
              WECUP
            </Text>
          </Center>
        </VStack>
        <VStack space={2} bottom={'-250px'}>
          <Button bgColor={'#FBAC00'} fontWeight={'extrabold'} fontSize={'4xl'} onPress={() => navigation.navigate('Login')}>Iniciar Sesion</Button>
          <Button _text={{ color: 'black'}} fontWeight={'extrabold'} bgColor={'white'} variant={'outline'} onPress={() => navigation.navigate('Register2')}>Registrarse</Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default WelcomeScreen
