const producto = new Vue({
    el: '#app',
    data: {
            id: 1, 
            cantidad: 1, 
            color:null,
            html: "<b> Cámara Dual </b>"
    },
    methods: {
        colorselec: function(color1){
            this.color=color1
            alert(`Usted ha elegido el color ${this.color}`)
        },
        comprar: function(){
            alert(`Usted solicitó la compra de: ' ${this.cantidad} articulos de color ${this.color}`)
        }

    }
})