hapio
=====

[![Dependency Status](https://david-dm.org/Caligone/hapio.svg)](https://david-dm.org/Caligone/hapio)
[![devDependency Status](https://david-dm.org/Caligone/hapio/dev-status.svg)](https://david-dm.org/Caligone/hapio#info=devDependencies)
[![Build Status](https://travis-ci.org/Caligone/hapio.svg?branch=master)](https://travis-ci.org/Caligone/hapio)
[![Coverage Status](https://coveralls.io/repos/Caligone/hapio/badge.svg?branch=master)](https://coveralls.io/r/Caligone/hapio?branch=master)

A simple bridge plugin between HapiJS and SocketIO.

### Plugin registration

```js
var server = new hapi.Server();
server.connection({ port: 3001, labels: 'myFirstServer' });
server.connection({ port: 3002, labels: 'mySecondServer' });

//[...]

server.pack.register({
    	plugin: require('hapio'),
    	options: {
			connectionLabel: 'mySecondServer'
    	}
    }, 
    function(err) {
    	if (err) throw err;
});
 ```

If you do not set the connectionLabel option, hapio will pick your first connection and bind socket.io on it.

### Using hapio

```js
var io = server.plugins.hapio.io;

io.on("connection", function(socket) {
    console.log(socket.id + " connected !");
    socket.on("test", function(e) {
        console.log('Test received !');
    });
});
 ```


### hapio options

 * `connectionLabel`: (*Not required/Defaults to an empty string*) Connection's label on which socket io will be attached to


### A great idea?

Do not hesitate to make a pull request

### An issue with hapio?

Just open an issue on [Github](https://github.com/Caligone/hapio/issues) and I will fix it as soon as possible
