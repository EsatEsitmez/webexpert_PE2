<template>
  <ProductFiltersComponent @filter-data="setFilterData" />
 <div class="items__flex__container">
    <ProductsOverviewComponent :filteredList="this.filteredList" />
  </div>
</template>

<script>
import ProductFiltersComponent from '@/components/overzichtpagina/ProductFiltersComponent';
import ProductsOverviewComponent from '@/components/overzichtpagina/ProductsOverviewComponent';

export default {
  data() {
    return {
      filteredList: this.productList,
      currentPage: 1,
      itemsPerPage: 8,
    };
  },

  components: {
    ProductFiltersComponent,
    ProductsOverviewComponent,
  },

  inject: ['productList'],

  methods: {
    setFilterData(soort,  prijs) {
      this.filteredList = [];
      if (soort !== 'Alle' &&  prijs !== 'Alle') {
        this.productList.forEach(product => {
          if (product.filter.soort === soort && product.filter. prijs ===  prijs) {
            this.filteredList.push(product);
          }
        });
        return
      }
      if (soort !== 'Alle' &&  prijs === 'Alle') {
        this.productList.forEach(product => {
          if (product.filter.soort === soort) {
            this.filteredList.push(product);
          }
        });
        return
      }
      if (soort === 'Alle' &&  prijs !== 'Alle') {
        this.productList.forEach(product => {
          if (product.filter. prijs ===  prijs) {
            this.filteredList.push(product);
          }
        });
        return
      }
      this.productList.forEach(product => {
        this.filteredList.push(product);
      });
      this.currentPage = 1;
    },

    handlePageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    paginatedList() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredList.slice(start, end);
    },
  },
};


</script>
