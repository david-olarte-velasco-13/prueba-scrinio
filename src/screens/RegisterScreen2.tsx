import { StackScreenProps } from '@react-navigation/stack'
import { Center, Flex, VStack, Text, Input, Button } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{}

const RegisterScreen2 = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'center'}>
        <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
            <VStack>
                <Center>
                    <Text>2</Text>
                </Center>
            </VStack>
            <VStack space={2}>
                <Input variant="outline" placeholder="Usuario" />
                <Input variant="outline" placeholder="Telefono" />
                <Input variant="outline" placeholder="Contraseña" />
                <Input variant="outline" placeholder="Repetir Contraseña" />
            </VStack>
            <VStack space={2}>
                <Button>Google</Button>
                <Button>Facebook</Button>
                <Button>Twitch</Button>
            </VStack>
            <VStack>
                <Button onPress={()=> navigation.navigate('Register3')}>Crear</Button>
            </VStack>
        </VStack>
    </Flex>
  )
}

export default RegisterScreen2
