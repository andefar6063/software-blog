<script setup lang="ts">
interface LanguageInfo {
  title: string;
  intro: string;
  keyPoints: string[];
  comparison?: {
    title: string;
    points: string[];
  };
  conclusion: string;
}

const props = defineProps<{
  languageInfo: LanguageInfo;
}>();
</script>

<template>
  <div class="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <h1
        class="mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-4xl font-bold text-transparent"
      >
        {{ languageInfo.title }}
      </h1>
      <div class="text-white/90">
        <p class="text-lg">
          {{ languageInfo.intro }}
        </p>
        <ul class="my-4 space-y-4">
          <li
            v-for="(point, index) in languageInfo.keyPoints"
            :key="index"
            class="flex items-start"
          >
            <span class="mr-2 text-secondary">•</span>
            <span class="text-lg">{{ point }}</span>
          </li>
        </ul>
        <div
          v-if="languageInfo.comparison"
          class="space-y-4 rounded-lg border border-primary/20 bg-primary/10 p-6"
        >
          <h2 class="mb-4 text-2xl font-semibold text-secondary">
            {{ languageInfo.comparison.title }}
          </h2>
          <div
            v-for="(point, index) in languageInfo.comparison.points"
            :key="index"
            class="flex items-start"
          >
            <span class="mr-2 text-secondary">•</span>
            <span class="text-lg" v-html="point"></span>
          </div>
        </div>
        <p class="mt-4 text-center text-xl font-semibold text-secondary">
          {{ languageInfo.conclusion }}
        </p>
      </div>
    </div>
  </div>
</template>
