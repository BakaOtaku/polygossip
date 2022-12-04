const {ethToEvmos, evmosToEth} =require("@tharsis/address-converter")

let address = ethToEvmos("0x0374CA6A0bBb0762Bda351C1f32f2fD5cFF5Dbf8184B8041C01FE2E64972DB6cce")
// "evmos1z3t55m0l9h0eupuz3dp5t5cypyv674jj7mz2jw"
console.log(address)

// let address = evmosToEth("evmos1reujya8a7px2afvcdd8hv62n70e28hem3gx8kl")
// console.log(address)
// "0x14574a6DFF2Ddf9e07828b4345d3040919AF5652"