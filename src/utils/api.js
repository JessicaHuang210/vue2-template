import Vue from "vue";
const socket = new WebSocket(process.env.VUE_APP_API_URL);
const emitter = new Vue({
  methods: {
    send(message) {
      if (1 === socket.readyState) socket.send(message);
    }
  }
});
socket.onmessage = function(msg) {
  emitter.$emit("message", msg.data);
};
socket.onerror = function(err) {
  emitter.$emit("error", err);
};
export default emitter;
