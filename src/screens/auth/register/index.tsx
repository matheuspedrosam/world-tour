import * as React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput } from 'react-native';
import logo from "../../../assets/imgs/logo-2.png"
import { Button, CheckBox, Icon } from '@rneui/base';
import { mainColor } from '../../../styles';
import { Formik } from "formik";
import * as Yup from 'yup';

export interface RegisterScreenProps {
}

export function RegisterScreen (props: RegisterScreenProps) {
    const [checked, setChecked] = useState(false);
    const [result, setResult] = useState('');
    
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
        await new Promise(resolve => setTimeout(resolve, 1000));

        if(email === 'teste@gmail.com'){    // Simulando que já existe esse e-mail
            setResult('falhou');
        } else{
            setResult('registrado');
        }
    };

    return (
        <View style={styles.mainContentContainer}>
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
                        <>
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
                            <View style={{flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start'}}>
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
                
                            {/* Submit Button */}
                            <Button
                                onPress={() => handleSubmit()}
                                disabled={isSubmitting}
                                containerStyle={styles.buttonContainer} 
                                buttonStyle={{paddingVertical: 15}}
                                color={mainColor}
                            >Sign Up</Button>

                            {/* ResultMessages */}
                            { result == 'registrado' && <Text style={styles.resultMessage}>Registado com sucesso! ✅</Text> }
                            { result == 'falhou' && <Text style={styles.resultMessage}>Error, usuário já cadastrado!</Text> }
                        </>
                    )
                }
            </Formik>

            {/* LogoPng */}
            <Image source={logo} style={{height: 40, width: 200, borderRadius: 5, position: 'absolute', bottom: 20, left: 20}} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContentContainer: {
        backgroundColor: '#F5F5F5',
        height: '100%',
        paddingHorizontal: 60,
        alignItems: 'center',
        fontFamily: ''
    },
    iconContainer: {
        backgroundColor: '#F5F5F5',
        marginTop: 60,
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
        marginTop: 20
    }
});
