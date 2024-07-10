<script setup lang="ts">
import LanguagePage from "./LanguagePage.vue";
import { jsInfo } from "../data/jsInfo";
</script>

<template>
  <LanguagePage :languageInfo="jsInfo" />
</template>
