import { StackScreenProps } from '@react-navigation/stack'
import { Button, Center, Flex, Text, VStack } from 'native-base'
import { signOut } from 'aws-amplify/auth';
import React from 'react'
import { Alert } from 'react-native';

interface Props extends StackScreenProps<any,any>{};

const HomeScreen = ( {navigation}:Props ) => {

    async function handleSignOut() {
        try {
          await signOut({ global: true });
          navigation.navigate('Welcome')
        } catch (error: any) {
          Alert.alert('Oops', error.message)
        }
      }

  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'space-between'}>
        <VStack>  
            <Center>
                <Text>
                    Home
                </Text>
            </Center>
        </VStack>
        <Button onPress={handleSignOut}>
            Cerrar sesion
        </Button>
    </Flex>
  )
}

export default HomeScreen

