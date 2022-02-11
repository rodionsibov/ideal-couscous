<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const value = ref(0);

onMounted(() => {
  store.dispatch("generateData");
});

// const test = ref("FIRST_sEConD NOT");

const addToCounter = (payload) => store.commit("addToCounter", payload);
const subtractFromCounter = (payload) =>
  store.commit("subtractFromCounter", payload);
</script>

<template>
  <!-- <div style="font-size: 3rem; line-height: 4rem; font-weight: bold; margin: 50px 0 200px;">
<div>
    {{ test }}
  </div>


  <div>
    {{
      test
        .split(/_| /)
        .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join(" ")
        .replace(/(\w+)\s(\w+)/g, '$2 $1')
    }}
  </div>
</div> -->

  <div v-if="!store.state.isLoading">
    <h1>Vuex Counter</h1>
    <h2 class="counter">
      {{ $store.state.counter }}
    </h2>
    <button @click="subtractFromCounter(value)">-</button>
    <input type="number" v-model="value" />
    <button @click="addToCounter(value)">+</button>
  </div>
  <div v-else>Data is loading...</div>
</template>

<style scoped>
.counter {
  font-size: 5rem;
  margin: 20px 0;
}

button {
  border-radius: 100%;
  border: none;
  width: 2rem;
  height: 2rem;
  font-weight: 700;
  cursor: pointer;
}

input {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
}
</style>