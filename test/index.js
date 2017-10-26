// Load modules
const hapio = require('../');
const Code = require('code');
const Lab = require('lab');

const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

describe('hapio', function () {

    it('basic loading', async function () {
        const serverMock = {
            listener: {},
            expose: (key, value) => {
                expect(key).to.be.equal('io');
            },
        };
        try {            
            await hapio.plugin.register(serverMock, {});
        } catch (e) {
            expect(true).to.be.equal(false);
        }
    });

});