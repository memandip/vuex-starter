<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Counter: {{ counter }}</p>
    <p>
      <button @click="increment" :disabled="disabled">+Increment</button>&nbsp;
      <button @click="decrement" :disabled="disabled">-Decrement</button>&nbsp;
      <br />
      <br />
      <button @click="asyncIncrement" :disabled="disabled">
        +Async increment (after 3 seconds)
      </button>
      &nbsp;
      <button @click="asyncDecrement" :disabled="disabled">
        -Async decrement (after 3 seconds)
      </button>
      &nbsp;
    </p>
  </div>
</template>

<script>
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  ASYNC_DECREMENT,
} from "./../store/mutations";

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
    asyncIncrement() {
      this.$store.dispatch(ASYNC_INCREMENT);
    },
    asyncDecrement() {
      this.$store.dispatch(ASYNC_DECREMENT);
    },
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    disabled() {
      return this.$store.state.disabled;
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
