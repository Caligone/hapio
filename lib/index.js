'use strict'

var _ = require('underscore'),
    defaultOptions = {
        connectionLabel: ''
    };

exports.register = function (server, options, next) {
    var io, listener;

    _.defaults(options, defaultOptions);

    // Pick the first connection if no label is defined
    if (options.connectionLabel !== '') {
        if (typeof server.select(options.connectionLabel).connections[0] === 'undefined') {
            return next('The connection label does not exist');
        }
        listener = server.select(options.connectionLabel).connections[0].listener;
    } else {
        listener = server.connections[0].listener;
    }

    io = require('socket.io')(listener);
    server.expose('io', io);

    return next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};