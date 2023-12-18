<template>
  <StartpaginaComponent/>
  <div class="items__flex__container">
    <PopularProductsComponent :popularProducts=" getPopularProducts(productList)"></PopularProductsComponent>
  </div>
</template>

<script>
  import PopularProductsComponent from '@/components/Startpagina/PopularProductsComponent';
  import StartpaginaComponent from '@/components/Startpagina/StartpaginaComponent'

  export default {
    components: {
      PopularProductsComponent,StartpaginaComponent
    },

    inject: [
      'productList'
    ],

    data() {
      return {
        item1: {"stock": 0},
        item2: {"stock": 0},
        item3: {"stock": 0}
      }
    },

    methods: {
      getPopularProducts(productList) {
        let popularProducts = []
        let item1 = {"stock": 0}
        let item2 = {"stock": 0}
        let item3 = {"stock": 0}
        productList.forEach(product => {
          if(product.stock > item1.stock) {
            item1 = product;
          } else if(product.stock > item2.stock) {
            item2 = product;
          }  else if(product.stock > item3.stock) {
            item3 = product;
          }
        });
        popularProducts.push(item1, item2, item3);
        return popularProducts;
      }
    },
  }
</script>

<style scoped>
router-link{
  text-decoration: none;
}
</style>
