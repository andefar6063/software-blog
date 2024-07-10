<script setup lang="ts">
import MainBtn from "../components/MainBtn.vue";
</script>

<template>
  <main
    class="flex min-h-[90vh] flex-col items-center justify-center p-4 text-center"
  >
    <div class="mx-auto max-w-3xl">
      <h1
        class="from-primary to-secondary mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold leading-tight text-transparent"
      >
        Welcome to Anton's Computer Science Blog
      </h1>
      <p class="mb-10 text-xl leading-relaxed text-white/90">
        Here, you'll discover technologies explained in a way that's easy to
        understand and apply.
      </p>
      <MainBtn btntext="Explore Topics" />
    </div>
  </main>
</template>
