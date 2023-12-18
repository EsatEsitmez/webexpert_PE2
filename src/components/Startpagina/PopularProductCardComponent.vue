<template>
<div class="langselkaar">
  <div @click="goToLink()" class="kaartproducten">
    <img :src="require(`@/assets/products/${image}`)" :alt="title">
    <h1 class="desc">{{ desc }}</h1>
    <br>
    <button class="buttonfavproduct">Bekijken</button>
    <div>
   <p>Keuze van GenkTech</p>
    </div>
      </div>
</div>
  </template>

<script>
export default {
    props: [
        'image',
        'title',
        'desc',
        'price',
        'id'
    ],

    methods: {
        goToLink() {
            this.$router.push('/products/' + this.id)
        }
    }
}
</script>

<style scoped>
.desc {
  color: white;

}
</style>