import { Fragment, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Dimensions, useWindowDimensions, Alert } from 'react-native';
import logo from "../assets/imgs/logo-2.png"
import { Button, CheckBox, Icon } from '@rneui/base';
import { mainColor } from '../styles';
import { Formik } from "formik";
import * as Yup from 'yup';
import { Link, router } from 'expo-router';
import { useUserStore } from '@/store/user-store';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '@/firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps) {
    // Obtendo a altura da tela
    const { height, width } = useWindowDimensions(); 
    const [result, setResult] = useState('');
    const {user, setUser} = useUserStore();

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);

    useEffect(() => {
        setLoading(true);
        function handleRedirectUser(){
            try{
                onAuthStateChanged(auth, (userCredentials) => {
                    if (userCredentials) {
                        setUser(userCredentials);
                        router.replace("/home");
                    }
                })
            } catch (e){
                console.log(e);
            } finally {
                setLoading(false);
            }
        }
        handleRedirectUser();
    }, [])
    
    // ValidationYup
    const yupValidation = Yup.object({
        email: Yup.string().required("Informe o email!").email('E-mail inválido!'),
        password: Yup.string().required("Informe a senha!").min(6, 'Senha Precisa de no mínimio 6 caracteres!')
    })

    // RegisterFormik
    const handleLogin = async ({email, password}: any) => {
        try{
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    setLoading(false);
                    setError('');
                    Alert.alert("Sucesso", "Usuário logado com sucesso!");
                    setUser(userCredential);
                    router.replace("/home");
                })
                .catch((error) => {
                    let errorMessage = error.message;
                    if(errorMessage.includes("auth/invalid")){
                        errorMessage = "Credenciais de acesso inválidas."
                    }
                    setError(errorMessage);
                    setLoading(false);
                });
        } catch(e: any){
            setError(e.message);
            setLoading(false);
        }
    };

    if(loading) return;
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

                                {/* Error Messages */}
                                {error && <Text style={styles.errorMessage}>Erro: {error}</Text>}
                    
                                {/* Submit Button */}
                                {!loading &&
                                    <Button
                                        onPress={() => handleSubmit()}
                                        containerStyle={styles.buttonContainer} 
                                        buttonStyle={{paddingVertical: 15}}
                                        color={mainColor}
                                    >Entrar</Button>
                                }
                                {loading &&
                                    <Button
                                        containerStyle={[styles.buttonContainer, {backgroundColor: 'gray'}]} 
                                        buttonStyle={{paddingVertical: 15}}
                                        color={mainColor}
                                    >Aguarde...</Button>
                                }

                                {/* Navigation */}
                                <Text style={{marginTop: 60, fontSize: 18, textAlign: 'center'}}>Ainda não possui Cadastro? 
                                    <Link href="/register" style={{color: mainColor}}>  Clique Aqui</Link>
                                </Text>                                 
                            </Fragment>
                        )
                    }
                </Formik>

                {/* LogoPng */}
                <View style={{alignItems: 'center'}}>
                    <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, marginTop: 200}} />
                </View>
            </ScrollView>
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
    },
    errorMessage:{
        color: 'red',
        marginBottom: 50,
    },
});

