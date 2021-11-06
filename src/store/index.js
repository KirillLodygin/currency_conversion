import { createStore } from 'vuex';
import { useCalculateResult } from '@/hooks/useCalculateResult';

export default createStore({
  state: () => ({
    currencies: ['RUB', 'RUB'],
    isPostsLoading: false,
    rate: {
      USD: 0,
      EUR: 0,
      USDPrev: 0,
      EURPrev: 0,
    },
    eurRate: '--.--',
    usdRate: '--.--',
    result: '',
    denomination: 0,
  }),
  getters: {},
  mutations: {
    setBaseCurrency(state, baseCurrency) {
      if (baseCurrency.split('-')[1] === 'Give') {
        state.currencies[0] = baseCurrency.split('-')[0];
      } else {
        state.currencies[1] = baseCurrency.split('-')[0];
      }
      state.result = useCalculateResult(state.currencies, state.denomination, state.rate);
    },

    setDenomination(state, denomination) {
      state.denomination = denomination;
    },

    setResult(state) {
      state.result = useCalculateResult(state.currencies, state.denomination, state.rate);
    },

    setEmptyLineResult (state) {
      state.result = '';
    },

    setInitialCurrencies (state) {
      state.currencies = ['RUB', 'RUB']
    },

    setNullDenomination (state) {
      state.denomination = 0;
    },

    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },

    setRates(state, rates) {
      state.rate.USD = rates.Valute.USD.Value;
      state.rate.EUR = rates.Valute.EUR.Value;
      state.rate.USDPrev = rates.Valute.USD.Previous;
      state.rate.EURPrev = rates.Valute.EUR.Previous;
      state.eurRate = rates.Valute.EUR.Value.toFixed(2);
      state.usdRate = rates.Valute.USD.Value.toFixed(2);
    },
  },
  actions: {
    async getCurrencies({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        const result = await data;

        commit('setRates', result);
        commit('setEmptyLineResult');
        commit('setInitialCurrencies');
        commit('setNullDenomination');

      } catch (e) {
        console.log(e);
      } finally {
        commit('setLoading', false);
      }
    },
  },
});
