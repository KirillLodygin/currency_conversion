<template>
  <div class='header-wrapper'>
    <h3>{{ title }}</h3>
    <div>
      <select
        class='currency-select'
        @change="changeOption"
      >
        <option
          v-for="option in sortOptions"
          :key="option.value"
          :value="option.value + '-' + title"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-select',

  data() {
    return {
      sortOptions: [
        {value: 'RUB', name: 'RUB'},
        {value: 'USD', name: 'USD'},
        {value: 'EUR', name: 'EUR'}
      ],
    }
  },

  props: {
    title: {
      type: String
    }
  },

  methods: {
    changeOption(event) {
      this.$store.commit('setBaseCurrency', event.target.value);
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.currency-select {
  padding: 5px 10px;
  font-weight: 700;
  font-size: 12px;
  box-shadow: 4px 5px 4px gray;
  border-radius: 5px;
}

</style>
