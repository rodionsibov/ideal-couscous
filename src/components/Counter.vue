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

const addRandomNumber = () => store.dispatch("addRandomNumber");
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
    <div class="btn" @click="addRandomNumber">Add Random Number</div>
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

.btn {
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;
  margin: 30px auto;
  width: fit-content;
  padding: 16px 24px;
  border-radius: 50px;
  background-color: #00A36C;
  color: white;
  box-shadow: 2px 2px 4px rgba(0, 128, 128, 0.8);
  text-shadow: 1px 1px 1px teal;
  transition: all 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 2px 2px 16px rgba(0, 128, 128, 0.8)
}

.btn:active {
  background-color: teal;
}
</style>