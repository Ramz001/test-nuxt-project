<script setup lang="ts">
import type { ProductsResponse } from '~/types/product'

useHead({
  title: 'Каталог | Kitogo',
})

const config = useRuntimeConfig()

// SSR: fetch first page on server
const { data: initialData, error: initialError } = await useFetch<ProductsResponse>(
  `${config.public.apiBase}/products`,
  {
    params: { page: 1 },
    key: 'products-initial',
  }
)

// Reactive state
const products = ref(initialData.value?.products ?? [])
const currentPage = ref(initialData.value?.currentPage ?? 1)
const totalPages = ref(initialData.value?.totalPages ?? 1)
const isLoading = ref(false)
const error = ref<Error | null>(initialError.value as Error | null)

const hasMore = computed(() => currentPage.value < totalPages.value)

// Load more products
const loadMore = async () => {
  if (isLoading.value || !hasMore.value) return

  isLoading.value = true
  error.value = null

  try {
    const data = await $fetch<ProductsResponse>(`${config.public.apiBase}/products`, {
      params: { page: currentPage.value + 1 },
    })

    products.value = [...products.value, ...data.products]
    currentPage.value = data.currentPage
    totalPages.value = data.totalPages
  } catch (e) {
    error.value = e as Error
  } finally {
    isLoading.value = false
  }
}

// Retry on error
const retry = () => {
  loadMore()
}
</script>

<template>
  <div class="catalog">
    <div class="catalog__container container">
      <header class="catalog__header">
        <h1 class="catalog__title">КАТАЛОГ</h1>
      </header>

      <!-- Initial error state (SSR) -->
      <div v-if="initialError && products.length === 0" class="catalog__error">
        <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
        <button type="button" class="catalog__retry-button" @click="retry">
          Повторить
        </button>
      </div>

      <!-- Products grid -->
      <div v-else class="catalog__content">
        <div class="catalog__grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>

        <!-- Loading state -->
        <div v-if="isLoading" class="catalog__loading">
          <span class="catalog__loading-text">Загрузка...</span>
        </div>

        <!-- Error state after loading -->
        <div v-else-if="error" class="catalog__error">
          <p class="catalog__error-text">Произошла ошибка, попробуйте позже</p>
          <button type="button" class="catalog__retry-button" @click="retry">
            Повторить
          </button>
        </div>

        <!-- Load more button -->
        <div v-else-if="hasMore" class="catalog__actions">
          <button
            type="button"
            class="catalog__load-more"
            @click="loadMore"
          >
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
    transition: border-color $transition-fast, background-color $transition-fast;

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
