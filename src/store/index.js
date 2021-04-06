import { createStore } from "vuex";
import { INCREMENT, DECREMENT, ASYNC_FUNC } from "./mutations";
import { state } from "./state";

export const store = createStore({
  state,
  mutations: {
    [INCREMENT](state, payload = { amount: 1 }) {
      state.counter += payload.amount;
    },
    [DECREMENT](state, payload = { amount: 1 }) {
      state.counter -= payload.amount;
    }
  },
  actions: {
    [INCREMENT]({ commit }) {
      commit(INCREMENT, { amount: 10 });
    },
    [DECREMENT]({ commit }) {
      commit(DECREMENT, { amount: 10 });
    },
    async [ASYNC_FUNC]({ commit }) {
      // eslint-disable-next-line no-unused-vars
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(commit(INCREMENT, { amount: 1 }));
        }, 3000);
      });
    }
  }
});