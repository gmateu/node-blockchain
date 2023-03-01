const ethers = require('ethers')
const hexABI=require('./abis/hex.json')
require("dotenv").config()

async function main(){
    const provider=new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_ID}`)
    const hexAddress="0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39"

    const contract = new ethers.Contract(hexAddress,hexABI,provider)

    contract.on("Transfer",(from,to,value,event)=>{
        let info={
            from: from,
            to:to,
            value: ethers.utils.formatUnits(value,8),
            data:event
        }

        console.log(JSON.stringify(info,null,4))
    })


}

main();