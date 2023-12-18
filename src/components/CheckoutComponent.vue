<template>
  <div class="winkelwagenheader">

  </div>


  <div class="winkelwagencontainerschow">
    <div id="winkelwagencontainergap">
      <div id="winkelwagencontainerproducten">

        <SimpleCartProductComponent v-for="product in cartList" :key="product.id" :product="product"/>
        <button class="winkelwagenbutton">
          <router-link to="/products" style="text-decoration: none"><h5>Meer Producten</h5></router-link>
        </button>
      </div>

      <div id="winkelwagencontainerbesteloverzicht">
        <PriceComponentVue/>

      </div>
    </div>
  </div>

  <div class="winkelwagencontainer">
    <section id="winkelwagencontainerform">
      <button @click="goToLink()" class="winkelwagenbutton"><h5>Ga verder</h5></button>

      <form>
        <div class="formlabels">

          <label for="Voornaam">Voornaam: </label>
          <input type="text" name="voornaam" id="voornaam" placeholder="Voornaam" v-model="voornaam">
          <label for="Naam">Naam: </label>
          <input type="text" name="Naam" id="Naam" placeholder="Naam" v-model="naam">
          <label for="Email">Email: </label>
          <input type="text" name="Email" id="Email" placeholder="Email" v-model="email">
        </div>

        <div class="formlabels">
          <label for="Adres">Adres: </label>
          <input type="text" name="Adres" id="Adres" placeholder="Adres" v-model="adres">
          <label for="Stad">Stad: </label>
          <input type="text" name="Stad" id="Stad" placeholder="Stad" v-model="stad">
          <label for="PostCode">PostCode: </label>
          <input type="text" name="PostCode" id="PostCode" placeholder="PostCode" v-model="postCode">
          <label for="Land">Land: </label>
          <input type="text" name="Land" id="Land" placeholder="Land" v-model="land">
        </div>
        <div id="formfactuur">
          <label for="factuur-box">Invoice at diferent location</label>
          <input type="checkbox" name="factuur-box" id="factuur-box" v-model="factuurCheck">
        </div>
      </form>

      <form v-if="factuurCheck === true">

        <div class="formlabels">

          <label for="Voornaam">Voornaam: </label>
          <input type="text" name="voornaam" id="voornaam" placeholder="Voornaam" v-model="invoicevoornaam">
          <label for="Naam">Naam: </label>
          <input type="text" name="Naam" id="Naam" placeholder="Naam" v-model="invoicenaam">
          <label for="Email">Email: </label>
          <input type="text" name="Email" id="Email" placeholder="Email" v-model="invoiceEmail">
        </div>

        <div class="formlabels">
          <label for="Adres">Adres: </label>
          <input type="text" name="Adres" id="Adres" placeholder="Adres" v-model="invoiceAdres">
          <label for="Stad">Stad: </label>
          <input type="text" name="Stad" id="Stad" placeholder="Stad" v-model="invoiceStad">
          <label for="PostCode">PostCode: </label>
          <input type="text" name="PostCode" id="PostCode" placeholder="PostCode" v-model="invoicePostCode">
          <label for="Land">Land: </label>
          <input type="text" name="Land" id="Land" placeholder="Land" v-model="invoiceLand">

        </div>

      </form>
    </section>
  </div>
</template>

<script>
import PriceComponentVue from '@/components/winkelmandje/PriceComponent.vue';
import SimpleCartProductComponent from '@/components/winkelmandje/SimpleCartProductComponent.vue';

export default {
  components: {
    PriceComponentVue,
    SimpleCartProductComponent
  },

  inject: ['cartList'],

  data() {
    return {
      voornaam: '',
      naam: '',
      email: '',
      adres: '',
      stad: '',
      postCode: '',
      land: '',
      factuurCheck: false,
      invoicevoornaam: '',
      invoicenaam: '',
      invoiceEmail: '',
      invoiceAdres: '',
      invoiceStad: '',
      invoicePostCode: '',
      invoiceLand: '',
      localCartList: [...this.cartList]
    };
  },

  mounted() {
    this.loadCart();
  },

  methods: {
    goToLink() {
      this.saveCart();
      this.$router.push('/cart/checkout/confirmation');
    },

    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.localCartList));
    },

    loadCart() {
      const savedCart = localStorage.getItem('cart');

      if (savedCart) {
        this.localCartList = JSON.parse(savedCart);
      }
    },
  },
};
</script>


<style scoped>

</style>