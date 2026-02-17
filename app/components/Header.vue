<script setup lang="ts">
// Header component with navigation
</script>

<template>
  <header class="header">
    <div class="header__container container">
      <NuxtLink to="/" class="header__logo">
        <span class="header__logo-square"></span>
      </NuxtLink>

      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Мужчинам</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Женщинам</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Каталог</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Доставка</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">Блог</a>
          </li>
          <li class="header__nav-item">
            <a href="#" class="header__nav-link">О нас</a>
          </li>
        </ul>
      </nav>

      <button type="button" class="header__burger" aria-label="Меню">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: $color-white;
  border-bottom: 1px solid $color-gray-200;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    gap: $spacing-lg;

    @media (min-width: $breakpoint-lg) {
      height: 80px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  &__logo-square {
    display: block;
    width: 32px;
    height: 32px;
    background-color: #ff0000;

    @media (min-width: $breakpoint-lg) {
      width: 40px;
      height: 40px;
    }
  }

  &__nav {
    display: none;

    @media (min-width: $breakpoint-lg) {
      display: block;
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    gap: $spacing-xl;
  }

  &__nav-link {
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    color: $color-black;
    transition: color $transition-fast;

    &:hover {
      color: $color-gray-600;
    }
  }

  &__burger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid $color-gray-300;
    border-radius: $radius-md;
    background-color: $color-white;
    color: $color-black;

    @media (min-width: $breakpoint-lg) {
      display: none;
    }
  }
}
</style>
