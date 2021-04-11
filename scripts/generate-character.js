const MoonCreation = artifacts.require('MoonPhase')

module.exports = async callback => {
  const mon = await MoonCreation.deployed()
  console.log('Creating requests on contract:', mon.address)
  const tx = await mon.requestNewRandomCharacter(77, "First Quarter Moon")
  const tx2 = await mon.requestNewRandomCharacter(7777777, "Full Moon")
  const tx3 = await mon.requestNewRandomCharacter(7, "New Moon")
  const tx4 = await mon.requestNewRandomCharacter(777, "Third Quarter Moon")
  const tx5 = await mon.requestNewRandomCharacter(7777, "Waning Cresent Moon")
  const tx6 = await mon.requestNewRandomCharacter(77777, "Waxing Cresent Moon")
  callback(tx.tx)
}
