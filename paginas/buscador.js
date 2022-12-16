import React, { Component, useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	Button,
	View,
	Image,
	ImageBackground,
	InlineImage,
	TouchableOpacity,
	FlatList,
	TextInput,
} from "react-native";
{
	/*import fondo from "../assets/fondo.jpg";
import BotonIniciarSesionInicio from "../components/BotonIniciarSesionInicio";
import BotonRegistrarseInicio from "../components/BotonRegistrarseInicio";*/
}
import LogoTextoInicio from "../components/LogoTextoInicio";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Card from "../components/cardPartidos";

const API_KEY = "313026e0-7c7b-11ed-894c-afa424f70ac7";
const url = "https://app.sportdataapi.com/api/v1";

function Home({ navigation }) {
	const [resultados, setResultados] = useState([]);
	const [jugadores, setJugadores] = useState([]);
	const [equipos, setEquipos] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response1 = await axios.get(
					`${url}/soccer/players?apikey=${API_KEY}&country_id=113&`
				);
				const response2 = await axios.get(
					`${url}/soccer/teams?apikey=${API_KEY}&country_id=113`
				);
				setJugadores(response1.data.data);
				setEquipos(response2.data.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);
{/* 
	useEffect(() => {
        (async () => {
            try {
                const [españa, brasil, francia, e] = await Promise.all([
                    async () => await axios.get(
                        `${url}/soccer/players?apikey=${API_KEY}&country_id=113`
                    ),
                    async () => await axios.get(
                        `${url}/soccer/players?apikey=${API_KEY}&country_id=25`
                    ),
                    async () => await axios.get(
                        `${url}/soccer/players?apikey=${API_KEY}&country_id=47`
                    ),
                    async () => await axios.get(
                        `${url}/soccer/teams?apikey=${API_KEY}&country_id=113`
                    ),
                ]);
                setJugadores([
                    españa.data.data,
                    brasil.data.data,
                    francia.data.data,
                ]);
                setEquipos(e.data.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);
*/}

	const onChange = async (text) => {
		if (text.length < 2) return;
		const res = [
			...jugadores.filter(
				(jugador) =>
					jugador.firstname
						.toLowerCase()
						.includes(text.toLowerCase()) ||
					jugador.lastname.toLowerCase().includes(text.toLowerCase())
			),
			...equipos.filter((equipo) =>
				equipo.name.toLowerCase().includes(text.toLowerCase())
			),
		];
		console.log(res);
		setResultados(res);
	};

	return (
		<View style={styles.view}>
			<TextInput
				onChangeText={onChange}
				style={styles.input}
				placeholder='Buscá jugadores y clubes'
			/>
			<FlatList
				data={resultados}
				keyExtractor={(item) => item.match_id}
				renderItem={({ item }) => {console.log(item)
					if (item.name)
						return (
							<View>
								<Text>{item.name}</Text>
								<Image
									source={{ uri: item.logo }}
									style={{ width: 40, height: 40 }}
								/>
								<Button onPress={() => navigation.navigate("detalleClub", {id: item.team_id})} title={"detalle"}/>
							</View>
						);
					return (
						<View>
							<Text>
								{item.firstname} {item.lastname}
							</Text>
							<Image
								source={require("../assets/user.png")}
								style={{ width: 40, height: 40 }}
							/>
							<Button onPress={() => navigation.navigate("detalleJugador", {id: item.player_id})} title={"detalle"}/>
						</View>
					);
				}}
			/>
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
	input: {
		marginTop: 20,
	},
	// view: {
	// 	color: "white",
	// },
});

export default Home;
