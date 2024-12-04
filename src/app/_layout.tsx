import { Stack, useGlobalSearchParams } from "expo-router";
import { Fragment } from "react";
import Toast from "react-native-toast-message";

export default function Layout(){
    const params: any = useGlobalSearchParams();

  return (
    <Fragment>
        <Stack
            screenOptions={{
                headerShown: true,
                contentStyle: { backgroundColor: '#ffffff' }, // Cor de fundo global para todas as telas do Stack
                statusBarTranslucent: true,
                statusBarBackgroundColor: 'white',
            }}>
            <Stack.Screen name='index' options={{
                headerShown: false,
                statusBarBackgroundColor: '#F5F5F5',
            }} />
            <Stack.Screen name='register/index' options={{
                headerShown: false,
                statusBarBackgroundColor: '#F5F5F5',
            }} />

            <Stack.Screen name='home/index' options={{
                headerTitle: 'Home'
            }} />

            <Stack.Screen name='place/index' options={{
                headerTitle: params["place"] ? `${JSON.parse(params["place"]).name}` : 'Lugar',
            }} />

            <Stack.Screen name='allPlaces/index' options={{
                headerTitle: params["selectedCategory"] ? `Todos(as) ${params["selectedCategory"]} de ${params["selectedCity"]}` : 'Todos os Lugares',
            }} />
        </Stack>
        <Toast />
    </Fragment>
  )
}
