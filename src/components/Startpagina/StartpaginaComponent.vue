<template>
  <section class="hero">
    <div class="overlay">
      <div class="text-container">
        <h1>Welkom bij GenkTech</h1>
        <p>Ontdek onze geweldige producten en profiteer van exclusieve aanbiedingen. </p>
        <router-link class="buttonhero" to="/products">Bekijk Producten</router-link>
      </div>
    </div>
  </section>
  <!-- Kaarten -->
  <div class="kaart-container">
    <div class="kaart">
      <img :src="require('@/assets/products/gamen.jpg')" alt="Avatar 1" style="width:100%">
      <div class="inhoud">
        <h4 class="kop"><b>Headsets voor thuis</b></h4>
        <p class="tekst">Ontdek de perfecte balans tussen comfort en geluidskwaliteit met onze thuisgebruik headsets. Geniet van meeslepende audio-ervaringen en langdurig comfort, waardoor je thuis werken, entertainment of gamen naar nieuwe hoogten tilt</p>
      </div>
    </div>
    <div class="kaart">
      <img :src="require('@/assets/products/draaien.png')" alt="Avatar 2" style="width:100%">
      <div class="inhoud">
        <h4 class="kop"><b>Headsets voor proffesioneel gebruik</b></h4>
        <p class="tekst">Duik in een wereld van comfort en eersteklas geluid voor professionals met onze zakelijke headsets. Ervaar uitzonderlijke
          audiokwaliteit tijdens het werk en geniet van langdurig draagcomfort, waardoor je professionele taken naar ongekende niveaus tilt.</p>
      </div>
    </div>
    <div class="kaart">
      <img :src="require('@/assets/reizen.webp')" alt="Avatar 1" style="width:100%">      <div class="inhoud">
        <h4 class="kop"><b>Headsets om te reizen</b></h4>
        <p class="tekst">Ontdek comfort en topgeluid tijdens je reizen met onze headsets. Geniet onderweg van meeslepende audio-ervaringen voor werk, entertainment of gaming. Reis in stijl en comfort met onze compacte metgezellen.</p>
      </div>
    </div>
    <div class="titelvanstartpagina"><h1>↓ Onze meest bekende producten! ↓</h1></div>
  </div>

</template>

<script>

</script>
