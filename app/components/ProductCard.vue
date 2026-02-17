<script setup lang="ts">
import type { Product } from "~/types/product";

interface Props {
  product: Product;
}

const props = defineProps<Props>();

// Price x2 = price / 2, rounded up
const priceX2 = computed(() => Math.ceil(props.product.price / 2));

const formatPrice = (price: number): string => {
  return price.toLocaleString("ru-RU") + " ₽";
};

const formatPriceX2 = (price: number): string => {
  return price.toLocaleString("ru-RU") + " ₽ × 2";
};
</script>

<template>
  <article class="product-card">
    <a href="#" class="product-card__link">
      <div class="product-card__image-wrapper">
        <img
          :src="product.image"
          :alt="product.name"
          class="product-card__image"
          loading="lazy"
        />
        <button
          type="button"
          class="product-card__favorite"
          aria-label="Добавить в избранное"
          title="Добавить в избранное"
          @click.prevent
        >
          <img
            src="~/assets/icons/heart.svg"
            alt="Добавить в избранное"
            width="24"
            height="24"
          />
        </button>
      </div>
      <div class="product-card__content">
        <div class="product-card__prices">
          <div class="product-card__price">{{ formatPrice(product.price) }}</div>
          <span class="product-card__price-x2-badge">{{ formatPriceX2(priceX2) }}</span>
        </div>
        <h3 class="product-card__name">{{ product.name }}</h3>
      </div>
    </a>
  </article>
</template>

<style scoped lang="scss">
.product-card {
  &__link {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  &__image-wrapper {
    position: relative;
    aspect-ratio: 1;
    background-color: $color-white;
    overflow: hidden;
    margin-bottom: $spacing-md;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform $transition-slow;

    .product-card:hover & {
      transform: scale(1.02);
    }
  }

  &__favorite {
    position: absolute;
    top: $spacing-xs;
    right: $spacing-xs;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    color: $color-gray-400;
    transition: color $transition-fast;
    padding: 0;

    @media (min-width: $breakpoint-md) {
      top: $spacing-sm;
      right: $spacing-sm;
    }

    &:hover {
      color: $color-black;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $spacing-xs;
  }

  &__prices {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-xs;

    @media (min-width: $breakpoint-md) {
      flex-direction: row;
      align-items: center;
      gap: $spacing-sm;
    }
  }

  &__price {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
    color: $color-black;

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-xl;
    }
  }

  &__price-x2-badge {
    display: inline-block;
    padding: 4px 8px;
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    color: $color-white;
    background-color: $color-black;
  }

  &__name {
    font-size: $font-size-xs;
    font-weight: $font-weight-medium;
    color: $color-gray-600;
    line-height: $line-height-normal;
    margin-top: $spacing-xs;

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-sm;
    }
  }
}
</style>
