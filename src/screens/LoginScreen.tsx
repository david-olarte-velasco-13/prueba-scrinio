import { StackScreenProps } from '@react-navigation/stack'
import { Button, Center, Flex, Input, Text, VStack, ScrollView, Image } from 'native-base';
import  {signIn}  from 'aws-amplify/auth';
import { useForm, Controller } from 'react-hook-form';
import React, { useState } from 'react'
import { Alert } from 'react-native';

interface Props extends StackScreenProps<any,any>{};

const LoginScreen = ( {navigation}:Props ) => {

  const { control, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: any) => {
    if (loading) {
       return;
    }

    setLoading(true);

    try {
      await signIn(data);
      navigation.navigate('IsDone');
    } catch (e: any) {
      Alert.alert('Oops', e.message)
    }

    setLoading(false);
  };

  return (
    <Flex safeArea flex={1} justifyContent={'center'} padding={'20px'}>
      <ScrollView>
      <VStack height={'80vh'} margin={2} borderStyle={'solid'} borderRadius={'10px'} space={10} shadow={'1'} paddingX={'37px'} paddingY={'108px'}>
        <VStack>
          <Center>
          <Image shadow={2} source={{
            uri: 'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere.png'
          }} alt="Alternate Text" size="xl" />
          </Center>
          </VStack>
        <VStack space={2}>
        <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                placeholder='usuario'
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="username"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.username && <Text color={'red.500'}>error en el username</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                placeholder='contraseña'
                secureTextEntry
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
          />
          {errors.password && <Text color={'red.500'}>error en la contraseña</Text>}
        </VStack>
        <VStack space={2}>
          <Center>            
            <Text>
                Aun no tienes cuenta.
            </Text>
          </Center>
          <Center>
            <Text bold color={'#FBAC00'} onPress={() => navigation.navigate('Register1')} fontWeight={'bold'}>
                Registrate
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Button bgColor={'#8100C7'} _text={{ color: 'white'}} fontWeight={'bold'} onPress={handleSubmit(onSubmit)}>{loading ? 'Cargando...' : 'Iniciar sesion'}</Button>
        </VStack>
      </VStack>
      </ScrollView>
    </Flex>
  )
}

export default LoginScreen;
