const CharacterModel = require('../models/Character')

async function getCharacters() {
    const Characters = await CharacterModel.find({})
    return Characters
}

module.exports = getCharacters