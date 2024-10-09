import { Fragment, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Dimensions, useWindowDimensions } from 'react-native';
import logo from "../assets/imgs/logo-2.png"
import { Button, CheckBox, Icon } from '@rneui/base';
import { mainColor } from '../styles';
import { Formik } from "formik";
import * as Yup from 'yup';
import { Link, router } from 'expo-router';
import { useUserStore } from '@/store/user-store';

export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {
    // Obtendo a altura da tela
    const { height, width } = useWindowDimensions(); 
    const [result, setResult] = useState('');
    const {user, setUser} = useUserStore();
    
    // ValidationYup
    const yupValidation = Yup.object({
        email: Yup.string().required("Informe o email!").email('E-mail inválido!'),
        password: Yup.string().required("Informe a senha!").min(6, 'Senha Precisa de no mínimio 6 caracteres!')
    })

    // RegisterFormik
    const handleLogin = async ({email, password}: any) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        if(email === 'teste@gmail.com'){    // Simulando que já existe esse e-mail
            setResult('Logado com sucesso! ✅');
            // setUser({name, email});
            router.replace("/home");
        } else{
            setResult('Error, usuário não existe!');
        }
    };

    return (
        <View style={{height: height, width: width}}>
            <ScrollView style={styles.mainContentContainer}>
                {/* IconStylingPage */}
                <Icon containerStyle={styles.iconContainer} color={mainColor} size={50} name='public'/>

                {/* Heading */}
                <Text style={{fontSize: 32, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 60}}>Sign In</Text>

                {/* Formik Validation */}
                <Formik
                    initialValues={{name:'', email:'', password:'', confirmPassword: ''}}
                    validationSchema={yupValidation}
                    onSubmit={async (values, actions) => {
                        await handleLogin(values);
                        actions.setSubmitting(false);
                    }}
                >
                    {
                        ({errors, handleChange, handleSubmit, isSubmitting}) => (
                            <Fragment>
                                {/* Inputs */}

                                <TextInput onChangeText={handleChange('email')} style={styles.input} placeholder='Email'/>
                                { errors.email && <Text style={styles.validationMessage}>{`${errors.email}`}</Text> }

                                <TextInput onChangeText={handleChange('password')} style={styles.input} placeholder='Senha' secureTextEntry/>
                                { errors.password && <Text style={styles.validationMessage}>{`${errors.password}`}</Text> }

                                {/* ResultMessages */}
                                { result && <Text style={styles.resultMessage}>{result}</Text> }
                    
                                {/* Submit Button */}
                                <Button
                                    onPress={() => handleSubmit()}
                                    disabled={isSubmitting}
                                    containerStyle={styles.buttonContainer} 
                                    buttonStyle={{paddingVertical: 15}}
                                    color={mainColor}
                                >Sign In</Button>

                                {/* Navigation */}
                                <Text style={{marginTop: 60, fontSize: 18, textAlign: 'center'}}>Ainda não possui Cadastro? 
                                    <Link href="/register" style={{color: mainColor}}>  Clique Aqui</Link>
                                </Text>                                 
                            </Fragment>
                        )
                    }
                </Formik>
            </ScrollView>
            {/* LogoPng */}
            <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, position: 'absolute', bottom: 20, left: 20}} />
        </View>
    );
}


const styles = StyleSheet.create({
    mainContentContainer: {
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 60,
        fontFamily: '',
    },
    iconContainer: {
        backgroundColor: '#F5F5F5',
        marginTop: 60,
        margin: 'auto',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        shadowColor: 'gray',
        elevation: 20,
        marginBottom: 60
    },
    input: {
        backgroundColor: '#EDEDED',
        width: '100%',
        borderRadius: 30,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginBottom: 20
    },
    buttonContainer: {
        width: '70%', 
        marginTop: 60,
        margin: 'auto',
        borderRadius: 30, 
        shadowColor: mainColor, 
        elevation: 15
    },
    validationMessage: {
        marginTop: -15,
        marginBottom: 10,
        marginLeft: 10,
        color: 'red',
        alignSelf: 'flex-start'
    },
    resultMessage: {
        marginTop: 20,
    }
});

