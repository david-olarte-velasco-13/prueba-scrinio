import { StackScreenProps } from '@react-navigation/stack'
import { Flex, VStack, Center, Text, Input, Button } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const RegisterScreen1 = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} justifyContent={'center'} padding={2}>
        <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
            <VStack>
                <Center>
                    <Text>1</Text>
                </Center>
            </VStack>
            <VStack space={2}>
                <Text>Ingresa tu numero de celular para continuar</Text>
                <Input variant="outline" placeholder="Outline" />
            </VStack>
            <VStack>
                <Center>
                    <Text>
                        ¿Ya tienes una cuenta? 
                    </Text>
                    <Text fontWeight={'bold'} onPress={() => navigation.navigate('Login')}> 
                        Inicia sesion con tu usuario y contraseña
                    </Text>
                </Center>
            </VStack>
            <VStack>
                <Button onPress={() => navigation.navigate('Register2')}>
                    Continuar
                </Button>
            </VStack>
        </VStack>  
    </Flex>
  )
}

export default RegisterScreen1
