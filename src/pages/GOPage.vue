<script setup lang="ts">
import LanguagePage from "./LanguagePage.vue";
import { goInfo } from "../data/goInfo";
</script>

<template>
  <LanguagePage :languageInfo="goInfo" />
</template>
