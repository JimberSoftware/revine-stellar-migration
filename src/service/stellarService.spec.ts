import { keypairFromAccount, revineAddressFromSeed } from "./cryptoService";
import { generateAccount, loadAccount, convertTokens } from "./stellarService";
import { generateMnemonic } from "bip39";

const seedPhrase: string = "treat gloom wrong topple learn device stable orchard essay bitter brand cattle amateur beach bulk build cluster quit survey news physical hole tower glass";

const keypair = keypairFromAccount(seedPhrase, 0); // see cryptoService
const revineKeypair = revineAddressFromSeed(seedPhrase, 0);
describe('stellar', () => {
    // can only be done the once and generating an account for every tests isn't particulary good 💩
    it.skip('should generate an account', async () => {

        console.log({ revine: revineKeypair, stellar: keypair.publicKey() });

        try {
            await generateAccount(keypair, revineKeypair);
        } catch (error) {
            console.log(error.request)
            console.log(error.response.data)
            throw error
        }
    }, 60000);

    it.skip('should convert tokens', async () => {
        console.log({ revine: revineKeypair, stellar: keypair.publicKey() });

        try {
            await convertTokens( revineKeypair, keypair.publicKey());
        } catch (error) {
            console.log(error.request)
            console.log(error.response.data)
            throw error
        }
    }, 60000);

    it('should load an account', async () => {
        let accountResponse = await loadAccount(keypair);
        expect(accountResponse.accountId()).toBe('GBTJEFDDMA5N4TDBFLJGA6K3MQFNHR2KUUFYAKYCOAEE43JD4CP3UTQC');
    });
});