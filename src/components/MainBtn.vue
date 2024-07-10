<script setup lang="ts">
interface Props {
  btntext: string;
}

const props = defineProps<Props>();
</script>

<template>
  <button
    class="bg-secondary hover:bg-secondary/80 text-background transform rounded-full px-6 py-3 font-bold shadow-lg transition-all duration-300 hover:scale-105"
  >
    {{ props.btntext }}
  </button>
</template>
