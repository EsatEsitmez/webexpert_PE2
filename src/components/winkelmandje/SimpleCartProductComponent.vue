<template>
  <div id="winkelwagencontainerproduct">
    <div class="winkelwagenproduct">
      <img :src="require(`@/assets/products/${product.img}`)" :alt="product.title">
    </div>
    <div class="winkelwagenproduct">
      <h2> {{ product.title }}</h2>
    </div>
    <div class="winkelwagenproduct">
      <h3 style="font-weight: 400">
        {{ quantityString }}
      </h3>
    </div>
    <div class="winkelwagenproduct">
      <h2>{{ productSumPrice }}</h2>
    </div>
  </div>
  <div id="winkelwagenlijn"><hr></div>
</template>

<script>
    export default {
        props: [
            'product'
        ],

        computed: {
            quantityString() {
                return 'Aantal: ' + this.product.quantity
            },
            productSumPrice() {
                return '€ ' + (Math.round((this.product.price * this.product.quantity) * 100) / 100).toFixed(2)
            }
        }
    }
</script>
