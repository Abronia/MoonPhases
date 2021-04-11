
const { expectRevert, expectEvent } = require('@openzeppelin/test-helpers')

const RANDOM_SEED = 100
const CHARACTER_NAME = "Shrek"

contract('MoonPhase', accounts => {
    const { LinkToken } = require('@chainlink/contracts/truffle/v0.4/LinkToken')
    const MoonPhase = artifacts.require('MoonPhase.sol')
    const defaultAccount = accounts[0]

    let link, mon

    beforeEach(async () => {
        link = await LinkToken.new({ from: defaultAccount })
        mon = await MoonPhase.new({ from: defaultAccount })
    })

    describe('#requestNewRandomCharacter', () => {
        context('without LINK', () => {
            it('reverts', async () => {
                const newCharacter = await expectRevert.unspecified(mon.requestNewRandomCharacter(RANDOM_SEED, CHARACTER_NAME))
            })
        })
    })
})  