const sockets = {
  onConnection: (io) => (socket) => {
    chatSocket(io, socket);
  },
};

module.exports = sockets;
