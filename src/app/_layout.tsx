import { Stack, useGlobalSearchParams } from "expo-router";
import { Fragment } from "react";
import Toast from "react-native-toast-message";

export default function Layout(){
    const params: any = useGlobalSearchParams();

  return (
    <Fragment>
        <Stack>
            <Stack.Screen name='index' options={{
                headerShown: false
            }} />
            <Stack.Screen name='register/index' options={{
                headerShown: false
            }} />

            <Stack.Screen name='home/index' options={{
                headerTitle: 'Home'
            }} />

            <Stack.Screen name='place/index' options={{
                headerTitle: params["place"] ? `${JSON.parse(params["place"]).name}` : 'Lugar',
            }} />

            <Stack.Screen name='allPlaces/index' options={{
                headerTitle: params["category"] ? `Todos(as) ${params["category"]} de ${params["city"]}` : 'Todos os Lugares',
            }} />
        </Stack>
        <Toast />
    </Fragment>
  )
}
