<script setup>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

const store = useStore();
const history = computed(() => store.state.history);

const value = ref(0);
</script>

<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p v-for="(number, index) in history" :key="index">
        {{ number }}
      </p>
    </div>
    <input type="number" placeholder="Search by Index" v-model="value" />
  </div>
</template>

<style scoped>
.container {
  margin: 4rem 0;
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
  margin: 2rem auto;
}
</style>