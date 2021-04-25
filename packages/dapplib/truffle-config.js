require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name remember night snow grace clock bone gaze'; 
let testAccounts = [
"0x5ece896e1b65279bfac94b1e93da4b046f6c4aac1bd8cba221d7ee8fb7f550cb",
"0x4c9ed806b502cc5141c5e0bbc132183d07f2009cd287da6cbbed36a060d89bdc",
"0x6712fac2a4392f0874f192ebdb7a63a4fe5d6b0eb6ef0dcb76aaefa7d5230f26",
"0xf1e37eb5e0e19670a8ffa177854785bdf5270da5994bc61cafcf17290fffcf28",
"0x5e54720be3f7033096d7adaadbe576c0abcaf521199cb9058eb913924c0c0d37",
"0x5f642524cd4c64be79a4b90440aa4c161df9652ea48e8893dfc816396aedd518",
"0x8c491409e974b7a9a066a27387c8af601e5272a0f147a493a15abf0b8d97d74d",
"0xad1c97664e60cb2edb19d4ba3fe9260024630a6c825c511099eee16f8b4ae489",
"0xbe49f9843f2ae0604a90f77704a9f771d6e25f8b65acd473f785c0e45839a75f",
"0xa36e019d74255de43e21c7b2932f58c360dcd3c36bdf5fe4049cc96c9ba8951f"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
