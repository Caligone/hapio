var Hapi = require('hapi');

var internals = {};

exports.V1 = internals.V1 = function () {

    this.server = new Hapi.Server();
    this.server.connection({ host: 'localhost' });
    this.server.route([
        {
            method: 'GET',
            path: '/',
            config: {
                bind: this,
                handler: function (request, reply) {
                    reply('Hello, world !');
                }
            }
        }
    ]);
};

internals.V1.prototype.start = function (callback) {
    var self = this;

    this.server.start(function (err) {
        self.uri = self.server.info.uri;

        return callback();
    })
};

internals.V1.prototype.stop = function (callback) {
    this.server.stop(callback);
};
