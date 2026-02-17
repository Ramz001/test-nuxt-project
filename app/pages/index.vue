<script setup lang="ts">
// Home page
useHead({
  title: 'Главная | Kitogo',
})
</script>

<template>
  <div class="home">
    <section class="hero">
      <div class="hero__container container">
        <h1 class="hero__title">ТЕСТОВОЕ ЗАДАНИЕ</h1>
        <NuxtLink to="/catalog" class="hero__button">
          В каталог
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.hero {
  flex: 1;
  display: flex;
  align-items: center;
  padding: $spacing-3xl 0;
  min-height: 100vh;

  @media (min-width: $breakpoint-md) {
    padding: $spacing-4xl 0;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-xl;
  }

  &__title {
    font-size: 32px;
    font-weight: $font-weight-bold;
    line-height: $line-height-tight;
    color: $color-black;
    text-transform: uppercase;

    @media (min-width: $breakpoint-md) {
      font-size: 48px;
    }

    @media (min-width: $breakpoint-lg) {
      font-size: 56px;
    }
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 24px;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-white;
    background-color: #ff0000;
    transition: background-color $transition-fast;

    &:hover {
      background-color: #e60000;
    }
  }
}
</style>
