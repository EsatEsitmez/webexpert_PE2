<template>
  <div>
    <div class="pagination">
      <button @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">&lt;</button>
      <button
          @click="goToPage(page)"
          v-for="page in totalPages"
          :key="page"
          :class="{ active: page === currentPage }"
      >
        {{ page }}
      </button>
      <button @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">&gt;</button>
    </div>
    <div class="product-list">
      <ProductCardComponent
          v-for="product in paginatedList"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :image="product.img"
          :id="product.id"
      ></ProductCardComponent>
    </div>
  </div>
</template>

<script>
import ProductCardComponent from '@/components/overzichtpagina/ProductCardComponent.vue';

export default {
  components: {
    ProductCardComponent,
  },

  props: ['filteredList'],

  data() {
    return {
      perPage: 8,
      currentPage: 1,
    };
  },

  computed: {
    paginatedList() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = start + this.perPage;
      return this.filteredList.slice(start, end);
    },

    totalPages() {
      return Math.ceil(this.filteredList.length / this.perPage);
    },
  },

  watch: {
    filteredList() {
      this.currentPage = 1;
    },
  },

  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  margin: 0 5px;
  cursor: pointer;
  background: #074f80;
  color: white;
  border: none;
  padding: 8px 12px;
  transition: background 0.3s;
}

.pagination button:hover {
  background: #0a6fa9;
}

.pagination button.active {
  background: #3aa3e0;
}

.product-list {
  margin-top: 20px;
}
</style>