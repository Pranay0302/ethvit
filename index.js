require('dotenv').config()
var ethjs = require("web3")
var rv = require('./files/price')
var gt = require('./files/txnDeets')

var url = `https://mainnet.infura.io/v3/${process.env.projid}`


var web3 = new ethjs(url)

function x(val) {
    return web3.utils.fromWei(val)
}

console.log(`using ${web3.version}`)
class Val {

    gb() {
        web3.eth.getBalance(process.env.addr, (err, bal) => {
            if (err) {
                console.log(err)
            }
            console.log('acnt balance:', x(bal), 'eth')
        })
    }

}

var val = new Val();
val.gb()
rv.returnVal()
gt.getTxn()