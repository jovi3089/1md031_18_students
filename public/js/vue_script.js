'use strict';
console.log(1);
var socket = io();
console.log(2);
var vm = new Vue({
  el: '#index',
  data: {
    menuItems: MenuItems,
    fullName: "",
    pickedBurg: [],
    orderInfo: {
      fullName: "",
      finished: false,
      picked: "",
      coordinates: ""
    },
    orders: {
      x: 10,
      y: 10,
      details: {}
    }
  },

  methods: {
    markDone: function (){
      this.orderInfo.fullName = this.fullName;
      this.orderInfo.finished = true;
      this.orderInfo.picked = this.pickedBurg;
      this.orderInfo.coordinates = this.orders.details;
      var x_msg = this.orders.details.xx;
      var y_msg = this.orders.details.yy;
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: x_msg,
                                           y: y_msg},
                                orderItems: ["Beans", "Curry"]
                              });
    },
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {


      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: this.orders.details.xx,
                                           y: this.orders.details.xx},
                                orderItems: ["Beans", "Curry"]
                              });
    },

    displayOrder: function(event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      this.orders.x = event.clientX;
      this.orders.y = event.clientY;
      this.orders.details = { xx: event.clientX - 10 - offset.x,
                 yy: event.clientY - 10 - offset.y };

    }

  }
});
