// Load modules
var hapio = require('../');
var Code = require('code');
var Hapi = require('hapi');
var Lab = require('lab');
var Mock = require('./mock');


// Declare internals
var internals = {};


// Test shortcuts
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;


describe('hapio', function () {

    it('basic loading without connection label', function (done) {

        var mock = new Mock.V1();
        mock.start(function () {
            var opts = {};
            var server = new Hapi.Server();
            server.connection({ host: 'localhost', port: 80 });
            server.register({register: hapio, options: opts}, function (err) {

                expect(err).to.not.exist();

                mock.stop(done);

            });
        });
    });

    it('loading with connection label that does not exist', function (done) {

        var mock = new Mock.V1();
        mock.start(function () {
            var opts = {
                connectionLabel: 'pineapple'
            };
            var server = new Hapi.Server();
            server.connection({ host: 'localhost', port: 80 });
            server.register({register: hapio, options: opts}, function (err) {

                expect(err).exist();
                expect(err).equal('The connection label does not exist');
                mock.stop(done);

            });
        });
    });

    it('loading with connection label that exists', function (done) {

        var mock = new Mock.V1();
        mock.start(function () {
            var opts = {
                connectionLabel: 'main'
            };
            var server = new Hapi.Server();
            server.connection({ host: 'localhost', labels: 'main', port: 80 });
            server.register({register: hapio, options: opts}, function (err) {

                expect(err).to.not.exist();
                mock.stop(done);

            });
        });
    });
});