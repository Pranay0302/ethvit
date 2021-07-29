var ethjs = require("web3")
var url = `https://mainnet.infura.io/v3/${process.env.projid}`

var web3 = new ethjs(url)

// right now, this function focuses on only 1 transaction per se
function getTxn() {
    return web3.eth.getTransaction(process.env.txnhash, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log('---transaction details---')
        console.log(JSON.stringify(res, null, 3))
    })

}

module.exports = { getTxn }