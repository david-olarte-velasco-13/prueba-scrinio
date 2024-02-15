import { StackScreenProps } from '@react-navigation/stack'
import { Button, Center, Flex, Text, VStack } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const HomeScreen = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'space-between'}>
        <VStack>  
            <Center>
                <Text>
                    Home
                </Text>
            </Center>
        </VStack>
        <Button onPress={() => navigation.navigate('Welcome')}>
            Cerrar sesion
        </Button>
    </Flex>
  )
}

export default HomeScreen

