import { StackScreenProps } from '@react-navigation/stack'
import { Button, Center, Flex, VStack, Text, Input } from 'native-base'
import { useForm, Controller } from 'react-hook-form';
import React from 'react'

interface Props extends StackScreenProps<any,any>{};

const RegisterScreen4 = ( {navigation}:Props ) => {

    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
      console.log(data);
      // Aquí puedes realizar acciones adicionales, como verificar el código de verificación
      navigation.navigate('IsDone'); // Navegar a la siguiente pantalla después de verificar el código
    };

  return (
    <Flex safeArea flex={1} padding={2} justifyContent={'center'}>
      <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
        <VStack>
          <Center>
            <Text>3</Text>
          </Center>
        </VStack>
        <VStack space={2}>
          <Center>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  width={100}
                  textAlign={'center'}
                  keyboardType='numeric'
                  variant="outline"
                  maxLength={4}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="verificationCode"
              rules={{ required: true, minLength: 4, maxLength: 4 }}
              defaultValue=""
            />
          </Center>
          {errors.verificationCode && <Text>codigo en formato incorrecto</Text>}
          <Center>
            <Text fontWeight={'bold'}>
              ¿No recibió el código?
            </Text>
          </Center>
          <Button variant={'outline'}>
            Reenviar
          </Button>
        </VStack>
        <VStack>
          <Button onPress={handleSubmit(onSubmit)}>
            Verificar
          </Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default RegisterScreen4
