const { default: axios } = require('axios')

function returnVal() {
    axios.get(process.env.aurl).then((res) => {
        console.log(`eth curr price: ${res.data[1].current_price}`)
    })
}

function btcreturnVal() {
    axios.get(process.env.aurl).then((res) => {
        console.log(`btc curr price: ${res.data[0].current_price}`)
    })
}

function adareturnVal() {
    axios.get(process.env.aurl).then((res) => {
        console.log(`ada curr price: ${res.data[2].current_price}`)
    })
}

module.exports = { returnVal, btcreturnVal, adareturnVal }
