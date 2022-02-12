<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const history = computed(() => store.state.history);
</script>

<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p v-for="(number, index) in history" :key="index">
        {{ number }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 7rem;
}

p {
    margin: 0;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 1rem;
  justify-content: center;
  width: 25rem;
  margin: 0 auto;
  margin-bottom: 3rem;
}
</style>