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
            class="text-lg font-semibold text-white transition-all duration-300 hover:text-secondary"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/why-javascript-is-used"
            class="text-white transition-all duration-300 hover:text-secondary"
          >
            JavaScript
          </RouterLink>
          <RouterLink
            to="/why-go-is-used"
            class="text-white transition-all duration-300 hover:text-secondary"
          >
            GO
          </RouterLink>
          <RouterLink
            to="/test-your-knowledge"
            class="text-white transition-all duration-300 hover:text-secondary"
          >
            Test Your Knowledge
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>
