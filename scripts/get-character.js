const MoonCreation = artifacts.require('MoonPhase')

module.exports = async callback => {
    const mon = await MoonCreation.deployed()
    console.log('Let\'s get the overview of your character')
    const overview = await mon.characters(0)
    console.log(overview)
    callback(overview.tx)
}
