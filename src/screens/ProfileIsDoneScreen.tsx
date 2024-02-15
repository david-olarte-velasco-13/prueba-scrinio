import { StackScreenProps } from '@react-navigation/stack';
import { Flex, VStack, Text, Center, Button } from 'native-base';
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const ProfileIsDoneScreen = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'center'}>
        <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
            <VStack>
                <Text onPress={() => navigation.navigate('Welcome')}>
                    Volver a empezar
                </Text>
            </VStack>
            <VStack>
                <Center>
                    <Text fontWeight={'bold'}>
                        Tu perfil ya esta hecho!
                    </Text>
                </Center>                    
            </VStack>
            <VStack>
                <Button onPress={() => navigation.navigate('Home')}>
                    Finalizar
                </Button>
            </VStack>
        </VStack>
    </Flex>
  )
}

export default ProfileIsDoneScreen
