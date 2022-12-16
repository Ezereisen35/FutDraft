const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const ratings = [];

app.post("/rating", (req, res) => {
	// body: {match_id: 2435, rating: 5}
	ratings.push({ id: req.body.match_id, rating: req.body.rating });
	res.status(201).send("rating agregado");
});

app.get("/rating/:id", (req, res) => {
	const id = parseInt(req.params.id);
	let suma = 0;

	console.log(ratings);

	for (let i = 0; i < ratings.length; i++) {
		console.log(ratings[i]);
		if (ratings[i].id === id) {
			suma += ratings[i].rating;
		}
	}

	if (ratings.length === 0) {
		res.status(400).send("no hay ningun rating para este partido");
	}

	const promedio = suma / ratings.length;

	console.log(promedio);
	res.status(200).json({ promedio });
});

app.listen(8080, () => {
	console.log("Aplicación corriendo en http://localhost:8080");
});
