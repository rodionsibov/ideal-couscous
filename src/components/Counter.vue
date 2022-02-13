<script setup>
import { computed, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const value = ref(0);

onMounted(() => {
  store.dispatch("generateData");
});

// const regEx = ref('[0-9]{8,}r')

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
    <!-- <input type="text" v-model="value" required :pattern="regEx" title="Requested format: [0-9]{8,}r" /> -->
    <button @click="addToCounter(value)">+</button>
    <div class="btn" @click="addRandomNumber">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Add by Random Number
    </div>
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

.btn {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.8rem;
  margin: 30px auto;
  width: fit-content;
  padding: 16px 24px;
  border-radius: 50px;
  background-color: #00a36c;
  color: white;
  box-shadow: 2px 2px 4px rgba(0, 128, 128, 0.8);
  text-shadow: 1px 1px 1px teal;
  transition: all 0.2s ease;
}

.btn:hover {
  box-shadow: 2px 2px 16px rgba(0, 128, 128, 0.8);
  letter-spacing: 1px;
}

.btn:active {
  background-color: teal;
}

.btn svg {
  width: 20px;
  margin-right: 6px;
}

:global(input) {
  padding: 0.4rem;
  margin: 0 0.5rem;
  text-align: center;
  border: 1px solid lightgray;
  transition: border 0.2s ease-in;
  border-radius: 2px;
  /* outline: none; */
}

/* input:invalid {
  outline: 4px solid rgba(255, 99, 71, 0.2);
  border-radius: 2px;
  background: url("https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg")
    no-repeat 95% 50% lightsalmon;
}

input:valid {
  border: 1px solid skyblue;
  outline: 4px solid rgba(135, 206, 235, 0.2);
  border-radius: 2px;
  background: url("https://assets.digitalocean.com/labs/icons/hand-thumbs-up.svg")
    no-repeat 95% 50% lightgreen;
} */
/* 
input:valid {
  border: 1px solid green;
  outline: 4px solid rgba(0, 128, 0, 0.2);
  border-radius: 2px;
} */
</style>