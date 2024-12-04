import { useState } from 'react';
import { Fragment } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput, Dimensions, useWindowDimensions, Alert } from 'react-native';
import logo from "../../assets/imgs/logo-2.png"
import { Button, CheckBox, Icon } from '@rneui/base';
import { mainColor } from '../../styles';
import { Formik } from "formik";
import * as Yup from 'yup';
import { Link, router } from 'expo-router';
import { useUserStore } from '@/store/user-store';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/firebase/config';

export interface RegisterScreenProps {
}

export default function RegisterScreen (props: RegisterScreenProps) {
    const [checked, setChecked] = useState(false);
    const [result, setResult] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean | null>(null);
    const {user, setUser} = useUserStore();
    // Obtendo a altura da tela
    const { height, width } = useWindowDimensions(); 
    
    // ValidationYup
    const yupValidation = Yup.object({
        name: Yup.string().required("Informe o seu nome!").min(6, 'O Nome Precisa de no mínimio 6 caracteres!'),
        email: Yup.string().required("Informe o email!").email('E-mail inválido!'),
        password: Yup.string().required("Informe a senha!").min(6, 'Senha Precisa de no mínimio 6 caracteres!'),
        confirmPassword: Yup.string()
                                .required("Informe a Confirmação de senha!")
                                .min(6, 'A Confirmação de Senha Precisa de no mínimio 6 caracteres!')
                                .oneOf([Yup.ref('password'), null], 'As senhas precisam ser iguais!')
    })

    // RegisterFormik
    const handleRegister = async ({name, email, password, confirmPassword}: any) => {
        setLoading(true);
        try{
            createUserWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    await updateProfile(userCredential.user, {
                        displayName: name,
                    });
                    setLoading(false);
                    setError(null);
                    Alert.alert("Sucesso", "Usuário criado com sucesso!");
                    setUser(userCredential);
                    router.replace("/home");
                })
                .catch((error) => {
                    let errorMessage = error.message;
                    if(error.message.includes('auth/email')){
                        errorMessage = "Esse E-mail já esta em uso."
                    }
                    setError(errorMessage);
                    setLoading(false);
                });
        }catch(e: any){
            setError(e.message);
            setLoading(false);
        }
    };

    return (
        <View style={{height: height, width: width}}>
            <ScrollView style={styles.mainContentContainer}>
                {/* IconStylingPage */}
                <Icon containerStyle={styles.iconContainer} color={mainColor} size={50} name='public'/>

                {/* Heading */}
                <Text style={{fontSize: 32, fontWeight: 'bold', alignSelf: 'flex-start', marginBottom: 60}}>Sign Up</Text>

                {/* Formik Validation */}
                <Formik
                    initialValues={{name:'', email:'', password:'', confirmPassword: ''}}
                    validationSchema={yupValidation}
                    onSubmit={async (values, actions) => {
                        await handleRegister(values);
                        actions.setSubmitting(false);
                    }}
                >
                    {
                        ({errors, handleChange, handleSubmit, isSubmitting}) => (
                            <Fragment>
                                {/* Inputs */}
                                <TextInput onChangeText={handleChange('name')} style={styles.input} placeholder='Nome'/>
                                { errors.name && <Text style={styles.validationMessage}>{`${errors.name}`}</Text> }

                                <TextInput onChangeText={handleChange('email')} style={styles.input} placeholder='Email'/>
                                { errors.email && <Text style={styles.validationMessage}>{`${errors.email}`}</Text> }

                                <TextInput onChangeText={handleChange('password')} style={styles.input} placeholder='Senha' secureTextEntry/>
                                { errors.password && <Text style={styles.validationMessage}>{`${errors.password}`}</Text> }

                                <TextInput onChangeText={handleChange('confirmPassword')} style={styles.input} placeholder='Confirmar Senha' secureTextEntry/>
                                { errors.confirmPassword && <Text style={styles.validationMessage}>{`${errors.confirmPassword}`}</Text> }
                    
                                {/* Terms */}
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <CheckBox 
                                        containerStyle={{backgroundColor: '#F5F5F5'}} 
                                        checkedColor={mainColor} 
                                        checked={checked} 
                                        onTouchEnd={() => setChecked(!checked)}
                                    />
                                    <Text style={{fontSize: 18}}>
                                        I accept the
                                        <Text style={{color: mainColor}}> Privacy Police </Text>
                                        and
                                        <Text style={{color: mainColor}}> Terms </Text>
                                    </Text>
                                </View>
                                
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
                                    >Registrar</Button>
                                }
                                {loading &&
                                    <Button
                                        containerStyle={[styles.buttonContainer, {backgroundColor: 'gray'}]} 
                                        buttonStyle={{paddingVertical: 15}}
                                        color={mainColor}
                                    >Aguarde...</Button>
                                }
                                <Text style={{marginTop: 60, fontSize: 18, textAlign: 'center'}}>Já possui Cadastro? 
                                    <Link href="/" style={{color: mainColor}}>  Clique Aqui</Link>
                                </Text>                            
                            </Fragment>
                        )
                    }
                </Formik>

                {/* LogoPng */}
                <View style={{alignItems: 'center'}}>
                    <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, marginTop: 100}} />
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
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
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
        textAlign: 'center'
    },
    errorMessage:{
        color: 'red',
        marginBottom: 50,
    },
});
