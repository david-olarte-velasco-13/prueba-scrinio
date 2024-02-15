import { StackScreenProps } from '@react-navigation/stack'
import { Center, Flex, VStack, Text, Button } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const RegisterScreen3 = ( {navigation}:Props ) => {

    
  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'center'}>
        <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
            <VStack>
                <Center>
                    <Text>2</Text>
                </Center>
            </VStack>
            <VStack>
                <Center>
                    <Text fontWeight={'bold'}>
                        Tu cuenta ya ha sido creada!
                    </Text>
                </Center>                    
            </VStack>
            <VStack>
                <Button onPress={() => navigation.navigate('Register1')}>
                    Completar Perfil
                </Button>
            </VStack>
        </VStack>
    </Flex>
  )
}

export default RegisterScreen3

