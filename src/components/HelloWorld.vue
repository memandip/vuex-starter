<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Counter: {{ counter }}</p>
    <p>
      <button @click="increment">+Increment</button>&nbsp;
      <button @click="decrement">-Decrement</button>&nbsp;
      <button @click="asyncFunc">+Async (after 3 seconds)</button>
    </p>
  </div>
</template>

<script>
import { INCREMENT, DECREMENT, ASYNC_FUNC } from "./../store/mutations";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    increment() {
      this.$store.dispatch(INCREMENT);
    },
    decrement() {
      this.$store.dispatch(DECREMENT);
    },
    asyncFunc() {
      this.$store.dispatch(ASYNC_FUNC);
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
