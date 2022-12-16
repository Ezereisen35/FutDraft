import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import axios from "axios";
import Card from "../components/cardPartidos";

const API_KEY = "313026e0-7c7b-11ed-894c-afa424f70ac7";
const url = "https://app.sportdataapi.com/api/v1";

function DetalleJugador({ navigation, route }) {
	const { id } = route.params;
	const [jugador, setJugador] = useState([]);
	
	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`${url}/soccer/players/${id}?apikey=${API_KEY}`
				);
				setJugador(response.data.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
console.log(jugador)
	// return (
	// 	<View>
	// 		<Text>hi</Text>
	// 	</View>
	// );

	if (!jugador)
		return <Text>Estamos cargando tus contenidos...</Text>;

	return (
		<View style={styles.view}>
			{/* <ImageBackground style={styles.image}>
				<LogoTextoInicio /> */}
			{/* <Card {...item} navigation={navigation} /> */}

			<View>
				<Text style={{ fontSize: 20 }}>
					{jugador.firstname} {jugador.lastname} -{" "}
					{jugador.age} {jugador.height}
				</Text>
				<View style={{ display: "flex", flexDirection: "row" }}>
					<View>
						<Text>{jugador.firstname}</Text>
						<Image
									source={{ uri: jugador.img }}
									style={{ width: 40, height: 40 }}
								/>
						{/*<Text>{match.home_team.short_code}</Text>
						<Text>{match.stage.name}</Text>
						<Image
							source={{ uri: match.home_team.logo }}
							style={{ width: 40, height: 40 }}
						/>*/}
					</View>
			
				</View>
			</View>
			{/* </ImageBackground> */}
		</View>
	);
}

const styles = StyleSheet.create({
	image: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		backgroundColor: "#000000",
	},
	// view: {
	// 	color: "white",
	// },
});

export default DetalleJugador;
