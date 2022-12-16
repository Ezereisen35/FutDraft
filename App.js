import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./paginas/home";
import DetallePartido from "./paginas/detallePartido";
import Buscador from "./paginas/buscador";
import Jugador from "./paginas/detalleJugador";
import Club from "./paginas/detalleClub";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='buscador' component={Buscador} />
				<Stack.Screen name='detallePartido' component={DetallePartido} />
				<Stack.Screen name='detalleJugador' component={Jugador} />
				<Stack.Screen name='detalleClub' component={Club} />
				{/*<Stack.Screen name="About" component={about} />
      <Stack.Screen name="Contactos" component={contacts} />
      <Stack.Screen name="Emergency" component={emergencyContact} /> 
      <Stack.Screen name="Temperatura" component={temperatura} />*/}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
