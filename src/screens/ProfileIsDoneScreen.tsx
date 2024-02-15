import { StackScreenProps } from '@react-navigation/stack';
import { Flex, VStack, Text, Center, Button } from 'native-base';
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const ProfileIsDoneScreen = ( {navigation}:Props ) => {
  return (
    <Flex safeArea flex={1} padding={'20px'} justifyContent={'center'}>
        <VStack height={'80vh'} margin={2} borderStyle={'solid'} borderRadius={'10px'} space={180} shadow={'1'} paddingX={'37px'} paddingY={'108px'}>
            <VStack>
                <Text bold color={'#FBAC00'} onPress={() => navigation.navigate('Welcome')}>
                    Volver a empezar
                </Text>
            </VStack>
            <VStack>
                <Center>
                    <Text fontWeight={'bold'} color={'#2D0046'}>
                        !TU PERFIL YA ESTA HECHO¡
                    </Text>
                </Center>                    
            </VStack>
            <VStack>
                <Button  bgColor={'#8100C7'} _text={{ color: 'white'}} fontWeight={'bold'} onPress={() => navigation.navigate('Home')}>
                    Finalizar
                </Button>
            </VStack>
        </VStack>
    </Flex>
  )
}

export default ProfileIsDoneScreen
