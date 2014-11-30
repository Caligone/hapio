'use strict'

exports.register = function (plugin, options, next) {
    var io = require('socket.io')(plugin.servers[0].listener);

    plugin.expose('io', io);

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};