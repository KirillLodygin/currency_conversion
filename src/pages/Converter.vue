<template>
  <h1>{{ title }}</h1>

  <my-card-wrapper>
    <form class='denomination-form' @submit.prevent>
      <my-card>
        <my-select
          :title='titles[0]'></my-select>
        <input
          v-focus
          type='number'
          class='input-sum'
          v-model.number='denomination'
          :disabled='isDisabled'
          @input='correctInput'
        />
      </my-card>

      <my-button>=</my-button>
    </form>

    <div>
      <my-card>
        <my-select
          :title='titles[1]'></my-select>
        <input
          type='text'
          class='input-sum'
          v-model='result'
          disabled
        />
      </my-card>
    </div>
  </my-card-wrapper>

  <div v-bind:class="[(currencies.includes('RUB') || (currencies[0] === currencies[1]))  ? 'opacity' : 'red']">
    Рассчитать курс доллара к евро или евро к доллару мы не можем!
  </div>


</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Converter',

  data() {
    return {
      titles: ['Give', 'Get'],
      title: 'Converter',
      denomination: 0
    };
  },

  methods: {
    ...mapActions({
      getCurrencies: 'getCurrencies',
    }),

  },

  mounted() {
    this.getCurrencies();
  },

  computed: {
    ...mapState({
      currencies: state => state.currencies,
      result: state => state.result
    }),

    isDisabled() {
      return (this.currencies[0] !== this.currencies[1]) && !this.currencies.includes('RUB');
    },

    correctInput(){
      if (this.denomination < 0) {
        this.denomination = 0;
      }
      this.$store.commit('setDenomination', this.denomination);
      this.$store.commit('setResult');
    },
  }

};
</script>

<style scoped>
  h1 {
    margin-bottom: 15px;
  }

  .denomination-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 270px;
  }

  .input-sum {
    width: 100%;
    border: 1px solid #cccccc;
    padding: 4px 5px;
    background: white;
    border-radius: 5px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    font-weight: 700;
    font-size: 16px;
  }

  .opacity {
    opacity: 0;
  }

  .red {
    color: crimson;
  }
</style>
