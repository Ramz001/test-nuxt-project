<script setup lang="ts">
import type { ProductsResponse } from "~/types/product";

useHead({
  title: "Каталог | Kitogo",
});

const config = useRuntimeConfig();

const {
  data,
  error: fetchError,
  refresh,
} = await useFetch<ProductsResponse>(`${config.public.apiBase}/products`, {
  params: { page: 1 },
  key: "products-initial",
  server: true,
  lazy: false,
  default: () => ({
    products: [],
    currentPage: 1,
    totalPages: 1,
  }),
});

const products = ref<ProductsResponse["products"]>([]);
const currentPage = ref(1);
const totalPages = ref(1);
const isLoading = ref(false);
const loadError = ref<Error | null>(null);

watchEffect(() => {
  if (!data.value) return;

  products.value = data.value.products;
  currentPage.value = data.value.currentPage;
  totalPages.value = data.value.totalPages;
});

const hasMore = computed(() => currentPage.value < totalPages.value);

const loadMore = async () => {
  if (isLoading.value || !hasMore.value) return;

  isLoading.value = true;
  loadError.value = null;

  try {
    const nextPage = currentPage.value + 1;

    const response = await $fetch<ProductsResponse>(
      `${config.public.apiBase}/products`,
      {
        params: { page: nextPage },
      },
    );

    products.value.push(...response.products);
    currentPage.value = response.currentPage;
    totalPages.value = response.totalPages;
  } catch (e) {
    loadError.value = e as Error;
  } finally {
    isLoading.value = false;
  }
};

const retryInitial = async () => {
  await refresh();
};

const retryLoadMore = () => {
  loadMore();
};
</script>

<template>
  <div class="catalog">
    <div class="catalog__container container">
      <header class="catalog__header">
        <h1 class="catalog__title">КАТАЛОГ</h1>
      </header>

      <div v-if="fetchError && products.length === 0" class="catalog__error">
        <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
        <button
          type="button"
          class="catalog__retry-button"
          @click="retryInitial"
        >
          Повторить
        </button>
      </div>

      <div v-else class="catalog__content">
        <div class="catalog__grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>

        <div v-if="isLoading" class="catalog__loading">
          <span class="catalog__loading-text">Загрузка...</span>
        </div>

        <div v-else-if="loadError" class="catalog__error">
          <p class="catalog__error-text">Ошибка загрузки страницы</p>
          <button
            type="button"
            class="catalog__retry-button"
            @click="retryLoadMore"
          >
            Повторить
          </button>
        </div>

        <div v-else-if="hasMore" class="catalog__actions">
          <button type="button" class="catalog__load-more" @click="loadMore">
            Показать еще
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.catalog {
  padding: $spacing-lg 0 $spacing-2xl;
  background-color: $color-white;

  @media (min-width: $breakpoint-md) {
    padding: $spacing-xl 0 $spacing-3xl;
  }

  &__header {
    margin-bottom: $spacing-xl;
    text-align: center;

    @media (min-width: $breakpoint-md) {
      margin-bottom: $spacing-2xl;
    }
  }

  &__title {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
    color: $color-black;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    @media (min-width: $breakpoint-md) {
      font-size: $font-size-2xl;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: $spacing-2xl;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: $spacing-lg $spacing-md;

    @media (min-width: $breakpoint-md) {
      grid-template-columns: repeat(3, 1fr);
      gap: $spacing-xl;
    }

    @media (min-width: $breakpoint-lg) {
      grid-template-columns: repeat(4, 1fr);
      gap: $spacing-xl $spacing-lg;
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
    padding-top: $spacing-lg;
  }

  &__load-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    padding: 14px 32px;
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    color: $color-black;
    background-color: $color-white;
    border: 1px solid $color-gray-300;
    transition:
      border-color $transition-fast,
      background-color $transition-fast;

    &:hover {
      border-color: $color-black;
    }
  }

  &__loading {
    display: flex;
    justify-content: center;
    padding: $spacing-xl 0;
  }

  &__loading-text {
    font-size: $font-size-sm;
    color: $color-gray-500;
  }

  &__error {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-md;
    padding: $spacing-xl;
  }

  &__error-text {
    font-size: $font-size-sm;
    color: $color-gray-600;
    text-align: center;
  }

  &__retry-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    font-size: $font-size-sm;
    font-weight: $font-weight-normal;
    color: $color-white;
    background-color: $color-black;
    transition: background-color $transition-fast;
    border: dotted 1px $color-gray-600;

    &:hover {
      background-color: $color-gray-800;
    }
  }
}
</style>
