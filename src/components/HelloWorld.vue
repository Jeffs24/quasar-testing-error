<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>

    <q-btn label="Test" @click="() => console.log('test')"></q-btn>
  </div>
</template>

<style scoped></style>
