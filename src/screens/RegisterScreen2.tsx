import { StackScreenProps } from '@react-navigation/stack'
import { Center, Flex, VStack, Text, Input, Button } from 'native-base'
import { useForm, Controller } from 'react-hook-form';
import React from 'react'

interface Props extends StackScreenProps<any,any>{}

const RegisterScreen2 = ( {navigation}:Props ) => {

    const { control, watch, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
      // Aquí puedes realizar acciones adicionales, como enviar datos al servidor, etc.
        navigation.navigate('Register3'); // Navegar a la siguiente pantalla después de crear la cuenta
    };

    const password = React.useRef({});
    password.current = watch("password", "");

  return (
<Flex safeArea flex={1} padding={2} justifyContent={'center'}>
      <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
        <VStack>
          <Center>
            <Text>Registro</Text>
          </Center>
        </VStack>
        <VStack space={2}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                placeholder="Usuario"
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
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                placeholder="Contraseña"
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
          {errors.password && <Text>error en el password</Text>}
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                variant="outline"
                placeholder="Repetir Contraseña"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            )}
            name="confirmPassword"
            rules={{ required: true, validate: value => value === password.current || "Passwords don't match" }}
            defaultValue=""
          />
          {errors.confirmPassword && <Text>las password no coinciden</Text>}
        </VStack>
        <VStack space={2}>
          <Button>Google</Button>
          <Button>Facebook</Button>
          <Button>Twitch</Button>
        </VStack>
        <VStack>
          <Button onPress={handleSubmit(onSubmit)}>Crear</Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default RegisterScreen2
