const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: String,
	punchline: String
});

const Jokes = mongoose.model("Jokes", JokeSchema);

module.exports = Jokes;