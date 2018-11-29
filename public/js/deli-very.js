/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';


var vm = new Vue({
  el: '#doots',
  data: {
    orders: {
      x: 10,
      y: 10,
      details: {}
    }
  },

  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};

      this.orders.x = event.clientX;
      this.orders.y = event.clientY;
      this.orders.details = { xx: event.clientX - 10 - offset.x,
                 yy: event.clientY - 10 - offset.y };

      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
      console.log("should not be here");


    },



  }
});
