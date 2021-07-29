const { default: axios } = require("axios");

function returnVal() {
    axios.get(process.env.aurl).then(res => {
        console.log(`curr price: ${res.data[1].current_price}`)
    })

}

module.exports = { returnVal }