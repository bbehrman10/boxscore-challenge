const axios = require('axios');
const Game = require('../models/game.js');


exports.getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getGameById = async (req, res) => {
    const gameId = req.params.id;

    try {
        let game = await Game.findById(gameId);

        if (game && (Date.now() - new Date(game.event_information.start_date_time).getTime()) < 15000) {
            res.json(game);
        } else {
            const url = `https://chumley.barstoolsports.com/dev/data/games/${gameId}.json`;
            const response = await axios.get(url);
            const data = response.data;

            if (game) {
                game = await Game.findByIdAndUpdate(gameId, data, { new: true });
            } else {
                game = new Game(data);
                game._id = gameId;
                await game.save();
            }

            res.json(game);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};

exports.updateGameById = async (req, res) => {
    const gameId = req.params.id;

    try {
        // Fetch fresh data from the external API
        const url = `https://chumley.barstoolsports.com/dev/data/games/${gameId}.json`;
        const response = await axios.get(url);
        const data = response.data;

        // Update the game in the database with the fresh data
        const updatedGame = await Game.findByIdAndUpdate(gameId, data, { new: true });

        res.json(updatedGame);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
};
