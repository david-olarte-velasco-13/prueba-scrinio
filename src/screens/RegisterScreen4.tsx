import { StackScreenProps } from '@react-navigation/stack'
import { Button, Center, Flex, VStack, Text, Input } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const RegisterScreen4 = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'center'}>
        <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
            <VStack>
                <Center>
                    <Text>3</Text>
                </Center>
            </VStack>
            <VStack space={2}>
                <Input keyboardType='numeric' variant="outline" placeholder="Codigo" />
                <Center>
                    <Text fontWeight={'bold'}>
                        ¿No recibio el codigo?
                    </Text>
                </Center>
                <Button variant={'outline'}>
                    Reenviar
                </Button>                    
            </VStack>
            <VStack>
                <Button onPress={() => navigation.navigate('IsDone')}>
                    Verificar
                </Button>
            </VStack>
        </VStack>
    </Flex>
  )
}

export default RegisterScreen4
