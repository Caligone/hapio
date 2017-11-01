hapio
=====

[![Greenkeeper badge](https://badges.greenkeeper.io/Caligone/hapio.svg)](https://greenkeeper.io/)

[![Dependency Status](https://david-dm.org/Caligone/hapio.svg)](https://david-dm.org/Caligone/hapio)
[![devDependency Status](https://david-dm.org/Caligone/hapio/dev-status.svg)](https://david-dm.org/Caligone/hapio#info=devDependencies)
[![Build Status](https://travis-ci.org/Caligone/hapio.svg?branch=master)](https://travis-ci.org/Caligone/hapio)
[![Coverage Status](https://coveralls.io/repos/Caligone/hapio/badge.svg?branch=master)](https://coveralls.io/r/Caligone/hapio?branch=master)

[![NPM](https://nodei.co/npm/hapio.png)](https://nodei.co/npm/hapio)

A simple bridge plugin between HapiJS and SocketIO.

### Plugin registration

```js
const server = new Hapi.Server({
    port: 3000,
    host: 'localhost',
});

async function start() {
    try {
        await server.register(hapio, {
            serverOptions: {
                // socket.io options
            }
        });
        await server.start();
    } catch (e) {
        console.error(e);
    }
}
start();
 ```

### Using hapio

```js
const io = server.plugins.hapio.io;

io.on('connection', function(socket) {
    console.log(`${socket.id} connected !`);
    socket.on('test', function(e) {
        console.log('Test received !');
    });
});
 ```


### hapio options

 * `serverOptions`: (*Not required/Defaults to an empty object*) [Options to pass to socket.io's constructor](https://socket.io/docs/server-api/#new-server-httpserver-options).


### A great idea?

Do not hesitate to make a pull request

### An issue with hapio?

Just open an issue on [Github](https://github.com/Caligone/hapio/issues) and I will fix it as soon as possible
