let app = new Vue({
    el: '#app',
    data: {
        msg: "",
        name: "",
        spin: "",
        price: 5
    },
    methods: {
        priceUP: function(cost) {
            this.price += cost
        },
        priceDOWN: function(cost) {
            if (this.price == 0) {
                this.price = 0
            } else {
                this.price -= cost
            }

        },
        doThat: function() {
            console.log("spin")
            this.spin = true
        }
    }

})