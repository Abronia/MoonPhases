const MoonCreation = artifacts.require('MoonPhase')
const fs = require('fs')

const metadataTemple = {
    "name": "",
    "description": "",
    "image": "",
    "attributes": [
        {
            "trait_type": "Brightness",
            "value": 0
        },
        {
            "trait_type": "Size",
            "value": 0
        },
        {
            "trait_type": "Glow",
            "value": 0
        },
        {
            "trait_type": "Experience",
            "value": 0
        }
    ]
}
module.exports = async callback => {
    const mon = await MoonCreation.deployed()
    length = await mon.getNumberOfCharacters()
    index = 0
    while (index < length) {
        console.log('Let\'s get the overview of your character ' + index + ' of ' + length)
        let characterMetadata = metadataTemple
        let characterOverview = await mon.characters(index)
        index++
        characterMetadata['name'] = characterOverview['name']
        if (fs.existsSync('metadata/' + characterMetadata['name'].toLowerCase().replace(/\s/g, '-') + '.json')) {
            console.log('test')
            continue
        }
        console.log(characterMetadata['name'])
        characterMetadata['attributes'][0]['value'] = characterOverview['brightness']['words'][0]
        characterMetadata['attributes'][1]['value'] = characterOverview['size']['words'][0]
        characterMetadata['attributes'][2]['value'] = characterOverview['glow']['words'][0]

        filename = 'metadata/' + characterMetadata['name'].toLowerCase().replace(/\s/g, '-')
        let data = JSON.stringify(characterMetadata)
        fs.writeFileSync(filename + '.json', data)
    }
    callback(mon)
}
