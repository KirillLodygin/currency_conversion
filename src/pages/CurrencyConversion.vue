<template>
  <h1>{{title}}</h1>

  <my-card-wrapper
    v-if="!isPostsLoading"
  >
    <my-card>
      <div class='course-item-title'>Курс USD</div>
      <div
        class='course-item-value'
        v-bind:class="[(rate['USD'] > rate['USDPrev']) ? 'red' : 'green']">
        {{ usdRate }}
      </div>
    </my-card>

    <my-card>
      <div class='course-item-title'>Курс EUR</div>
      <div
        class='course-item-value'
        v-bind:class="[(rate['EUR'] > rate['EURPrev']) ? 'red' : 'green']"
      >{{ eurRate }}</div>
    </my-card>
  </my-card-wrapper>

  <div v-else>
    <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'CurrencyConversion',
  data() {
    return {
      title: 'Currency Conversion',
      color: '#2c3e50',
      size: '80px',
      loading:true
    };
  },

  methods: {
    ...mapActions({
      getCurrencies: 'getCurrencies'
    })
  },

  mounted() {
    this.getCurrencies();
  },

  computed: {
    ...mapState({
      isPostsLoading: state => state.isPostsLoading,
      eurRate: state => state.eurRate,
      usdRate: state => state.usdRate,
      rate: state => state.rate
    }),
  },

};
</script>

<style scoped>
  h1 {
    margin-bottom: 15px;
  }

  .course-item-title {
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 25px;
  }

  .course-item-value {
    font-size: 32px;
    font-weight: 300;
  }

  .green {
    color: teal;
  }

  .red {
    color: crimson;
  }
</style>
