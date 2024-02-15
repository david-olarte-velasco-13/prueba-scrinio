import { StackScreenProps } from '@react-navigation/stack'
import { Button, Center, Flex, Input, Text, VStack } from 'native-base'
import { useForm, Controller } from 'react-hook-form';
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const LoginScreen = ( {navigation}:Props ) => {

  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Aquí puedes realizar acciones adicionales, como enviar datos al servidor, validar credenciales, etc.
    navigation.navigate('IsDone'); // Navegar a la pantalla de éxito
  };

  return (
    <Flex safeArea flex={1} justifyContent={'center'} padding={2}>
      <VStack space={20}>
        <VStack>
          <Center>
            <Text>
              Login 
            </Text>
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
          {errors.username && <Text>error en el username</Text>}
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
          {errors.password && <Text>error en la contraseña</Text>}
        </VStack>
        <VStack flex={1} space={2}>
          <Center>            
            <Text>
                Aun no tienes cuenta.
            </Text>
          </Center>
          <Center>
            <Text onPress={() => navigation.navigate('Register1')} fontWeight={'bold'}>
                Registrate
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Button onPress={handleSubmit(onSubmit)}>Iniciar Sesion</Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default LoginScreen
