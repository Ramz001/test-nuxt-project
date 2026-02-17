<script setup lang="ts">
// Footer component
</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__top">
        <nav class="footer__nav">
          <div class="footer__nav-column">
            <h4 class="footer__nav-title">Каталог</h4>
            <ul class="footer__nav-list">
              <li><a href="#" class="footer__nav-link">Все бренды</a></li>
              <li><a href="#" class="footer__nav-link">Nike</a></li>
              <li><a href="#" class="footer__nav-link">Adidas</a></li>
              <li><a href="#" class="footer__nav-link">Puma</a></li>
              <li><a href="#" class="footer__nav-link">New Balance</a></li>
            </ul>
          </div>

          <div class="footer__nav-column">
            <h4 class="footer__nav-title">Помощь</h4>
            <ul class="footer__nav-list">
              <li><a href="#" class="footer__nav-link">Доставка</a></li>
              <li><a href="#" class="footer__nav-link">Заказ и оплата</a></li>
              <li><a href="#" class="footer__nav-link">Обмен и Возврат</a></li>
              <li><a href="#" class="footer__nav-link">F. A. Q.</a></li>
            </ul>
          </div>

          <div class="footer__nav-column">
            <h4 class="footer__nav-title">Информация</h4>
            <ul class="footer__nav-list">
              <li><a href="#" class="footer__nav-link">Преимущества</a></li>
              <li><a href="#" class="footer__nav-link">Гарантия и безопасность</a></li>
              <li><a href="#" class="footer__nav-link">Индивидуальный заказ</a></li>
              <li><a href="#" class="footer__nav-link">Акции</a></li>
            </ul>
          </div>

          <div class="footer__nav-column">
            <h4 class="footer__nav-title">Компания</h4>
            <ul class="footer__nav-list">
              <li><a href="#" class="footer__nav-link">О нас</a></li>
              <li><a href="#" class="footer__nav-link">Блог</a></li>
              <li><a href="#" class="footer__nav-link">Отзывы</a></li>
              <li><a href="#" class="footer__nav-link">Контакты</a></li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">2025 © Kitogo. Все права защищены</p>
        <div class="footer__bottom-links">
          <a href="#" class="footer__bottom-link">Политика конфеденциальности</a>
          <span class="footer__bottom-divider"></span>
          <a href="#" class="footer__bottom-link">Дизайн и разработка — tapir.digital</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $color-black;
  color: $color-white;
  padding: $spacing-2xl 0 $spacing-xl;

  @media (min-width: $breakpoint-md) {
    padding: $spacing-3xl 0 $spacing-xl;
  }

  &__container {
    display: flex;
    flex-direction: column;
    gap: $spacing-2xl;

    @media (min-width: $breakpoint-md) {
      gap: $spacing-3xl;
    }
  }

  &__nav {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-xl $spacing-lg;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(4, 1fr);
      gap: $spacing-xl;
    }
  }

  &__nav-column {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
  }

  &__nav-title {
    font-size: $font-size-xs;
    font-weight: $font-weight-normal;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: $color-gray-500;
    margin-bottom: $spacing-xs;
  }

  &__nav-list {
    display: flex;
    flex-direction: column;
    gap: $spacing-sm;
  }

  &__nav-link {
    font-size: $font-size-sm;
    color: $color-white;
    transition: color $transition-fast;

    &:hover {
      color: $color-gray-400;
    }
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    padding-top: $spacing-xl;
    border-top: 1px solid $color-gray-800;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__copyright {
    font-size: $font-size-xs;
    color: $color-gray-500;
  }

  &__bottom-links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: $spacing-sm;
  }

  &__bottom-link {
    font-size: $font-size-xs;
    color: $color-gray-500;
    transition: color $transition-fast;

    &:hover {
      color: $color-white;
    }
  }

  &__bottom-divider {
    display: none;

    @media (min-width: $breakpoint-md) {
      display: block;
      width: 1px;
      height: 12px;
      background-color: $color-gray-700;
    }
  }
}
</style>
