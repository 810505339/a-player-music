<script setup lang="ts">
defineProps<{
  name: string
  age: number
}>()
</script>

<template>
  {{ name }} ---{{ age }}
</template>
