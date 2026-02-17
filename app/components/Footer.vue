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
              <li>
                <a href="#" class="footer__nav-link">Гарантия и безопасность</a>
              </li>
              <li>
                <a href="#" class="footer__nav-link">Индивидуальный заказ</a>
              </li>
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
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $color-black;
  color: $color-white;
  padding: 3.75rem 1.25rem;

  @media (min-width: $breakpoint-md) {
    padding: 6.25rem 3.75rem;
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
}
</style>
