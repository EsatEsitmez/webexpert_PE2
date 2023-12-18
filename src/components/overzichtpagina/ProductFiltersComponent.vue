<template>
  <div class="productpaginafilter">
    <div class="filter-section">
      <h1>Kies waarvoor je soort dient</h1>
      <div class="select-wrapper">
        <label>
          <select v-model="soort" class="productselect">
            <option value="Alle">Alle</option>
            <option value="Persoonlijk">Persoonlijk</option>
            <option value="Professioneel">Professioneel</option>
          </select>
        </label>
      </div>
    </div>

    <div class="filter-section">
      <h1>Kies je prijsklasse</h1>
      <div class="select-wrapper">
        <label>
          <select v-model="prijs" class="productselect">
            <option value="Alle">Alle</option>
            <option value="Goedkoop">Goedkoop</option>
            <option value="Duur">Duur</option>
          </select>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      soort: 'Alle',
      prijs: 'Alle',
    };
  },

  emits: ['filter-data'],

  watch: {
    soort: 'emitFilterData',
    prijs: 'emitFilterData',
  },

  methods: {
    emitFilterData() {
      this.$emit('filter-data', this.soort, this.prijs);
    },
  },
};
</script>
