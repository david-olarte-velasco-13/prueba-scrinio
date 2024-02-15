import { StackScreenProps } from '@react-navigation/stack'
import { Center, Flex, VStack, Text, Button, Box } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const RegisterScreen3 = ( {navigation}:Props ) => {

    
  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'center'}>
        <VStack height={'80vh'} margin={2} borderStyle={'solid'} borderRadius={'10px'} space={180} shadow={'1'} paddingX={'37px'} paddingY={'108px'}>
            <VStack>
                <VStack display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} space={4}>
                  <VStack>                
                    <Box borderRadius={'10px'} backgroundColor={'#801BC452'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
                      1
                    </Box>
                  </VStack>
                  <VStack>                
                    <Box borderRadius={'10px'} backgroundColor={'#8100C7'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
                      2
                    </Box>
                  </VStack>
                  <VStack>
                    <Box borderRadius={'10px'} backgroundColor={'#801BC452'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
                      3
                    </Box>
                  </VStack>
                </VStack> 
            </VStack>
            <VStack>
                <Center>
                    <Text fontWeight={'bold'} color={'#2D0046'}>
                        !TU CUENTA HA SIDO CREADA¡
                    </Text>
                </Center>                    
            </VStack>
            <VStack>
                <Button bgColor={'#8100C7'} _text={{ color: 'white'}} fontWeight={'bold'} onPress={() => navigation.navigate('Register1')}>
                    Completar Perfil
                </Button>
            </VStack>
        </VStack>
    </Flex>
  )
}

export default RegisterScreen3

