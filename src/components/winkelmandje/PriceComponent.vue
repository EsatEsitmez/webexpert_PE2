<template>
  <div class="winkelwagenbesteloverzicht">
    <div><h1 style="font-weight: 400">Besteloverzicht</h1></div>

     <div>
       <div class="winkelwagenbesteloverzichtvlakken">
         <p>Totaal artikelen:</p>
         <div class="winkelwagenbesteloverzichtprijs">€ {{showSubtotal}}</div>
       </div>
       <div class="winkelwagenbesteloverzichtvlakken">
         <p>Totaal BTW:</p>
         <div class="winkelwagenbesteloverzichtprijs">€ {{showBTW}}</div>
       </div>
       <div id="winkelwagenlijn"><hr>
       </div>
       <div class="winkelwagenbesteloverzichtvlakken">
         <p>Totaal prijs</p>
         <div class="winkelwagenbesteloverzichtprijs">€ {{showTotal}}</div>
       </div>
     </div>
  </div>
</template>

<script>
    export default {
        inject: [
            'cartList'
        ],

        computed: {
            subtotalCalc(){
                var i = 0
                this.cartList.forEach(product => {
                    i = (Math.round((parseFloat(i) + (product.price * product.quantity)) * 100) / 100).toFixed(2)
                });
                return i
            },
            BTWCalc(){
                var i = 0
                this.cartList.forEach(product => {
                    i = (Math.round((parseFloat(i) + (((product.price / 100) * product.BTW) * product.quantity)) * 100) / 100).toFixed(2)
                });
                return i
            },
            totalCalc(){
                var i = 0
                i = (Math.round((parseFloat(this.subtotalCalc) + parseFloat(this.BTWCalc)) * 100) / 100).toFixed(2)
                return i
            },

            showSubtotal(){
                return this.subtotalCalc
            },
            showBTW(){
                return this.BTWCalc
            },
            showTotal(){
                return this.totalCalc
            }
        }
    }
</script>

<style>
#winkelwagen__lijn hr {

  margin: auto;
}

</style>
