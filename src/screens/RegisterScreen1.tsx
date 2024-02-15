import { StackScreenProps } from '@react-navigation/stack'
import { useForm, Controller } from 'react-hook-form';
import { Flex, VStack, Center, Text, Input, Button, Box } from 'native-base'
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
      


      navigation.navigate('IsDone'); 
    };
  return (
    <Flex safeArea flex={1} justifyContent={'center'} padding={'20px'}>
      <VStack  height={'80vh'} margin={2} borderStyle={'solid'} borderRadius={'10px'} space={20} shadow={'1'} paddingX={'37px'} paddingY={'108px'}>
        <VStack>
          <VStack display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} space={4}>
            <VStack>                
              <Box borderRadius={'10px'} backgroundColor={'#801BC452'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
                1
              </Box>
            </VStack>
            <VStack>                
              <Box borderRadius={'10px'} backgroundColor={'#801BC452'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
                2
              </Box>
            </VStack>
            <VStack>
              <Box borderRadius={'10px'} backgroundColor={'#8100C7'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
                3
              </Box>
            </VStack>
          </VStack> 
        </VStack>
        <VStack space={2}>
            <Center>
              <Text>Ingresa de nuevo tu username</Text>
            </Center>
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
          {errors.verificationCode && <Text color={'red.500'}>codigo en formato incorrecto</Text>}
          <Center>
            <Text fontWeight={'bold'}>
              ¿No recibió el código?
            </Text>
          </Center>
          <Button _text={{ fontWeight: 'bold', color: 'black'}} variant={'outline'}>
            Reenviar
          </Button>
        </VStack>
        <VStack>
          <Button bgColor={'#8100C7'} _text={{ color: 'white'}} fontWeight={'bold'} onPress={handleSubmit(onSubmit)}>
            Verificar
          </Button>
        </VStack>
      </VStack>
    </Flex>
  )
}

export default RegisterScreen1
