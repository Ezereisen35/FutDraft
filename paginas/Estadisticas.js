import React, { Component, useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	Image,
	ImageBackground,
	InlineImage,
	TouchableOpacity,
	FlatList,
} from "react-native";

import LogoTextoInicio from "../components/LogoTextoInicio";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Card from "../components/cardPartidos";

const API_KEY = "313026e0-7c7b-11ed-894c-afa424f70ac7";
const url = "https://app.sportdataapi.com/api/v1";

function Home({ navigation }) {
	const [stats, setStats] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const response = await axios.get(
					`${url}/soccer/standings?apikey=${API_KEY}&season_id=3307`
				);
				// const numPartido = 32049;
				// const responseasd = await axios.get(
				// 	`http://128.0.0.3:8080/rating/${numPartido}`
				// );
				// await axios.post(`http://128.0.0.3:8080/rating/`, {
				// 	match_id: 23497,
				// 	rating: 3,
				// });
				setMatches(response.data.data);
			} catch (err) {
				console.log(err);
			}
		})();
	}, []);

	// return (
	// 	<View>
	// 		<Text>hi</Text>
	// 	</View>
	// );

	return (
		<View style={styles.view}>
			<Text>Hello</Text>
			<Button
				onPress={() => navigation.navigate("buscador")}
				title={"buscador"}
			/>
			{/* <ImageBackground style={styles.image}>
				<LogoTextoInicio /> */}
			<FlatList
				data={matches}
				keyExtractor={(item) => item.match_id}
				renderItem={({ item }) => (
					<Card {...item} navigation={navigation} />
				)}
			/>
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

export default Home;
