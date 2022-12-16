import React, { useState, useEffect } from "react";
import { View, Text, Image, Button } from "react-native";

export default function Card(props) {
	return (
		<View>
			<Text style={{ fontSize: 20 }}>
				{props.home_team.name} {props.stats.home_score} -{" "}
				{props.away_team.name} {props.stats.away_score}
			</Text>
			<View style={{ display: "flex", flexDirection: "row" }}>
				<View>
					<Text>{props.home_team.name}</Text>
					<Text>{props.home_team.short_code}</Text>
					<Image
						source={{ uri: props.home_team.logo }}
						style={{ width: 40, height: 40 }}
					/>
				</View>
				<View>
					<Text>{props.away_team.name}</Text>
					<Text>{props.away_team.short_code}</Text>
					<Image
						source={{ uri: props.away_team.logo }}
						style={{ width: 40, height: 40 }}
					/>
				</View>
				<Button
					onPress={() =>
						props.navigation.navigate("detallePartido", {
							id: props.match_id,
						})
					}
					title={"Ver Más"}
				/>
			</View>
		</View>
	);
}
