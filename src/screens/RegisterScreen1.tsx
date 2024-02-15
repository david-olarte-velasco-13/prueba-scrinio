import { StackScreenProps } from '@react-navigation/stack'
import { useForm, Controller } from 'react-hook-form';
import { Flex, VStack, Center, Text, Input, Button } from 'native-base'
import { confirmSignUp, type ConfirmSignUpInput } from 'aws-amplify/auth';
import React from 'react'
import { Alert } from 'react-native';


interface Props extends StackScreenProps<any,any>{};

const RegisterScreen1 = ( {navigation}:Props ) => {


    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data: any) => {
      
        const { username, confirmationCode } = data

      try {
        const response = await confirmSignUp({username, confirmationCode})
        console.log(response)
        navigation.navigate('IsDone');
      } catch (error: any) {
        Alert.alert('Oops', error.message)
      }
      
        //console.log(data);

      //navigation.navigate('IsDone'); 
    };
  return (
    <Flex safeArea flex={1} justifyContent={'center'} padding={2}>
      <VStack margin={2} borderStyle={'solid'} borderRadius={'md'} space={20} shadow={'1'} padding={2}>
        <VStack>
          <Center>
            <Text>3</Text>
          </Center>
        </VStack>
        <VStack space={2}>
            <Text>Ingresa de nuevo tu username</Text>
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
          <Center>
            <Text>Ingresa el codigo de verificación</Text>
          </Center>
          <Center>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  width={100}
                  textAlign={'center'}
                  keyboardType='numeric'
                  variant="outline"
                  maxLength={6}
                  onBlur={onBlur}
                  onChangeText={value => onChange(value)}
                  value={value}
                />
              )}
              name="confirmationCode"
              rules={{ required: true, minLength: 6, maxLength: 6 }}
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

export default RegisterScreen1
