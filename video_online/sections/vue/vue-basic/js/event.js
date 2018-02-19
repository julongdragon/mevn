let app = new Vue({
    el: "#app",
    data: {
        x: 0
    },
    methods: {
        mouseTest: function(event) {
            //console.log(event.offsetX)
            this.x = event.offsetX
        }
    }
})