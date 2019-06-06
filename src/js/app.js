const web3 = new Web3(Web3.givenProvider, null, {})
const AcademyCoinJSON = require("../../build/contracts/AcademyCoin.json");
let account, AcademyCoinContract

init()

async function mintTokens(){
    AcademyCoinContract.methods.mint(account, 1000000000000000000).send({from: account})
}
 
async function init(){
    const accounts = await ethereum.enable()
    account = accounts[0]

    AcademyCoinContract = new web3.eth.Contract(AcademyCoinJSON.abi, '0x61f0e026e2aa59c16f97920361a095b4f3af5b85', {
        defaultAccount: account, // default from address
        defaultGasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    })   

    document.getElementById("mintTokens").onclick = mintTokens
}


