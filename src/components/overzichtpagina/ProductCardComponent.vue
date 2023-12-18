<template>
  <div @click="goToLink()" class="kaartproducten">
    <img class="" :src="require(`@/assets/products/${image}`)" :alt="title">
    <h1 class="producttitel">{{ title }}</h1>
    <p  class="productprijs">Subtotaal: € {{ price }} </p>
    <button class="buttonproduct">Meer Informatie</button>
  </div>

</template>

<script>
    export default {
        props: [
            'title',
            'price',
            'image',
            'id'
        ],

        methods: {
            goToLink() {
                this.$router.push('/products/' + this.id)
            }
        }
    }
</script>
