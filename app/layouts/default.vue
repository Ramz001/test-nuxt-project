<script setup lang="ts">
// Default layout with header and footer
</script>

<template>
  <div class="page">
    <Header />
    <main class="page__main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
