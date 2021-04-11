const MoonCreation = artifacts.require('MoonPhase')
const TOKENID = 0
module.exports = async callback => {
    const mon = await MoonCreation.deployed()
    console.log('Let\'s set the tokenURI of your characters')
    const tx = await mon.setTokenURI(0, "https://ipfs.io/ipfs/QmVa84ZBWK23ZLB4PHh7WmMaN63pbs13UL9uMFmfqjxXrw?filename=first-quarter.json")
    const tx1 = await mon.setTokenURI(1, "https://ipfs.io/ipfs/QmfQr12zeQyxKdqG42rYpgmcnisEKk727F6Hx7xVv9jeP6?filename=full.json")
    const tx2 = await mon.setTokenURI(2, "https://ipfs.io/ipfs/QmVdZxyisFWkzJtKmcF8T1358kvLQ6S4DHbEV9StVdAdEW?filename=new.json")
    const tx3 = await mon.setTokenURI(3, "https://ipfs.io/ipfs/QmdnfiC5BHrnT5EBuLWjZFMbvwz5mymo3en5AVzC9HWyQd?filename=third-quarter.json")
    const tx4 = await mon.setTokenURI(4, "https://ipfs.io/ipfs/QmYns1HZq4Kr4e9pjpijaA42WEgFGCj5TVG74kJGeS5Avv?filename=waning-cresent.json")
    const tx5 = await mon.setTokenURI(5, "https://ipfs.io/ipfs/QmeMmHEwUmL9MfobbV64EqpyjnGGNSyqArBWgEjUKBftCL?filename=waxing-cresent.json")
    console.log(tx)
    callback(tx.tx)
}
