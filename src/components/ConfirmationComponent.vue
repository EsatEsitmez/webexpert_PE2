<template>

  <div class="winkelwagencontainershow">
    <div id="winkelwagencontainergap">
      <div id="winkelwagencontainerproducten">
        <button class="winkelwagenbutton">
          <router-link to="/products" style="text-decoration: none"><h5>Koop meer producten</h5></router-link>
        </button>
        <SimpleCartProductComponent v-for="product in cartList" :key="product.id" :product="product"/>
      </div>

      <div id="winkelwagencontainerbesteloverzicht">
        <PriceComponentVue/>
      </div>
    </div>
  </div>
</template>
<script>
import PriceComponentVue from '@/components/winkelmandje/PriceComponent.vue';
import SimpleCartProductComponent from '@/components/winkelmandje/SimpleCartProductComponent.vue'

export default {
  components: {
    PriceComponentVue,
    SimpleCartProductComponent
  },

  inject: [
    'cartList'
  ],
}

</script>
