const ethers = require('ethers')
const usdtABI=require('./abis/usdt.json')
require("dotenv").config()

async function main(){
    const provider=new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`)
    const usdtAddress="0xdAC17F958D2ee523a2206206994597C13D831ec7"

    const contract = new ethers.Contract(usdtAddress,usdtABI,provider)

    contract.on("Transfer",(from,to,value,event)=>{
        let info={
            from: from,
            to:to,
            value: ethers.utils.formatUnits(value,6),
            data:event
        }

        console.log(JSON.stringify(info,null,4))
    })


}

main();