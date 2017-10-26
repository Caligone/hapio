'use strict'

const _ = require('underscore');
const socketIo = require('socket.io');

const defaultOptions = {
    serverOptions: {}
};

const register = function (server, options) {

    _.defaults(options, defaultOptions);

    const io = socketIo(server.listener, options.serverOptions);
    server.expose('io', io);

    return Promise.resolve();
};

exports.plugin = {
    register,
    name: 'hapio', 
    pkg: require('../package.json')
};