require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog orphan slab chase note saddle honey inflict enter onion gasp'; 
let testAccounts = [
"0xc9ed50e17995a1604224f9e57c632fe8aef955d5282332deb722abc25e74e514",
"0xb884ab5be8fdef3f13ee9623deb5d4e7d01fdebce02a511dee1292a1aa56fab7",
"0x24dfc0000283b5ddb6477996fb53f9664935534528e824d66d1c2c5151458480",
"0x14f03d6f2131fa5fbde5dd6965717303f09d33666173a8ae2f82d11506f909e9",
"0xc242e4c67c0713c069d1648c75986859b883289c15043d19e25bcc7c6647b559",
"0xad1ff315e55540336405563adb98117bd4fa5d9e7a4a6feab0bca204f4ecbb96",
"0xa75f639a859f57d86bed8446a749d592a667b9bf181c9520e6303d67e55dfd8b",
"0x48b9028a9c315cef01471aa089c3d064e0f0438f19d4a3b109381a03971560a8",
"0x2fe2d2387e05db3380ae5584f0aacd461417e97bb4a89eaf96d17701a0b444aa",
"0x4ea24b46dd4a2afbd6b909118b4a92c3d5930b17a78995f08e1e7be95decbd79"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
