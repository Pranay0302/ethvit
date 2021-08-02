// finding the merkle root

const crypt = require('crypto-js')

var TXN = [
    '3ga', 'pka', 'skl', 'nic'
]

const pair = arr =>
    Array.from(Array(Math.ceil(arr.length / 2)), (_, i) => arr.slice(i * 2, i * 2 + 2));


console.log(pair(TXN))

function merkle(List) {
    newList = []

    if (List.length == 1)
        console.log(List[0])


    for (var i = 0; i < List.length - 1; i++) {
        newList.push(crypt.SHA256((List[i], List[i + 1])).toString())

    }

    if (List.length % 2 == 1) {
        newList.push(crypt.SHA256(List[-1], List[-1]).toString())
    }

    console.log(JSON.stringify(newList, null, 2))
        // return merkle(newList)
}

merkle(TXN)


// incomplete
// var a = crypt.SHA256(TXN[0], TXN[1]).toString()
// var b = crypt.SHA256(TXN[2], TXN[3]).toString()

// var c = crypt.SHA256(a, b).toString()

// console.log(c)

// console.log(`${crypt.SHA256(TXN[0], TXN[1]).toString()}`, ` hash of ${TXN[0]} and ${TXN[1]}`)

// console.log(`${crypt.SHA256(TXN[2], TXN[3]).toString()}`, ` hash of ${TXN[2]} and ${TXN[3]}`)