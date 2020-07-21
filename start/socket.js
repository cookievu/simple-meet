"use strict";

/*
|--------------------------------------------------------------------------
| Websocket
|--------------------------------------------------------------------------
|
| This file is used to register websocket channels and start the Ws server.
| Learn more about same in the official documentation.
| https://adonisjs.com/docs/websocket
|
| For middleware, do check `wsKernel.js` file.
|
*/

const Ws = use("Ws");

const channels = {};

function join(channel, socketId) {
  if (channels[channel]) {
    channels[channel].push(socketId);
  } else {
    channels[channel] = [socketId];
  }
}

function leave(channel, socketId) {
  channels[channel] = channels[channel].filter((e) => e !== socketId);
}

function getClients(channel) {
  return channels[channel] || [];
}

Ws.channel("meet:*", ({ socket }) => {
  const { topic, id } = socket;
  join(topic, id);

  console.log("Clients: ", getClients(topic));
  socket.broadcast("message", "Socket ID " + id + " is joined");

  socket.on("close", () => {
    console.warn("Socket ID " + id + " is leaved");
    leave(topic, id);
  });
});
