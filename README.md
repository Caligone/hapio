hapio
=====

A simple bridge plugin between HapiJS and SocketIO.

### Plugin registration

```js
server.pack.register({
    	plugin: require('hapio')
    }, 
    function(err) {
    	if (err) throw err;
});
 ```

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

### A great idea?

Do not hesitate to make a pull request?