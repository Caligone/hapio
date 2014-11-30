hapio
=====

A simple bridge plugin between HapiJS and SocketIO

### Plugin registration

```js
server.pack.register({
    	plugin: require('hapio'),
        options: goodOptions
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
    socket.on("/textarea/listen", function(e) {
        console.log('ListenX received !');
    });
});
 ```
