new Vue({
    el: '#subBut',
    methods: {
        markDone: function() {
            console.log("(Vue) Button clicked on!");
        }
    }
});

new Vue({
  el: '#menu',
  data: {
    menuItems: MenuItems
  }
});
