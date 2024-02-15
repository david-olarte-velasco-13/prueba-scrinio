import { StackScreenProps } from '@react-navigation/stack'
import { Center, Flex, VStack, Text, Input, Button, ScrollView, HStack, Checkbox, Box } from 'native-base'
import { useForm, Controller } from 'react-hook-form';
import { signUp } from 'aws-amplify/auth';
import React, { useState } from 'react'
import { Alert } from 'react-native';

interface Props extends StackScreenProps<any,any>{}

const RegisterScreen2 = ( {navigation}:Props ) => {

    const { control, watch, handleSubmit, formState: { errors } } = useForm();

    const [tyc, setTyc] = useState<boolean>(false);

    const onSubmit = async (data: any) => {
        const { username, password, email } = data;
        try {
            const response = await signUp({
                username,
                password,
                options: {
                    userAttributes: {
                      email,
                      preferred_username: username
                    },
            }})
            navigation.navigate('Register3');
        } catch (error: any) {
            Alert.alert('Oops', error.message)
        }


        navigation.navigate('Register3'); 
    };

    const password = React.useRef({});
    password.current = watch("password", "");

  return (
  <Flex safeArea flex={1} padding={'20px'} justifyContent={'center'}>
    <ScrollView>
      <VStack height={'80vh'} margin={2} borderStyle={'solid'} borderRadius={'10px'} space={10} shadow={'1'} paddingX={'37px'} paddingY={'108px'}>
        <VStack>
            <VStack display={'flex'} flexDirection={'row'} justifyContent={'space-evenly'} space={4}>
              <VStack>                
                <Box borderRadius={'10px'} backgroundColor={'#8100C7'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
                  1
                </Box>
              </VStack>
              <VStack>                
                <Box borderRadius={'10px'} backgroundColor={'#801BC452'} width={'45px'} height={'45px'} justifyContent={'center'} _text={{ color: 'white', alignSelf: 'center'}}>
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
          {errors.username && <Text color={'red.500'}>error en el username</Text>}
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
          {errors.email && <Text color={'red.500'}>error en el email</Text>}
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
          {errors.password && <Text color={'red.500'}>error en el password</Text>}
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
          {errors.confirmPassword && <Text color={'red.500'}>las password no coinciden</Text>}
        </VStack>
        <VStack space={2}>
          <Button _text={{ color: 'black'}} bgColor={'#FBAC00'} fontWeight={'extrabold'} fontSize={'4xl'}>Google</Button>
          <Button _text={{ color: 'black'}} bgColor={'#FBAC00'} fontWeight={'extrabold'} fontSize={'4xl'}>Facebook</Button>
          <Button _text={{ color: 'black'}} bgColor={'#FBAC00'} fontWeight={'extrabold'} fontSize={'4xl'}>Twitch</Button>
        </VStack>
        <VStack>
          <Button  bgColor={'#8100C7'} _text={{ color: 'white'}} fontWeight={'bold'} onPress={handleSubmit(onSubmit)}>Crear</Button>
        </VStack>
      </VStack>
      </ScrollView>
    </Flex>
  )
}

export default RegisterScreen2
