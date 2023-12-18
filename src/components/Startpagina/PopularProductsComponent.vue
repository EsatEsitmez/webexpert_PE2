<template>
  <PopularProductCardComponent
      v-for="product in popularProducts" :key="product.id"
      :titel="product.title"
      :desc="product.description"
      :image="product.img"
      :id="product.id"
  ></PopularProductCardComponent>
  <!-- Kenmerken -->
  <div class="kenmerken">

    <div class="kenmerk">

      <img :src="require('@//assets/retour.svg')" alt="Avatar 1" style="width:100px" height="100px">
      <h3>Gratis Retour</h3>
      <p>Retourneer gratis binnen 60 dagen</p>
    </div>
    <div class="kenmerk">

      <img :src="require('@//assets/levering.svg')" alt="Avatar 1" style="width:100px" height="100px">
      <h3>Levering Morgen</h3>
      <p>Bestel voor 22:00 uur voor levering morgen</p>
    </div>
    <div class="kenmerk">
      <img :src="require('@//assets/headsetex.svg')" alt="Avatar 1" style="width:100px" height="100px">
      <h3>Exclusieve Headsets</h3>
      <p>Alleen op deze website verkrijgbaar</p>
    </div>
    <div class="kenmerk">
      <img :src="require('@//assets/mail.svg')" alt="Avatar 1" style="width:100px" height="100px">
      <h3>24/7 Hulp</h3>
      <p>Altijd beschikbaar via mail of chat</p>
    </div>
  </div>
</template>

<script>

import PopularProductCardComponent from './PopularProductCardComponent.vue';

export default {
    components: {
        PopularProductCardComponent
    },

    props: [
        'popularProducts'
    ],
}
</script>
