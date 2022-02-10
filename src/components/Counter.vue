<script setup>
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
  store.dispatch("generateData");
});

const counter = computed(() => store.state.counter);
</script>

<template>
  <div v-if="!store.state.isLoading">
    <h1>Vuex Counter</h1>
    <h2 class="counter">
      {{ counter }}
    </h2>
    <button>-</button>
    <input type="number" />
    <button>+</button>
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