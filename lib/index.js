'use strict'

const Hoek = require('hoek');
const socketIo = require('socket.io');

const defaultOptions = {
    serverOptions: {}
};

const register = function (server, options) {
    const socketIoOptions = Hoek.applyToDefaults(defaultOptions, options);

    const io = socketIo(server.listener, socketIoOptions.serverOptions);
    
    server.expose('io', io);

    return Promise.resolve();
};

exports.plugin = {
    register,
    name: 'hapio', 
    pkg: require('../package.json')
};