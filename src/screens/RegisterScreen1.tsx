import { StackScreenProps } from '@react-navigation/stack'
import { useForm, Controller } from 'react-hook-form';
import { Flex, VStack, Center, Text, Input, Button } from 'native-base'
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const RegisterScreen1 = ( {navigation}:Props ) => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
      console.log(data);
      // Aquí puedes realizar acciones adicionales antes de navegar
      navigation.navigate('Register2'); // Navegar a la siguiente pantalla después de ingresar el correo
    };
  return (
    <Flex safeArea flex={1} justifyContent={'center'} padding={2}>
      <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
        <VStack>
          <Center>
            <Text>1</Text>
          </Center>
        </VStack>
        <VStack space={2}>
          <Text>Ingresa tu email para continuar</Text>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                placeholder="Email"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="email"
            rules={{ required: true, pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } }}
            defaultValue=""
          />
          {errors.email && <Text>error en el email</Text>}
        </VStack>
        <VStack>
          <Center>
            <Text>
              ¿Ya tienes una cuenta?
            </Text>
            <Text fontWeight={'bold'} onPress={() => navigation.navigate('Login')}>
              Inicia sesión con tu usuario y contraseña
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Button onPress={handleSubmit(onSubmit)}>
            Continuar
          </Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default RegisterScreen1
