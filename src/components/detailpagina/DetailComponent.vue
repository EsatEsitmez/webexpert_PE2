<template>
  <!--Breadcrumb -->
  <div class="breadcrumb">
    <router-link class="Breadcrumbtext" to="/"> Homepagina > </router-link>
    <router-link class="Breadcrumbtext" to="/products"> Producten > </router-link>

    <h4>{{ product.title }}</h4>
  </div>

  <div class="flex-container">
    <div class="productinfopagina">
      <img :src="require(`@/assets/products/${product.img}`)" :alt="product.title">
    </div>
    <div class="productinfopagina">
      <h1>{{ product.title }}</h1>
      <h2>€ {{ product.price}} excl. BTW</h2>
      <div>
        <h2>Beschrijving van product</h2>
        <p>{{product.description}}</p>
      </div>
      <QuantityInputComponent id="component" :stock="product.stock" @quantity-data="setQuantityData"/>
      <router-link v-if="product.stock === 0" to="/products">
        <button class="productdetails__buttons">{{ buttonText }}</button>
      </router-link>
      <button v-else class="productdetails__buttons" @click="handleButtonClick" :disabled="product.stock === 0 && !loggedIn">
        {{ buttonText }}
      </button>
    </div>
  </div>

  <div class="vergelijkingstabel">
    <table>
      <thead>
      <tr>
        <th>Merk</th>
        <th>{{ product.title }}</th>
        <th>EliteAudio Noise-Canceling Master</th>
        <th>BetaBlast Lite Headset</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td><b>Prijs</b></td>
        <td>{{ product.price}}</td>
        <td>€129.99</td>
        <td>€29.99</td>
      </tr>
      <tr>
        <td><b>Geluidskwaliteit</b></td>
        <td>Uitstekend</td>
        <td>Goed</td>
        <td>slecht</td>
      </tr>
      <tr>
        <td><b>Connectiviteit</b></td>
        <td>Bedraad</td>
        <td>Draadloos</td>
        <td>Bedraad</td>
      </tr>
      <tr>
        <td><b>Compatibiliteit</b></td>
        <td>PC, Xbox, PlayStation</td>
        <td>PC, PlayStation</td>
        <td>PC, Xbox</td>
      </tr>
      <tr>
        <td><b>Microfoon</b></td>
        <td>Ruisonderdrukking</td>
        <td>Standaard microfoon</td>
        <td>Krachtige ruisonderdrukking</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import QuantityInputComponent from '@/components/QuantityInputComponent.vue';

export default {
  components: {
    QuantityInputComponent
  },

  inject: ['productList', 'cartList', 'loggedIn'],

  data() {
    return {
      quantity: 1
    };
  },

  computed: {
    destinationId() {
      return this.$route.params.id;
    },

    product() {
      return this.productList.find(listItem => listItem.id === this.destinationId);
    },

    buttonText() {
      return this.product.stock === 0 ? 'Bekijk andere producten' : 'In winkelwagen plaatsen';
    }
  },

  methods: {
    handleButtonClick() {
      console.log('loggedIn:', this.loggedIn);
      console.log('product.stock:', this.product.stock);
      console.log('quantity:', this.quantity);

      if (this.loggedIn) {
        if (this.product.stock > 0 && this.quantity <= this.product.stock) {
          let newProduct = { ...this.product };
          newProduct.quantity = this.quantity;
          this.cartList.push(newProduct);
          this.product.stock -= this.quantity;
          this.quantity = 1;
          console.log('Product toegevoegd aan winkelwagen');
        } else {
          console.log('Onvoldoende voorraad of ongeldige hoeveelheid');
          this.$router.push('/products');
        }
      } else {
        console.log('Redirecting to /login');
        this.$router.push('/login');
        alert('Log in om een product aan de winkelwagen toe te voegen');
      }
    },

    setQuantityData(quantity) {
      this.quantity = quantity;
    }
  },

  mounted() {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    console.log('Stored loggedIn:', storedLoggedIn);
    if (storedLoggedIn === 'true') {
      this.loggedIn = true;
    }
  }
};
</script>

<style scoped>
</style>