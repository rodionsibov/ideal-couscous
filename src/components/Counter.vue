<script setup>
</script>

<template>
  <h1>Vuex Counter</h1>
  <h2 class="counter">0</h2>
  <button>-</button>
  <input type="number" />
  <button>+</button>
</template>

<style scoped>
.counter {
  font-size: 5rem;
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