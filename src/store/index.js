import { createStore } from "vuex";
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  ASYNC_DECREMENT,
  SET_DISABLED
} from "./mutations";
import { state } from "./state";

export const store = createStore({
  state,
  mutations: {
    [INCREMENT](state, payload = { amount: 1 }) {
      state.counter += payload.amount;
    },
    [DECREMENT](state, payload = { amount: 1 }) {
      state.counter -= payload.amount;
    },
    [SET_DISABLED](state, payload) {
      state.disabled = payload.disabled
    }
  },
  actions: {
    [INCREMENT]({ commit }) {
      commit(INCREMENT, { amount: 10 });
    },
    [DECREMENT]({ commit }) {
      commit(DECREMENT, { amount: 10 });
    },
    async [ASYNC_INCREMENT]({ commit }) {
      commit(SET_DISABLED, { disabled: true });
      setTimeout(() => {
        commit(INCREMENT, { amount: 1 })
        commit(SET_DISABLED, { disabled: false });
      }, 3000);
    },
    async [ASYNC_DECREMENT]({ commit }) {
      commit(SET_DISABLED, { disabled: true });
      setTimeout(() => {
        commit(DECREMENT, { amount: 1 })
        commit(SET_DISABLED, { disabled: false });
      }, 3000);
    }
  }
});