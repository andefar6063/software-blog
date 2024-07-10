<script setup lang="ts"></script>

<template>
  <nav
    class="sticky top-0 z-10 border-b border-white/20 shadow-lg backdrop-blur-md"
  >
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-6">
          <RouterLink
            to="/"
            class="hover:text-secondary text-lg font-semibold text-white transition-all duration-300"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/why-javascript-is-used"
            class="hover:text-secondary text-white transition-all duration-300"
          >
            JavaScript
          </RouterLink>
          <RouterLink
            to="/why-go-is-used"
            class="hover:text-secondary text-white transition-all duration-300"
          >
            GO
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
